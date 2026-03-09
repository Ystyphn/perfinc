import getCsrfToken from "@/functions/get_csrf_token";
import { test, expect } from "vitest";


process.loadEnvFile();


test("Test if can connect to api via get", async () => {
  const response: Response = await fetch(`${process.env.BACKEND_BASE_URL}/api/test`)
  const message: string = await response.text();

  expect(message).toBe("Can connect to API via get!")
  expect(response.status).toBe(200);
})


test("Test getCsrfToken is doing its job properly", async () => {
  const token: any[] = await getCsrfToken();

  expect(token[0].length).toBeGreaterThanOrEqual(32);
})