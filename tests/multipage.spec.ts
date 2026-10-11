import { test, expect } from "@playwright/test";

const pages = [
  ["/redesign/shop", "Catálogo Packman"],
  ["/redesign/sobre-nosotros", "Sobre nosotros"],
  ["/redesign/faq", "Preguntas frecuentes"],
  ["/redesign/contacta-con-nosotros", "Contacta con nosotros"],
  ["/redesign/shop/mystery-og", "Mystery OG"],
] as const;

for (const [route, heading] of pages) {
  test(`V3: ${route} renders responsively with local resources`, async ({
    page,
    baseURL,
  }) => {
    const errors: string[] = [];
    const failures: string[] = [];
    const requests: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400) failures.push(response.url());
    });
    page.on("request", (request) => requests.push(request.url()));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["x-robots-tag"]).toBe("noindex, nofollow");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      heading,
    );
    await expect(
      page.getByText("DEMO NO OFICIAL", { exact: true }),
    ).toBeVisible();
    await expect(page.locator(".cu-footer-word")).toHaveText("PACKMAN");
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
    });
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every(
              (image) =>
                (image as HTMLImageElement).complete &&
                (image as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page.locator("a").evaluateAll((links) =>
        links.every((link) => {
          const anchor = link as HTMLAnchorElement;
          return (
            anchor.origin === location.origin &&
            !/checkout|cart|\/product\/|wa\.me|mailto:|tel:/.test(anchor.href)
          );
        }),
      ),
    ).toBe(true);
    await expect(
      page.locator('input[type="number"], [data-cart], [data-checkout]'),
    ).toHaveCount(0);
    expect(await page.locator("main").innerText()).not.toMatch(
      /\d[.,]\d{2}\s*€|añadir al carrito|comprar ahora/i,
    );
    expect(errors).toEqual([]);
    expect(failures).toEqual([]);
    expect(
      requests.every(
        (url) => url.startsWith(baseURL!) || url.startsWith("data:"),
      ),
    ).toBe(true);
  });
}

test("V3: all five shared header destinations navigate and indicate the active page", async ({
  page,
}) => {
  await page.goto("/redesign");
  await expect(page.locator(".cu-header")).toHaveAttribute(
    "data-enhanced",
    "true",
  );
  const menu = page.getByRole("button", { name: /^(Abrir|Cerrar) menú$/ });
  for (const [label, route] of [
    ["Shop", "/redesign/shop"],
    ["Sobre nosotros", "/redesign/sobre-nosotros"],
    ["FAQ", "/redesign/faq"],
    ["Contacta con nosotros", "/redesign/contacta-con-nosotros"],
    ["Home", "/redesign"],
  ]) {
    if (await menu.isVisible()) await menu.click();
    await page
      .getByRole("navigation", { name: "Navegación principal", exact: true })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await expect(
      page.locator(`#chromatic-navigation a[href="${route}"]`),
    ).toHaveAttribute("aria-current", "page");
    if (await menu.isVisible())
      await expect(menu).toHaveAttribute("aria-expanded", "false");
  }
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect
    .poll(() =>
      page
        .locator(".cu-header")
        .evaluate(
          (element) => Math.abs(element.getBoundingClientRect().top) < 2,
        ),
    )
    .toBe(true);
  if (await menu.isVisible()) {
    await menu.click();
    await page.keyboard.press("Tab");
    await expect(
      page.locator('#chromatic-navigation a[href="/redesign"]'),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
  }
});

test("V3: catalog filters link to informational references, with verified source categories", async ({
  page,
}) => {
  await page.goto("/redesign/shop");
  await page
    .getByRole("button", { name: "packman 2g disposable", exact: true })
    .click();
  await expect(page.locator(".visual-card")).toHaveCount(3);
  await expect(page.getByRole("status")).toHaveText("3 referencias");
  await page
    .getByRole("link", {
      name: /50 Pack Variety Box.*Ver ficha informativa/,
    })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "50 Pack Variety Box",
  );
  await expect(
    page
      .locator(".cu-reference-facts")
      .getByText("packman 2g disposable", { exact: true }),
  ).toBeVisible();
  await expect(
    page.locator('#chromatic-navigation a[href="/redesign/shop"]'),
  ).toHaveAttribute("aria-current", "page");
  await page
    .getByRole("link", { name: "Volver al catálogo", exact: false })
    .click();
  await page
    .getByRole("button", { name: "Packman Live Resin", exact: true })
    .click();
  await expect(page.locator(".visual-card")).toHaveCount(4);
  await page
    .getByRole("link", { name: /Mystery OG.*Ver ficha informativa/ })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Mystery OG",
  );
});

test("V3: eight static reference URLs work and an unknown slug returns 404", async ({
  request,
}) => {
  for (const [slug, name] of [
    ["mystery-og", "Mystery OG"],
    ["granddaddy-urkle", "Granddaddy Urkle"],
    ["cereal-skunk", "Cereal Skunk"],
    ["berry-payton", "Berry Payton"],
    ["mango-tango", "Mango Tango"],
    ["variety-box-10", "10 Pack Variety Box"],
    ["variety-box-50", "50 Pack Variety Box"],
    ["variety-box-100", "100 Pack Variety Box"],
  ]) {
    const response = await request.get(`/redesign/shop/${slug}`);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(name);
  }
  const missing = await request.get("/redesign/shop/referencia-inexistente");
  expect(missing.status()).toBe(404);
});

test("V3: contact simulation validates fields and never sends or stores a message", async ({
  page,
}) => {
  await page.goto("/redesign/contacta-con-nosotros", {
    waitUntil: "networkidle",
  });
  const preview = page.getByRole("button", {
    name: "Ver vista previa",
    exact: false,
  });
  await expect(preview).toBeEnabled();
  await preview.click();
  await expect(
    page.getByRole("region", { name: "Vista previa del mensaje" }),
  ).toHaveCount(0);
  await page.getByLabel("Nombre", { exact: true }).fill("Persona de ejemplo");
  await page.getByLabel("Email", { exact: true }).fill("ejemplo@example.com");
  await page
    .getByLabel("Mensaje", { exact: true })
    .fill("Consulta de ejemplo sobre el packaging.");
  await page.waitForLoadState("networkidle");
  const requests: string[] = [];
  page.on("request", (request) => requests.push(request.url()));
  await preview.click();
  await expect(page.getByRole("status")).toHaveText(
    "Vista previa preparada. No se ha enviado ningún mensaje.",
  );
  await expect(
    page.getByRole("region", { name: "Vista previa del mensaje" }),
  ).toContainText("Consulta de ejemplo sobre el packaging.");
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
    })),
  ).toEqual({ local: 0, session: 0 });
  expect(requests).toEqual([]);
  await page.getByRole("button", { name: "Volver a editar" }).click();
  await expect(page.getByLabel("Nombre", { exact: true })).toBeFocused();
});

test("V3: scroll ambience changes gradually and freezes with reduced motion", async ({
  page,
}) => {
  await page.goto("/redesign");
  await expect(page.locator(".cu-motion")).toHaveAttribute(
    "data-motion",
    "ready",
  );
  const scene = () =>
    page
      .locator(".cu-motion")
      .evaluate((el) => el.style.getPropertyValue("--scene-cyan"));
  const initial = await scene();
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(
      0,
      (document.documentElement.scrollHeight - innerHeight) * 0.3,
    );
  });
  await expect.poll(scene).not.toBe(initial);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".cu-motion")).toHaveAttribute(
    "data-motion",
    "reduced",
  );
  const frozen = await scene();
  await page.evaluate(() =>
    window.scrollTo(0, document.documentElement.scrollHeight),
  );
  expect(await scene()).toBe(frozen);
});

test.describe("V3 without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("mobile navigation works and the form cannot transmit data", async ({
    page,
  }) => {
    await page.goto("/redesign/contacta-con-nosotros");
    await expect(
      page
        .getByRole("navigation", { name: "Navegación principal", exact: true })
        .getByRole("link", { name: "Shop", exact: true }),
    ).toBeVisible();
    await expect(page.getByLabel("Email", { exact: true })).toBeDisabled();
    await expect(
      page.getByRole("button", { name: "Ver vista previa", exact: false }),
    ).toBeDisabled();
    await page
      .getByRole("navigation", { name: "Navegación principal", exact: true })
      .getByRole("link", { name: "FAQ", exact: true })
      .click();
    await page.locator("summary").first().click();
    await expect(
      page.getByText(
        "Nuestro objetivo es ofrecer información clara y recursos educativos",
        { exact: false },
      ),
    ).toBeVisible();
  });
});
