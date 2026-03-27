"use client";
import { useEffect, useState } from "react";
import "@/styles/custom.style.css";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const modalData = [
  {
    title: "JSS Academy of Higher Education & Research, Mysuru",
    image: "/images/popup/logo.png",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo.png",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo.png",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo.png",
    url: "https://jssuni.edu.in/",
  },
];

export default function PopupModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("overflow-hidden");
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    document.body.classList.remove("overflow-hidden"); // ✅ restore scroll
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="popup-overlay" onClick={closePopup} />

      <div className="popup-modal">
        <button className="popup-close" onClick={closePopup}>
          <IoClose fontSize={18} />
        </button>

        {/* Your content here */}
        <div className="popup-content">
          <h4 className="popup-title">
            JSS <span>University</span> System
          </h4>

          <div className="grid">
            {modalData.map((item, index) => (
              <div key={index} className="grid-item">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={300}
                    height={146}
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <h5 className="title">{item.title}</h5>
                  <span>Visit Us</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
