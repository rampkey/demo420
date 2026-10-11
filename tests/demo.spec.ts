import { test, expect } from "@playwright/test";

for (const route of ["/original", "/redesign"]) {
  test(`${route}: renderizado, recursos locales, navegación y ausencia de comercio`, async ({
    page,
    baseURL,
  }) => {
    const errors: string[] = [];
    const failures: string[] = [];
    const requests: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        failures.push(`${response.status()} ${response.url()}`);
    });
    page.on("request", (request) => requests.push(request.url()));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toBe("noindex, nofollow");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByText("DEMO NO OFICIAL", { exact: true }),
    ).toBeVisible();
    await expect(page.locator(".asset-notice")).toHaveCount(0);
    await page.evaluate(async () => {
      await document.fonts.ready;
      // Exercise lazy images throughout the page, not just the initial viewport.
      for (let y = 0; y < document.body.scrollHeight; y += 650) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
    });
    await expect
      .poll(async () =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every(
              (img) =>
                (img as HTMLImageElement).complete &&
                (img as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page.locator("a").evaluateAll((links) =>
        links.every((link) => {
          const a = link as HTMLAnchorElement;
          return (
            a.origin === location.origin &&
            !/checkout|cart|\/product\/|wa\.me|mailto:|tel:/.test(a.href)
          );
        }),
      ),
    ).toBe(true);
    await expect(
      page.locator('form, input[type="number"], input[type="email"]'),
    ).toHaveCount(0);
    const disclosure = page.locator("summary").filter({
      hasText:
        route === "/original"
          ? "¿Es la web oficial de Packman?"
          : "¿Cuál es nuestro objetivo principal?",
    });
    await disclosure.click();
    await expect(
      page.getByText(
        route === "/original"
          ? "No. Es un estudio visual independiente"
          : "Nuestro objetivo es ofrecer información clara y recursos educativos",
        {
          exact: false,
        },
      ),
    ).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 0));
    const menu = page.getByRole("button", { name: /^(Abrir|Cerrar) menú$/ });
    if (await menu.isVisible()) {
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await expect(menu).toBeFocused();
      await menu.click();
    }
    const galleryLink =
      route === "/original"
        ? page.locator('.site-navigation a[href="#galeria"]')
        : page
            .getByRole("navigation", {
              name: "Navegación principal",
              exact: true,
            })
            .getByRole("link", { name: "Shop", exact: true });
    await galleryLink.click();
    await expect(page).toHaveURL(
      route === "/original"
        ? `${baseURL}${route}#galeria`
        : `${baseURL}/redesign/shop`,
    );
    if (await menu.isVisible())
      await expect(menu).toHaveAttribute("aria-expanded", "false");
    expect(errors).toEqual([]);
    expect(failures).toEqual([]);
    expect(
      requests.every(
        (url) => url.startsWith(baseURL!) || url.startsWith("data:"),
      ),
    ).toBe(true);
  });
}

test("rediseño: los filtros cambian la galería y anuncian los resultados", async ({
  page,
}) => {
  await page.goto("/redesign");
  await expect(page.locator(".visual-card")).toHaveCount(8);
  await page
    .getByRole("button", { name: "packman 2g disposable", exact: true })
    .click();
  await expect(page.locator(".visual-card")).toHaveCount(3);
  await expect(page.getByRole("status")).toHaveText("3 referencias");
  await expect(
    page.getByRole("button", { name: "packman 2g disposable", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("button", { name: "Packman Live Resin", exact: true })
    .click();
  await expect(page.locator(".visual-card")).toHaveCount(4);
  await page.getByRole("button", { name: "Todo" }).click();
  await expect(page.locator(".visual-card")).toHaveCount(8);
});

test("selector: navegación entre versiones y preferencia de movimiento reducido", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("link", { name: "01 — Original", exact: false }).click();
  await expect(page).toHaveURL(/\/original$/);
  await page
    .getByRole("navigation", { name: "Versiones", exact: true })
    .getByRole("link", { name: "Rediseño" })
    .click();
  await expect(page).toHaveURL(/\/redesign$/);
  await expect(
    page.locator('#chromatic-navigation a[href="/redesign"]'),
  ).toHaveAttribute("aria-current", "page");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
