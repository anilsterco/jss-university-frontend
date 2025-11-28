import { getPageSEO } from "@/lib/seo";
import ContactClient from "./ContactClient";

export async function generateMetadata() {
  return await getPageSEO("contact");
}

export default function Contact() {
  return <ContactClient />;
}
