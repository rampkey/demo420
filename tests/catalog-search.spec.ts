import { test, expect } from "@playwright/test";

test("catalog search handles normalized names, category intersections and empty results", async ({
  page,
}) => {
  await page.goto("/redesign/shop");
  const search = page.getByRole("searchbox", { name: "Buscar referencias" });
  await search.fill("  MÝSTERY   og  ");
  await expect(page.locator(".visual-card")).toHaveCount(1);
  await expect(page.getByRole("status")).toHaveText("1 referencia");
  await expect(
    page.getByRole("link", { name: /Mystery OG.*Ver ficha informativa/ }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "packman 2g disposable", exact: true })
    .click();
  await expect(page.getByRole("status")).toHaveText("0 referencias");
  await expect(
    page.getByRole("heading", { name: "No se han encontrado referencias" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Restablecer búsqueda y filtros" })
    .click();
  await expect(search).toHaveValue("");
  await expect(
    page.getByRole("button", { name: "Todo", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".visual-card")).toHaveCount(8);
  await search.fill("variety 50");
  await expect(page.locator(".visual-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Borrar búsqueda" }).click();
  await search.fill("Granddaddy");
  await page
    .getByRole("link", { name: /Granddaddy Urkle.*Ver ficha informativa/ })
    .focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/redesign\/shop\/granddaddy-urkle$/);
  await expect(page.locator(".cu-reference-facts")).toContainText(
    "Packman Live Resin",
  );
});

test("visible pages use factual reference content without conceptual slogans", async ({
  page,
}) => {
  for (const route of [
    "/redesign",
    "/redesign/shop",
    "/redesign/sobre-nosotros",
    "/redesign/faq",
    "/redesign/contacta-con-nosotros",
    "/redesign/shop/variety-box-50",
  ]) {
    await page.goto(route);
    expect(await page.locator("body").innerText()).not.toMatch(
      /Chromatic Underground|Full Spectrum|color con carácter|different frequency|same identity|otros tonos|su propio tono|paleta visual/i,
    );
  }
  await page.goto("/redesign/sobre-nosotros");
  await expect(
    page.getByRole("heading", { name: "Información verificable", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Priorizamos contenidos desarrollados con investigación, fuentes fiables y datos actualizados.",
      { exact: true },
    ),
  ).toBeVisible();
  await page.goto("/redesign/faq");
  await page
    .locator("summary")
    .filter({ hasText: "¿Cómo mantenemos la calidad de nuestro contenido?" })
    .click();
  await expect(
    page.getByText(
      "Mediante investigación, actualización constante y un enfoque centrado en información clara para los usuarios.",
      { exact: true },
    ),
  ).toBeVisible();
});
