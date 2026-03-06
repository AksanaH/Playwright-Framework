export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.titleProducts = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator(".inventory_item");
  }

  async waitForPageLoaded() {
    await this.titleProducts.waitFor({state: "visible"});
  }
}
