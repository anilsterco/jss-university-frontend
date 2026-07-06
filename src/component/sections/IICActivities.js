"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IICActivities({ data }) {
    const [selectedImage, setSelectedImage] = useState(null);

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

    if (!data?.length) return null;

    return (
        <>
            {data.map((section, index) => {
                const item = section.items?.[0];

                return (
                    <section
                        key={index}
                        className="iic_activities"
                        data-aos="fade-up"
                    >
                        <div className="container">
                            <div
                                className="section_heading"
                                data-aos="fade-up"
                            >
                                <h2>{item?.heading}</h2>
                            </div>

                            <div className="iic_content">
                                {item?.desc?.map((descItem, i) => (
                                    <p
                                        key={i}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 100}
                                   dangerouslySetInnerHTML={{__html:descItem.desc}} />
                                ))}
                            </div>

                            <div className="iic_gallery">
                                {item?.image?.map((img, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="gallery_item"
                                        data-aos="zoom-in"
                                        data-aos-delay={imgIndex * 100}
                                    >
                                        <div
                                            className="imageWrapper"
                                            onClick={() =>
                                                setSelectedImage(img.image)
                                            }
                                        >
                                            <Image
                                                src={img.image}
                                                alt={`Activity ${imgIndex + 1}`}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {selectedImage && (
                <div
                    className="IICPopup"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="popupContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="closeBtn"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Full Image"
                            width={1200}
                            height={800}
                            className="IICpopupImage"
                        />
                    </div>
                </div>
            )}
        </>
    );
}