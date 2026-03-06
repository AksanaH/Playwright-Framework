import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {InventoryPage} from "../pages/InventoryPage";
import {users} from "../fixtures/testData";

test.describe("SauceDemo Login", () => {
  test("standard user can login successfully", async ({page}) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();

    await loginPage.login(users.standardUser.username, users.standardUser.password);

    await inventoryPage.waitForPageLoaded();

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });
  test("performance glitch user can login", async ({page}) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login(users.performance_glitch_user.username, users.performance_glitch_user.password);

    await inventoryPage.waitForPageLoaded();

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });
});
