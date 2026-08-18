"use server";

import { cookies } from "next/headers";
import { signToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(username, password) {
  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return { success: false, error: "Invalid username or password." };
  }

  const token = await signToken({ username, role: "admin" });

  const cookieStore = await cookies();   
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 2,
  });

  redirect("/protected-files");
}

export async function logoutAction() {
  const cookieStore = await cookies();     
  cookieStore.set("token", "", { maxAge: 0, path: "/" });
}