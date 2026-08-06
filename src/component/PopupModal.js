"use client";
import { useEffect, useState } from "react";
import "@/styles/custom.style.css";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { APPLY_NOW } from "@/config/config.mjs";
import Link from "next/link";

export default function PopupModal({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // nothing to show, don't even bother with the timer
    if (!data) return;

    const timer = setTimeout(() => {
      document.body.classList.add("overflow-hidden");
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, [data]);

  const closePopup = () => {
    setIsVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  if (!isVisible || !data) return null;

  return (
    <>
      <div className="popup-overlay" onClick={closePopup} />

      <div className="popup-modal">
        <button className="popup-close" onClick={closePopup} aria-label="Close popup">
          <IoClose fontSize={18} aria-hidden="true" />
        </button>

        <div className="popup-content">
          {data?.heading && (
            <div
              className="popup-title"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            ></div>
          )}

          {data?.items?.length > 0 ? (
            <div className="grid popup_grid">
              {data.items.map((item, index) => (
                <div key={index} className="grid-item">
                  <Image
                    src={item?.image}
                    className="img-fluid"
                    width={720}
                    height={553}
                    loading="eager"
                    alt={item?.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="visit_button">
                    <Link
                      className="apply-btn1 CTA_Applynow"
                      href={APPLY_NOW}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${item?.title}`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="text-center">No Data Found!</h3>
          )}
        </div>
      </div>
    </>
  );
}