import React from "react";
import Faq from "@/component/common/faq/Faq";
import TabSection from "@/component/sections/TabSection";
import styles from "./page.module.css";
import { BASE_URL } from "@/config/config.mjs";
import { getPageSEO } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageSEO('admission-faq');
}

async function getFaq() {
  const isDev = process.env.NODE_ENV === 'development';
  try {
    const res = await fetch(`${BASE_URL}admission/faq`, isDev ? {
      cache:"no-store"
    } : {
      next: { revalidate: 120 },
    });

    if (!res.ok) return [];

    const response = await res.json();
    return response?.data || [];
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}

export default async function Page() {
  const data = await getFaq();
  const seoData = await getPageSEO('admission-faq');

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
        />
      )}
      <TabSection
        title="Admission <span>FAQ's</span>"
        subtitle="FAQ's"
        tabs={[]}
        slug=""
      />
      <section className={styles.inner_page}>
        <div className="container">
          <Faq data={data} heading="" />
        </div>
      </section>
    </>
  );
}
