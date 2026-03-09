import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';


process.loadEnvFile();


export const restHandlers = [
  http.post(`http://${process.env.BACKEND_BASE_URL}/api/user/validate`, () => {
    return HttpResponse.text("User found!", {status: 200});
    })
]


const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());