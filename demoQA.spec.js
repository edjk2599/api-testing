import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.getByRole("textbox", { name: "First Name" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("jeyakumar");
  await page.getByRole("textbox", { name: "Last Name" }).click();
  await page.getByRole("textbox", { name: "Last Name" }).fill("v");
  await page.getByRole("textbox", { name: "name@example.com" }).click();
  await page
    .getByRole("textbox", { name: "name@example.com" })
    .fill("edjk2599@gmail.com");
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.getByRole("textbox", { name: "Mobile Number" }).click();
  await page.getByRole("textbox", { name: "Mobile Number" }).fill("9876543210");
  await page.locator("#dateOfBirthInput").click();
  await page
    .getByRole("gridcell", { name: "Choose Monday, October 12th," })
    .click();
  await page.locator("#subjectsInput").click();
  await page.locator("#subjectsInput").fill("test");
  await page.getByRole("checkbox", { name: "Sports" }).check();
  await page.getByRole("textbox", { name: "Current Address" }).click();
  await page.getByRole("textbox", { name: "Current Address" }).fill("address");
  await page.locator("#react-select-3-input").click();
  await page.getByRole("option", { name: "Uttar Pradesh" }).click();
  await page.locator("#react-select-4-input").click();
  await page.getByRole("option", { name: "Lucknow" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Close" }).click();
});
