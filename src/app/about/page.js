import { getPageSEO } from "@/lib/seo";
import AboutClient from "./AboutClient";

export async function generateMetadata() {
  return await getPageSEO("about");
}

export default function AboutPage() {
  return <AboutClient />;
}
