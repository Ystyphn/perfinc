

function csrfExtractor(cookie: string): string{
  const cookieArr: string[] = cookie.split("; ");
  const csrfValue: string = cookieArr[0].split("=")[1];
  console.log("Cookie Array was: ", cookieArr);
  console.log("CSRF Value was: ", csrfValue);
  return csrfValue;
}


export default async function userValidator({email, userName, authStrategy}: {
  email: string;
  userName: string;
  authStrategy: string
}): Promise<boolean> {
  if (email.trim() === "") throw new Error("Received email for validation is empty!");

  const baseUrl: string | undefined = process.env.API_DEVELOPMENT_BASE_URL;
  const csrfRes: Response = await fetch(`${baseUrl}/api/csrf`, {
    method: "GET",
    credentials: "include",
  })
  const cookie: string = csrfRes.headers.get("set-cookie")!.toString();

  const response: Response = await fetch(`${baseUrl}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": cookie,
      "X-CSRFToken": csrfExtractor(cookie),
    },
    body: JSON.stringify({
      "username": userName.trim(),
      "email": email.trim(),
      "secret": process.env.API_DB_SECRET_KEY,
      "authstrategy": authStrategy,
    }),
  }); 

  return response.ok ? true : false;
}