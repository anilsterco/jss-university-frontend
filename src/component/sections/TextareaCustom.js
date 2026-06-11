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
                    // section?.items &&
                    // section.items.length >= -1 &&
                    // section.items.map((item, index) => {
                    //     console.log('item>>',item)
                    //     return (
                    //         <section key={index}>
                    //             {item?.textarea && (
                    //                 <div dangerouslySetInnerHTML={{ __html: item.textarea }} />
                    //             )}

                    //         </section>
                    //     )
                    // })
                    <>
                        {section.items.map((item, itemIndex) => {

                            const activeIndex = activeTabs[item?.id] || 0;
                            const activeMenu = item?.side_menus?.[activeIndex];

                            return (
                                <div
                                    className={`department_society_overview ${item?.custom_class || ''}`}
                                    key={item.id}
                                >
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
                                                        activeMenu?.left_overview_data ||
                                                        item?.description ||
                                                        ""
                                                }}
                                            />

                                        </div>

                                    </div>

                                    {activeMenu?.other_data && (
                                        <div className="all_data"
                                            dangerouslySetInnerHTML={{
                                                __html: activeMenu.other_data
                                            }}
                                        />
                                    )}

                                </div>
                            );
                        })}
                    </>
                );
            })}
        </>
    );
}
