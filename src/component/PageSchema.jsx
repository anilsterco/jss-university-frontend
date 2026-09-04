"use client";

import { usePathname } from "next/navigation";
import { WEB_URL } from "@/config/config.mjs";

function slugToLabel(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function generateBreadcrumbs(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${WEB_URL}` },
  ];
  let accumulatedPath = "";
  segments.forEach((segment, index) => {
    accumulatedPath += `${segment}/`;
    crumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name: slugToLabel(segment),
      item: `${WEB_URL}${accumulatedPath}`,
    });
  });
  return crumbs;
}

export default function PageSchema(nonce) {
  const pathname = usePathname() || "";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: generateBreadcrumbs(pathname),
  };

  const isHomePage = pathname === "/" || pathname === "";
  const isAdmissionFaq = pathname === "/admission-faq";
  const isPlacement = pathname === "/placement";
  const isAdmission = pathname === "/admission";
  const isCoursePage = pathname.startsWith("/programs/") || pathname.startsWith("/courses/");
  const isBlogPage = pathname.startsWith("/blog/");
  const showUniversitySchema = !isBlogPage && !isCoursePage;

  return (
    <>
      {showUniversitySchema && (
        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "@id": "https://jssuninoida.edu.in/#university",
              "name": "JSS University Noida",
              "url": "https://jssuninoida.edu.in/",
              "logo": "https://jssuninoida.edu.in/images/header/homenew.png",
              "description": "JSS University Noida is a private university in Noida, Uttar Pradesh, offering undergraduate, postgraduate, diploma and doctoral programs across multiple disciplines.",
              "telephone": "+91-9311830458",
              "email": "admissions@jssuninoida.edu.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-20/1, Sector-62",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/jssuninoida/",
                "https://x.com/JssUniNoida",
                "https://www.youtube.com/channel/UC6RPDJp7bmmqADdzV91UkSg"
              ]
            }),
          }}
        />
      )}

      {isHomePage && (
        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://jssuninoida.edu.in/",
              "name": "JSS University Noida",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jssuninoida.edu.in/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      )}

      {isAdmissionFaq && (
        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the eligibility criteria for B.Tech programs?", "acceptedAnswer": { "@type": "Answer", "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics, securing at least 45-50% aggregate marks from a recognized board." } },
                { "@type": "Question", "name": "How can I apply for admissions?", "acceptedAnswer": { "@type": "Answer", "text": "Applications are submitted online via the official JSS University Noida website. Fill the form, upload documents, and pay the application fee before the deadline." } },
                { "@type": "Question", "name": "Which entrance exams are accepted?", "acceptedAnswer": { "@type": "Answer", "text": "JSS University Noida accepts JEE Main, CUET, and other relevant national/state exams for UG/PG programs. Check specific course requirements on the admissions portal." } },
                { "@type": "Question", "name": "What documents are needed during admission?", "acceptedAnswer": { "@type": "Answer", "text": "Required documents include 10th/12th marksheets, entrance exam scorecard, transfer/migration certificate, ID proof, and passport-sized photos." } },
                { "@type": "Question", "name": "When does the admission process typically start?", "acceptedAnswer": { "@type": "Answer", "text": "Admissions for 2026 usually begin in May-June after entrance results, with counselling rounds in July-September. Monitor the website for exact dates." } },
                { "@type": "Question", "name": "What about admissions for PG programs like MCA or M.Tech?", "acceptedAnswer": { "@type": "Answer", "text": "Eligibility requires a relevant UG degree with 50%+ marks and entrance scores like GATE or university tests. Apply via the online portal post-results." } },
                { "@type": "Question", "name": "Is there a reservation roster at JSS University Noida?", "acceptedAnswer": { "@type": "Answer", "text": "No, JSS University Noida does not follow a reservation roster. Admissions are merit-based through entrance exams and eligibility criteria." } },
                { "@type": "Question", "name": "What is the fee structure and payment process?", "acceptedAnswer": { "@type": "Answer", "text": "B.Tech fees range from INR 1-2 lakhs per year; exact details are on the website. Pay via online modes during seat confirmation or counselling." } },
                { "@type": "Question", "name": "Can I get hostel accommodation during admissions?", "acceptedAnswer": { "@type": "Answer", "text": "Hostel seats are allotted on a first-come, first-served basis post-admission confirmation. Separate facilities for boys and girls with mess services are available." } }
              ]
            }),
          }}
        />
      )}

      {isPlacement && (
        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalProgram",
              "@id": "https://jssuninoida.edu.in/placement#program",
              "name": "JSS University Noida Placement Cell",
              "url": "https://jssuninoida.edu.in/placement",
              "provider": { "@type": "CollegeOrUniversity", "name": "JSS University Noida", "url": "https://jssuninoida.edu.in/" },
              "description": "Placement Cell facilitating internships, industry collaborations, career counselling, campus recruitment and professional development.",
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Students Placed", "value": "1000+" },
                { "@type": "PropertyValue", "name": "Highest CTC", "value": "57 LPA" },
                { "@type": "PropertyValue", "name": "Recruiters", "value": "200+" }
              ]
            }),
          }}
        />
      )}

      {isAdmission && (
        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalProgram",
              "@id": "https://jssuninoida.edu.in/admission#program",
              "name": "Admissions 2026-27 | JSS University Noida",
              "url": "https://jssuninoida.edu.in/admission",
              "description": "Admission at JSS University Noida is conducted through a transparent, merit-based and student-centric process for undergraduate, postgraduate, diploma and doctoral programmes.",
              "provider": { "@type": "CollegeOrUniversity", "name": "JSS University Noida", "url": "https://jssuninoida.edu.in/" },
              "offers": [
                { "@type": "Offer", "name": "B.Tech CSE", "price": "275000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech CSE (AIML)", "price": "275000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech IT", "price": "247500", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech CSE (DS)", "price": "247500", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech ECE", "price": "220000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech Aerospace Engineering", "price": "200000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech Mechanical Engineering", "price": "130000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Tech Civil Engineering", "price": "130000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "B.Pharm", "price": "155000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "MBA", "price": "250000", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "MCA", "price": "175000", "priceCurrency": "INR" }
              ]
            }),
          }}
        />
      )}

      <script
       nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}