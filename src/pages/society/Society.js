"use client";

import SocietyHappenings from "@/component/happening-components/society/SocietyHappenigs";
import { useEffect, useRef, useState } from "react";

function MobileTab({ societies, activeId, setActiveId }) {
  const accordionRefs = useRef([]);

  const handleAccordion = (id, index) => {
    const isOpening = activeId !== id;
    setActiveId(isOpening ? id : null);

    if (isOpening) {
      setTimeout(() => {
        accordionRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 450);
    }
  };

  return (
    <div>
      <div className="container">
        {societies?.map((society, index) => (
          <div
            className="accordion_item"
            key={society.id}
            ref={(el) => (accordionRefs.current[index] = el)}
          >
            <button
              className={`accordion_title ${activeId === society.id ? "active_society" : "inactive_society"
                }`}
              onClick={() => handleAccordion(society.id, index)}
            >
              <span>{society.name}</span>
              <svg
                className={`accordion_arrow ${activeId === society.id ? "rotate" : ""}`}
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="m112 184 144 144 144-144"
                />
              </svg>
            </button>

            <div
              className={`accordion_content left_side_content ${activeId === society.id ? "open" : ""
                }`}
            >
              {society.heading && <h2>{society.heading}</h2>}
              {society.description && (
                <div dangerouslySetInnerHTML={{ __html: society.description }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopTab({ societies, activeId, setActiveId }) {
  const activeSociety = societies?.find((s) => s.id === activeId) || societies?.[0];

  return (
    <section>
      <div className="container">
        <div
          className={
            societies?.length > 1 ? "society_overview_grid" : "society_overview_center"
          }
        >
          {societies?.length > 1 && (
            <div className="right_side_menus">
              {societies.map((society) => (
                <div key={society.id} className="society_links">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(society.id);
                    }}
                    className={
                      activeId === society.id ? "active_society" : "inactive_society"
                    }
                  >
                    {society.name}
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="left_side_content">
            {activeSociety?.heading && <div dangerouslySetInnerHTML={{ __html: activeSociety.heading }} />}

          </div>
        </div>

        </div>
        {activeSociety?.description && (
          <div
            className="all_data"
          >
            <div dangerouslySetInnerHTML={{ __html: activeSociety.description }} />
          </div>
        )}



        {activeSociety?.happenings?.length > 0 && (
          <SocietyHappenings allEvents={activeSociety?.happenings ?? []} />
        )}
    </section>
  );
}

export default function SocietiesComponent({ societies }) {
  const [activeId, setActiveId] = useState(societies?.[0]?.id ?? null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 991);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (societies?.length == 0) return null;

  return (
    <div className="department_society_overview">
      {isMobile && societies.length > 1 ? (
        <MobileTab
          societies={societies}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ) : (
        <DesktopTab
          societies={societies}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </div>
  );
}