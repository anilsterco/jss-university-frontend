import LoginForm from "@/component/login/Login";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const payload = token ? await verifyToken(token) : null;

  if (payload) {
    redirect("/protected-files");
  }

  return (
    <>
        <LoginForm />
    </>
  )
}
