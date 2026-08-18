"use server";

import { cookies } from "next/headers";
import { signToken, verifyToken } from "@/lib/auth";

export async function markApiVerified() {
  const token = cookies().get("token")?.value;
  const payload = token ? await verifyToken(token) : null;

  if (!payload) {
    return { success: false, error: "Not logged in." };
  }

  // re-sign the JWT with apiVerified flipped to true
  const newToken = await signToken({
    username: payload.username,
    role: payload.role,
    apiVerified: true,
  });

  cookies().set("token", newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 2,
  });

  return { success: true };
}