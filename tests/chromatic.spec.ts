import { test, expect } from "@playwright/test";

test("Chromatic: reduced motion disables reveals and pointer depth", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/redesign");
  await expect(page.locator(".cu-motion")).toHaveAttribute(
    "data-motion",
    "reduced",
  );
  expect(
    await page
      .locator(".cu-stage")
      .evaluate((e) => getComputedStyle(e).transform),
  ).toBe("none");
  for (const section of await page.locator(".cu-reveal").all())
    expect(await section.evaluate((e) => getComputedStyle(e).opacity)).toBe(
      "1",
    );
});

test("Original: identical rendering after navigating from Chromatic", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/original", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.mouse.move(0, 0);
  const before = await page.screenshot({ animations: "disabled" });
  const versions = page.getByRole("navigation", {
    name: "Versiones",
    exact: true,
  });
  await versions.getByRole("link", { name: "Rediseño" }).click();
  await expect(page.locator(".chromatic-page")).toBeVisible();
  await versions.getByRole("link", { name: "Original", exact: true }).click();
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  await page.mouse.move(0, 0);
  const after = await page.screenshot({ animations: "disabled" });
  expect(Buffer.compare(before, after)).toBe(0);
});

test.describe("Chromatic without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("editorial content and native FAQ remain readable", async ({ page }) => {
    await page.goto("/redesign");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page
        .locator("#identidad")
        .evaluate((e) => getComputedStyle(e).opacity),
    ).toBe("1");
    await page.locator("summary").first().click();
    await expect(
      page.getByText("Nuestro objetivo es ofrecer información clara y recursos educativos", {
        exact: false,
      }),
    ).toBeVisible();
  });
});
