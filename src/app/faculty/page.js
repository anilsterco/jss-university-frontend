import { getPageSEO } from "@/lib/seo";
import FacultyClient from "./FacultyClient";

export async function generateMetadata() {
  return await getPageSEO("faculty");
}

export default function Faculty() {
  return <FacultyClient />;
}
