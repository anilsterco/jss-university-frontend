
import {
  Roboto,
  Roboto_Condensed,
 
} from "next/font/google";
import Header from "../component/Header";
import Footer from "../component/footer/Footer";
import Providers from "./providers";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/globals.css";
// import "@fontsource/roboto-condensed/300.css";
// import "@fontsource/roboto-condensed/400.css";
// import "@fontsource/roboto-condensed/700.css";
// import "../../public/js/aos";
import "../styles/custom.style.css";

import Script from "next/script";
import ScriptLoader from "@/component/ScriptLoader";
import MainWrapper from "@/component/MainWrapper";
import HashScrollHandler from "@/component/HashScrollHandler";
import { headers } from "next/headers";
import { BASE_URL, WEB_URL } from "@/config/config.mjs";
import GoogleAnalytics from "@/component/GoogleAnalytics";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-Roboto",
  preload: true,
});
 
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
  variable: "--font-Condensed",
  preload: true,
});
 
// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["200", "300", "700"],
//   display: "swap",
//   variable: "--font-Oswald",
//   preload: false, // load lazily if not above-the-fold
// });
 
// const geist = Geist({
//   subsets: ["latin"],
//   weight: ["200", "300", "700"],
//   display: "swap",
//   variable: "--font-Geist",
//   preload: false,
// });
 
// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   display: "swap",
//   variable: "--font-Noto",
//   preload: false,
// });
 
// const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   style: ["normal", "italic"],
//   display: "swap",
//   variable: "--font-OpenSans",
//   preload: false,
// });

export const metadata = {
  title: "JSS University Noida",
  description: "JSS University Noida",
};

function slugToLabel(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function generateBreadcrumbs(pathname) {
  const segments = pathname.split("/").filter(Boolean); // remove empty strings

  const crumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${WEB_URL}`,
    },
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


export default async function RootLayout({ children }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");

  // Determine current pathname for conditional schema injection
  const pathname = headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";

  // Breadcrumb schema — dynamic for every page
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
  // Blog and Course pages should NOT get the CollegeOrUniversity schema
  const isBlogPage = pathname.startsWith("/blog/");
  const showUniversitySchema = !isBlogPage && !isCoursePage;

  const fontClassNames = [
    roboto.variable,
    robotoCondensed.variable,
    
  ].join(" ");

  return (
    <html lang="en" className={fontClassNames}>
      {/* Google Tag Manager */}
      <head>
        <link
          rel="preload"
          href="https://backoffice.jssuninoida.edu.in/assets/video/banners/1775207103_69cf82bf29841.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="preconnect" href="https://backoffice.jssuninoida.edu.in" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://backoffice.jssuninoida.edu.in" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7QC44X3');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4F2ZKG2HVD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4F2ZKG2HVD');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x8xiia17cu");
          `}
        </Script>

        {/* ─── Schema: CollegeOrUniversity — All pages EXCEPT Blog & Course ─── */}
        {showUniversitySchema && (
          <script
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

        {/* {isHomePage && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://jssnoida.edu.in/",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Placement",
                    "item": "https://jssnoida.edu.in/placement",
                  },
                ],
              }),
            }}
          />
        )} */}

        {isAdmissionFaq && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the eligibility criteria for B.Tech programs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics, securing at least 45-50% aggregate marks from a recognized board."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I apply for admissions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Applications are submitted online via the official JSS University Noida website. Fill the form, upload documents, and pay the application fee before the deadline."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which entrance exams are accepted?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "JSS University Noida accepts JEE Main, CUET, and other relevant national/state exams for UG/PG programs. Check specific course requirements on the admissions portal."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What documents are needed during admission?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Required documents include 10th/12th marksheets, entrance exam scorecard, transfer/migration certificate, ID proof, and passport-sized photos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When does the admission process typically start?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Admissions for 2026 usually begin in May-June after entrance results, with counselling rounds in July-September. Monitor the website for exact dates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What about admissions for PG programs like MCA or M.Tech?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Eligibility requires a relevant UG degree with 50%+ marks and entrance scores like GATE or university tests. Apply via the online portal post-results."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there a reservation roster at JSS University Noida?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, JSS University Noida does not follow a reservation roster. Admissions are merit-based through entrance exams and eligibility criteria."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the fee structure and payment process?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "B.Tech fees range from INR 1-2 lakhs per year; exact details are on the website. Pay via online modes during seat confirmation or counselling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I get hostel accommodation during admissions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Hostel seats are allotted on a first-come, first-served basis post-admission confirmation. Separate facilities for boys and girls with mess services are available."
                    }
                  }
                ]
              }),
            }}
          />
        )}

        {isPlacement && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOccupationalProgram",
                "@id": "https://jssuninoida.edu.in/placement#program",
                "name": "JSS University Noida Placement Cell",
                "url": "https://jssuninoida.edu.in/placement",
                "provider": {
                  "@type": "CollegeOrUniversity",
                  "name": "JSS University Noida",
                  "url": "https://jssuninoida.edu.in/"
                },
                "description": "Placement Cell facilitating internships, industry collaborations, career counselling, campus recruitment and professional development.",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Students Placed",
                    "value": "1000+"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Highest CTC",
                    "value": "57 LPA"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Recruiters",
                    "value": "200+"
                  }
                ]
              }),
            }}
          />
        )}

        {isAdmission && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOccupationalProgram",
                "@id": "https://jssuninoida.edu.in/admission#program",
                "name": "Admissions 2026-27 | JSS University Noida",
                "url": "https://jssuninoida.edu.in/admission",
                "description": "Admission at JSS University Noida is conducted through a transparent, merit-based and student-centric process for undergraduate, postgraduate, diploma and doctoral programmes.",
                "provider": {
                  "@type": "CollegeOrUniversity",
                  "name": "JSS University Noida",
                  "url": "https://jssuninoida.edu.in/"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "B.Tech CSE",
                    "price": "275000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech CSE (AIML)",
                    "price": "275000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech IT",
                    "price": "247500",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech CSE (DS)",
                    "price": "247500",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech ECE",
                    "price": "220000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech Aerospace Engineering",
                    "price": "200000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech Mechanical Engineering",
                    "price": "130000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Tech Civil Engineering",
                    "price": "130000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "B.Pharm",
                    "price": "155000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "MBA",
                    "price": "250000",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "name": "MCA",
                    "price": "175000",
                    "priceCurrency": "INR"
                  }
                ]
              }),
            }}
          />
        )}

        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7QC44X3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers>
          <GoogleAnalytics />
          <Header />
          <HashScrollHandler />
          <MainWrapper>{children}</MainWrapper>
          <ScriptLoader />
          <Footer />

          <a
            href="https://wa.me/917599201722?text=Hello%20JSS%20University"
            target="_blank"
            className="whatsapp-btn"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.37 0 .02 5.35 0 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.82 1.49h.01c6.63 0 12-5.35 12-11.98 0-3.2-1.25-6.21-3.5-8.41zM12 21.8c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.8 9.8 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0 1 21.8 12c0 5.4-4.4 9.8-9.8 9.8zm5.4-7.33c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>
        </Providers>
      </body>
    </html>
  );
}