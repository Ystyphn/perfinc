import { test, expect } from '@playwright/test'


test("Test /api/bff/user/check to run", async ({ page }) => {
  const reqData: object = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Ystyphn Both',
      email: 'bothystyphn@gmail.com',
    })
  }

  const response = await fetch('http://localhost:3000/api/bff/user/check', reqData);
  const data = await response.json();
  expect(response.status).toBe(200);
  expect(data.body['found']).toBeTruthy();
});