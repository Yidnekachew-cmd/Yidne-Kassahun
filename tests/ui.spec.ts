import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://yidne-portfolio.onrender.com");

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Yidne Kassahun' })).toBeVisible();
});
