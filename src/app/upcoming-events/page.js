import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import UpcomingEvents from "./UpcomingEvents";

export async function generateMetadata() {
  return await getPageSEO(`upcoming-events`);
}

export default async function Faculty() {
  const seoData = await getPageSEO(`upcoming-events`);
  return (
    <>
      {seoData?.schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
          strategy="beforeInteractive"
        />
      )}
      <h1 style={{
        display:'none'
      }}>Upcoming Events</h1>
      <UpcomingEvents />
    </>
  );
}
