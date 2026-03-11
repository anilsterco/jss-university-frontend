"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutOne({ data }) {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "selectionProcess") return null;

        return (
          <section
            className="admission_hero"
            key={`selection-process-${sectionIndex}`}
            data-aos="fade-up"
          >
            <div className="container">
              <div
                className={`ad_selec_procss ${section.items?.[0]?.sectionType}`}
                id="scholarship"
              >
                {/* Hide heading for recent-audit-observations */}
                {slug !== "recent-audit-observations" && (
                  <h5 data-aos="fade-up" data-aos-delay="100">
                    Selection Process
                  </h5>
                )}

                <div className="ad_selec_grid">
                  {section.items
                    ?.sort((a, b) => a.position - b.position)
                    .map((item, idx) => (
                      <div
                        className="ad_sel_col"
                        key={`step-${idx}`}
                        data-aos="fade-up"
                        data-aos-delay={200 + idx * 150}
                      >
                        <div className="ad_se_content">
                          <div className="se_step">Step {item.step}</div>

                          {item.desc && <p>{item.desc}</p>}

                          {item.points && item.points.length > 0 && (
                            <ul>
                              {item.points.map((pt, i) => (
                                <li key={`point-${i}`}>{pt.text}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}