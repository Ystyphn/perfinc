import { test, expect } from '@playwright/test'


test("Test sign in with Google", async ({ page }) => {
  // Go to sign up page
  await page.goto('http://localhost:3000/signup');
  await expect(page).toHaveURL('http://localhost:3000/signup');

  // Get the Sign up with Google button
  const button = await page.getByRole("button", {name: "Sign in with Google"});
  await expect(button).toBeDefined();

  // Check if the Google Callback the local URL;
  await page.getByRole("button", {name: "Sign in with Google"}).click({button: 'left'});
  await page.route("**/api/auth/session", route =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        user: {
          name: "Test User",
          email: "testuser@gmail.com",
          image: "https://example.com/avatar.png"
        },
        expires: "2099-01-01"
      }),
    })
  );

  await expect(page).toHaveURL('**/dashboard');
});