import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  await page.getByRole("button", { name: "Multi-Select" }).click();
  await page.selectOption("[multiple]", ["option1", "option2", "option4"]);
  const promise = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "Download" }).click(),
  ]).then(async ([download]) => {
    const path = await download.saveAs("downloaded-file.txt");
    console.log("Downloaded file path:", path);
  });
});
