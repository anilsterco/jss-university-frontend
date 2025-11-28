import { getPageSEO } from "@/lib/seo";
import LeadershipClient from "./LeadershipClient";

export async function generateMetadata() {
  return await getPageSEO("leadership");
}

export default function Leadership() {
  return <LeadershipClient />;
}
