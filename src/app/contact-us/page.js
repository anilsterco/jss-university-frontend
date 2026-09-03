import { getPageSEO } from "@/lib/seo";
import ContactClient from "./ContactClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO('contact-us');
}

export default async function Contact() {
  const seoData = await getPageSEO('contact-us');
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
      <ContactClient />
    </>
  );
}
