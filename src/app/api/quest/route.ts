import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json(); // フロントから送られてきたデータ
  const { userName, password } = body;

  if (userName === "a" && password === "a") {
    return NextResponse.json({ success: true, message: "ログイン成功" });
  }

  return NextResponse.json(
    { success: false, message: "ログイン失敗" },
    { status: 401 }
  );
}
