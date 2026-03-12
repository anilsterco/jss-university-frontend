import React from "react";
import Faq from "@/component/common/faq/Faq";
import TabSection from "@/component/sections/TabSection";
import styles from "./page.module.css";

const BASE_URL = "https://project-demo.in/jss/api/";

async function getFaq() {
  try {
    const res = await fetch(`${BASE_URL}admission/faq`, {
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

  return (
    <>
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
