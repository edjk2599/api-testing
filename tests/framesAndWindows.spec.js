import { test } from "@playwright/test";

test("frames and windows", async ({ page }) => {
  await page.goto(
    "https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame",
  );
  const frameLocator = page.frameLocator(
    "//iframe[@name='globalSqa' and contains(@src, 'trainings/')]",
  );
  await frameLocator
    .locator(
      "//div[@id='portfolio_items']/descendant::a[contains(@href, 'jmeter-training/') and /descendant::img[@alt='JMeter Training']]",
    )
    .first()
    .click();
  await page.waitForLoadState("load");
  await frameLocator
    .locator(
      "//div[@id='portfolio_carousel']/descendant::a[contains(@href, 'hp-load-runner-online-training/') and /descendant::img[@alt='LoadRunner Training']]",
    )
    .first()
    .click();
  await page.getByRole("link", { name: "Drag and Drop" }).first().click();
  const draggable1 = page
    .getByText("High Tatras 3", { exact: true })
    .locator(
      "/ancestor::li[@class='ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle']",
    );
  const draggable2 = page
    .getByText("High Tatras 4", { exact: true })
    .locator(
      "/ancestor::li[@class='ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle']",
    );

  const target = page.locator(
    "//div[@id='trash' and contains(@class, 'ui-droppable')]",
  );

  await draggable1.dragTo(target);
  await draggable2.dragTo(target);
});
