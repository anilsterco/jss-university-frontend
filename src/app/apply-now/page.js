import ApplyNowFormClient from "./ApplyNowFormClient";
import { BASE_URL } from "@/config/config";
import '@/styles/custom.style.css'

export default async function ApplyNowPage() {
  let schools = [];

  try {
    const res = await fetch(`${BASE_URL}school-department-list`, {
      cache: "no-store", // or "force-cache" / revalidate if data is stable
    });

    if (!res.ok) throw new Error("Failed to fetch schools");

    const data = await res.json();
    schools = data.data ?? [];
  } catch (error) {
    console.error("Failed to load school list:", error.message);
  }

  return <ApplyNowFormClient schools={schools} />;
}