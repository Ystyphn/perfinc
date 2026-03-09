

// This will get a CSRF token from the Backend Django
export default async function getCsrfToken(): Promise<any[]>{
  const response: Response = await fetch(`${process.env.API_DEVELOPMENT_BASE_URL}/api/csrf`, {
    credentials: 'include',
  });
  const headers: Headers = response.headers;
  const cookieArray: string[] = headers.getSetCookie()[0].toString().split("; ");
  const csrfToken: string = cookieArray[0].split("=")[1]
  return [csrfToken.trim(), headers.getSetCookie()[0]];
}