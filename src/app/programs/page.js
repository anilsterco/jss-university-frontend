import { getPageSEO } from "@/lib/seo";
import ProgramClient from "./ProgramClient";

export async function generateMetadata() {
  return await getPageSEO("program");
}

export default function Program() {
  return <ProgramClient />;
}
