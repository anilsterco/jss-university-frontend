"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Textarea({ data }) {
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const handleLoadMore = (sectionIndex, itemIndex, totalCount) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [`${sectionIndex}-${itemIndex}`]: totalCount,
    }));
  };

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "textArea") return null;
        if (!section.items?.length) return null;

        return (
          section?.items &&
          section.items.length >= -1 &&
          section.items.map((item, idx) => (
            <section key={idx} className={`amenities_section`}>
              <div className="container">
                <div key={idx}>
                  {item?.textarea && (
                    <div dangerouslySetInnerHTML={{ __html: item.textarea }} />
                  )}
                </div>
              </div>
            </section>
          ))
        );
      })}
    </>
  );
}
