import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req) {
  const requestBody = await req.json();

  if (!requestBody.message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  let apiUrl;

  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.CHAT_API_URL;
  } else {
    apiUrl = `http://langclient-${requestBody.courseId}/langserve/invoke`;
  }

  const headersList = headers();
  // apisix openid-connect plugin will pass in a base64 encoded json string of the userinfo
  const userInfoHeader = headersList.get("X-Userinfo");

  console.log(req.method, req.url);
  if (userInfoHeader) {
    console.log("userInfo", parseBase64UserInfo(userInfoHeader));
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: requestBody.message,
      }),
    });

    if (!response.ok) {
      let error = new Error();
      error.status = response.status;
      error.statusText = response.statusText;
      throw error;
    }

    const responseBody = await response.json();
    return NextResponse.json({ output: responseBody.output });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

function parseBase64UserInfo(base64) {
  const binString = atob(base64);
  return JSON.parse(binString);
}
