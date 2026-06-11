"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TextareaCustom({ data }) {
    const [activeTabs, setActiveTabs] = useState({});
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);



    return (
        <>
            {data?.map((section, sectionIndex) => {
                if (section.type !== "textArea_custom") return null;
                if (!section.items?.length) return null;

                return (
                    <>
                        {section.items.map((item) => {

                            const activeIndex = activeTabs[item?.id] ?? 0;

                            return (
                                <div
                                    className={`department_society_overview mobile_overview ${item?.custom_class || ''}`}
                                    key={item.id}
                                >

                                    {/* Desktop Layout */}
                                    <div className="desktop_society_view">
                                        <div className="container">

                                            <div className={`${item?.side_menus?.length > 1
                                                ? "society_overview_grid"
                                                : "society_overview_center"
                                                }`}>

                                                {item?.side_menus?.length > 1 && (
                                                    <div className="right_side_menus">
                                                        {item.side_menus.map((menu, index) => (
                                                            <div key={index} className="society_links">
                                                                <a
                                                                    href="#"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();

                                                                        setActiveTabs(prev => ({
                                                                            ...prev,
                                                                            [item.id]: index
                                                                        }));
                                                                    }}
                                                                    className={
                                                                        activeIndex === index
                                                                            ? "active_society"
                                                                            : "inactive_society"
                                                                    }
                                                                >
                                                                    {menu.name}
                                                                </a>

                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <div
                                                    className="left_side_content"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            item?.side_menus?.[activeIndex]
                                                                ?.left_overview_data || ""
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {item?.side_menus?.[activeIndex]?.other_data && (
                                            <div
                                                className="all_data"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        item.side_menus[activeIndex].other_data
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Mobile Accordion */}
                                    <div className="mobile_society_view">
                                        <div className="container">
                                            {item?.side_menus?.map((menu, index) => (
                                                <div className="accordion_item" key={index}>
                                                    <button
                                                        className={`accordion_title ${activeTabs[item.id] === index
                                                            ? "active_society"
                                                            : "inactive_society"
                                                            }`}
                                                        onClick={() => {
                                                            setActiveTabs(prev => ({
                                                                ...prev,
                                                                [item.id]:
                                                                    prev[item.id] === index
                                                                        ? null
                                                                        : index
                                                            }));

                                                        }}
                                                    >
                                                        <span>{menu.name}</span>

                                                        <svg
                                                            className={`accordion_arrow ${activeTabs[item.id] === index ? "rotate" : ""
                                                                }`}
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
                                                        className={`accordion_content left_side_content ${activeTabs[item.id] === index ? "open" : ""
                                                            }`}
                                                    >
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: menu.left_overview_data || ""
                                                            }}
                                                        />

                                                        {menu.other_data && (
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: menu.other_data
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                );
            })}
        </>
    );
}
