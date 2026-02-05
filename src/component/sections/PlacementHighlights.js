"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ================= COUNTER COMPONENT ================= */
function Counter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  // extract number & suffix (900+, 47LPA)
  const match = value.match(/(\d+)/);
  const number = match ? parseInt(match[0]) : 0;
  const suffix = value.replace(number, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const increment = number / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [number, duration]);

  return (
    <h3 ref={ref}>
      {count}
      {suffix}
    </h3>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function PlacementHighlights({ data }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const renderSection = (section, index) => {
    if (section.type !== "placementHighlights") return null;

    const items =
      section.items?.sort(
        (a, b) => Number(a.position) - Number(b.position)
      ) || [];

    return (
      <div key={index}>
        <div className="heading text-center mb-4">
          <h2>Placement Highlights of JSS Universities & Institutions</h2>
        </div>

        <div className="high_lightRow">
          {items.map((item, idx) => (
            <div key={item.id || idx} className="highLight_col">
              {item.heading && (
                <div className="highLight_city">
                  <h2>{item.heading}</h2>
                </div>
              )}
              <div className="placement_highLight">
                {item.boxes?.map((box, i) => (
                  <div
                    key={i}
                    className="high_box"
                    data-aos="zoom-in"
                  >
                    {box.count && (
                      <Counter value={box.count} />
                    )}
                    {box.description && (
                      <p>{box.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="placement_highlights">
      <div className="container">
        {data?.map((section, index) =>
          renderSection(section, index)
        )}
      </div>
    </section>
  );
}
