import { NextRequest } from "next/server";
import getCsrfToken from "@/functions/get_csrf_token";


export async function POST(request: NextRequest){
  const reqData = await request.json();
  const email: string = reqData['email'];
  const cookieResponse: any[] = await getCsrfToken();
  const csrfToken: string = cookieResponse[0].toString();

  
  const validateReqData: object = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'secret': process.env.BACKEND_SECRET_KEY,
      'X-CSRFtoken': csrfToken,
      'Cookie': cookieResponse[1],
    },
    body: JSON.stringify({
      email: email,
    })
  };
  const response: Response = await fetch(`${process.env.API_DEVELOPMENT_BASE_URL}/api/user/validate`,
    validateReqData
  );
  const message: string = await response.text()

  if (response.status == 200 && message == "User found!"){
    return new Response(
      JSON.stringify({
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          found: true,
        }
      })
    );
  } else {
    return new Response(
      JSON.stringify({
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          found: false,
        }
      })
    );
  }
}