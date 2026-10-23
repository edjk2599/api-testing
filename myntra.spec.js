import { test, expect } from "@playwright/test";

test("find the lowest-priced boys' T-shirt", async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts");

  function parsePrice(text) {
    const match = text?.match(/[\d,]+/);
    return match ? Number(match[0].replace(/,/g, "")) : null;
  }
  async function getMinimumPrice() {
    const products = page.locator("//li[@class='product-base']");
    console.log("Total products found:", await products.count());
    const pricesText = await products
      .locator(
        `//div[@class='product-price']/descendant::span[@class='product-discountedPrice' or (not(@class) and text())]`,
      )
      .allTextContents();
    const prices = pricesText.map(parsePrice).filter((price) => price !== null);
    const minimumPrice = prices.reduce(
      (lowest, price) => Math.min(lowest, price),
      Infinity,
    );
    console.log("Lowest price found:", minimumPrice);
    const productDetails = await getProductDetails(minimumPrice);
    console.log("Brand:", productDetails.brand);
    console.log("Product title:", productDetails.title);
  }

  async function getProductDetails(minPrice) {
    const product = page
      .locator(
        `//li[@class='product-base']/descendant::div[@class='product-price']/descendant::span[@class='product-discountedPrice' or (not(@class) and text()) and normalize-space(string(.))='Rs. ${minPrice}']/ancestor::div[@class='product-productMetaInfo']`,
      )
      .first();
    const [productBrand, productTitle] = await Promise.all([
      product.locator("//h3[@class='product-brand']").textContent(),
      product.locator("//h4[@class='product-product']").textContent(),
    ]);
    return {
      brand: productBrand?.trim() || "N/A",
      title: productTitle?.trim() || "N/A",
    };
  }
  await getMinimumPrice();
});
