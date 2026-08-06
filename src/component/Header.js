import HeaderClient from "./HeaderClient";
import "./header.css";
import { BASE_URL } from "@/config/config.mjs";

async function getNavLinks() {
  try {
    const res = await fetch(`${BASE_URL}header`, {
      next: { revalidate: 300 }, // ISR cache — cheap after first hit
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Header nav fetch error:", err);
    return [];
  }
}

export default async function Header() {
  const navLinks = await getNavLinks();
  return <HeaderClient initialNavLinks={navLinks} />;
}