"use client";
import { useEffect, useState } from "react";
import "@/styles/custom.style.css";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BASE_URL } from "@/config/config";

const modalData = [
  {
    title: "JSS Academy of Higher Education & Research, Mysuru",
    image: "/images/popup/logo1.webp",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo2.webp",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo3.webp",
    url: "https://jssuni.edu.in/",
  },
  {
    title: "JSS Science and Technology University",
    image: "/images/popup/logo4.webp",
    url: "https://jssuni.edu.in/",
  },
];

export default function PopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [popupData, setPopupData] = useState([]);

  const fetchPopupData = async () => {
    try {
      const response = await fetch(`${BASE_URL}popup`);
      const data = await response.json();
      setPopupData(data.popup);
    } catch (error) {
      setPopupData([]);
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopupData();
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
          {popupData?.heading && (
            <h4
              className="popup-title"
              dangerouslySetInnerHTML={{ __html: popupData.heading }}
            ></h4>
          )}

          {popupData?.items?.length > 0 ? (
            <div className="grid">
              {popupData?.items?.map((item, index) => (
                <div key={index} className="grid-item">
                  <Image
                    width={300}
                    height={146}
                    layout="responsive"
                    src={item.image}
                    alt={item.title}
                  />
                  <h5 className="title">{item.title}</h5>
                  <span>Visit Us</span>
                  <a
                    className="link_logo"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
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
