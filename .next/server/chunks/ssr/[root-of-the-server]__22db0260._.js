module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/component/Header.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Header() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [admissionOpen, setAdmissionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLink, setActiveLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const admissionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navLinks = [
        {
            name: "ABOUT",
            href: "/",
            dropdown: [
                {
                    name: "About JSS",
                    href: "/"
                },
                {
                    name: "Heritage",
                    href: "/"
                }
            ],
            right: {
                subtitle: "ABOUT JSS",
                title: "Know Our Heritage",
                desc: "Learn more about JSS legacy, history and leadership.",
                ctas: [
                    {
                        text: "Read More",
                        href: "#",
                        type: "primary"
                    },
                    {
                        text: "Leadership",
                        href: "#",
                        type: "secondary"
                    }
                ],
                banners: [
                    {
                        title: "UNDER GRADUTE",
                        href: "#",
                        img: "/images/header/nav-hover-banner.png"
                    },
                    {
                        title: "POST GRADUTE",
                        href: "#",
                        img: "/images/nav-hover-banner.png"
                    },
                    {
                        title: "PHD",
                        href: "#",
                        img: "/images/nav-hover-banner.png"
                    }
                ]
            }
        },
        {
            name: "ACADEMICS",
            href: "/",
            dropdown: [
                {
                    name: "Schools",
                    href: "/"
                },
                {
                    name: "Departments",
                    href: "/"
                },
                {
                    name: "Programs",
                    href: "/"
                }
            ],
            right: {
                subtitle: "EXPLORE ACADEMICS",
                title: "Learning at JSS",
                desc: "Offering UG, PG and PhD programmes with global standards.",
                ctas: [
                    {
                        text: "VIEW ALL PROGRAMMES",
                        href: "#",
                        type: "primary"
                    }
                ],
                banners: [
                    {
                        title: "Under Graduate",
                        href: "#",
                        img: "/images/nav-hover-banner.png"
                    },
                    {
                        title: "Post Graduate",
                        href: "#",
                        img: "/images/nav-hover-banner.png"
                    },
                    {
                        title: "PhD Programmes",
                        href: "#",
                        img: "/images/nav-hover-banner.png"
                    }
                ]
            }
        },
        {
            name: "ADMISSIONS",
            href: "/",
            dropdown: [
                {
                    name: "Overview",
                    href: "/"
                },
                {
                    name: "Admission",
                    href: "/"
                },
                {
                    name: "UG Program",
                    href: "/"
                }
            ],
            right: {
                subtitle: "JOIN JSS",
                title: "Admissions Open 2025-26",
                desc: "Apply now and step into your future at JSS Noida.",
                ctas: [
                    {
                        text: "Apply Now",
                        href: "#",
                        type: "primary"
                    },
                    {
                        text: "Download Syllabus",
                        href: "#",
                        type: "secondary"
                    }
                ],
                banners: [
                    {
                        title: "Scholarships",
                        href: "#",
                        img: "/images/banner1.png"
                    },
                    {
                        title: "Eligibility",
                        href: "#",
                        img: "/images/banner2.png"
                    },
                    {
                        title: "FAQs",
                        href: "#",
                        img: "/images/banner3.png"
                    }
                ]
            }
        },
        {
            name: "FACILITIES",
            href: "/",
            dropdown: [
                {
                    name: "Girls Hostel",
                    href: "/"
                },
                {
                    name: "Boys Hostel",
                    href: "/"
                },
                {
                    name: "Amenities Centre",
                    href: "/"
                }
            ],
            right: {
                subtitle: "CAMPUS FACILITIES",
                title: "Modern & Student Friendly",
                desc: "Hostels, clubs, amenities and more for a vibrant campus life.",
                ctas: [
                    {
                        text: "Explore Facilities",
                        href: "#",
                        type: "primary"
                    }
                ],
                banners: [
                    {
                        title: "Hostels",
                        href: "#",
                        img: "/images/banner1.png"
                    },
                    {
                        title: "Clubs",
                        href: "#",
                        img: "/images/banner2.png"
                    },
                    {
                        title: "Events",
                        href: "#",
                        img: "/images/banner3.png"
                    }
                ]
            }
        },
        {
            name: "STUDENTS SUPPORT",
            href: "/",
            dropdown: [
                {
                    name: "Student Life",
                    href: "/"
                },
                {
                    name: "Mentoring Scheme",
                    href: "/"
                },
                {
                    name: "Internal Complaint Committee",
                    href: "/"
                }
            ],
            right: {
                subtitle: "SUPPORT & LIFE",
                title: "Helping Students Thrive",
                desc: "Guidance, mentoring and vibrant student support activities.",
                ctas: [
                    {
                        text: "Get Support",
                        href: "#",
                        type: "primary"
                    }
                ],
                banners: [
                    {
                        title: "Life @ JSS",
                        href: "#",
                        img: "/images/banner1.png"
                    },
                    {
                        title: "Mentoring",
                        href: "#",
                        img: "/images/banner2.png"
                    },
                    {
                        title: "Clubs",
                        href: "#",
                        img: "/images/banner3.png"
                    }
                ]
            }
        }
    ];
    const hamburgerMenudata = [
        {
            name: "About JSS University",
            subMenu: [
                "Overview",
                "Scholarships",
                "International Students"
            ],
            img: "/images/header/hambuger-banner.png"
        },
        {
            name: "Academics",
            subMenu: [
                "Undergraduate",
                "Postgraduate",
                "Doctoral"
            ],
            img: "/images/hambuger-banner.png"
        },
        {
            name: "Facilities",
            subMenu: [
                "Hostels",
                "Clubs & Societies",
                "Events"
            ],
            img: "/images/hambuger-banner.png"
        },
        {
            name: "Students Support",
            subMenu: [
                "Apply Now",
                "Eligibility",
                "FAQs"
            ],
            img: "/images/home-banner.png"
        }
    ];
    const admissionsData = {
        left: {
            subtitle: "JOIN JSSATE NOIDA FOR 2025-26",
            title: "STEP INTO YOUR FUTURE AT JSS NOIDA",
            desc: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
            email: "principal@jssaten.ac.in",
            phone: "+91-9311830458",
            ctas: [
                {
                    text: "APPLY NOW",
                    href: "#",
                    type: "primary"
                },
                {
                    text: "DOWNLOAD SYLLABUS",
                    href: "#",
                    type: "secondary"
                }
            ]
        },
        middle: {
            links: [
                "Scholarship",
                "Course, Eligibility & Fee Structure",
                "Admission Document & Undertaking",
                "Admissions Office Contacts",
                "Hostel Details"
            ],
            stats: {
                text: "1,200+ ACROSS UG & PG PROGRAMS",
                subtext: "Total student intake (annual)",
                btnText: "VIEW PROGRAMMES"
            }
        },
        right: {
            img: "/images/header/admission-banner.png",
            alt: "Admissions Image"
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 300);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        isMounted
    ]);
    const openMenu = ()=>{
        setMenuOpen(true);
        setActiveIndex(0);
    };
    const closeMenu = ()=>{
        setMenuOpen(false);
        setActiveIndex(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        const handleEsc = (e)=>{
            if (e.key === "Escape") {
                closeMenu();
                setAdmissionOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return ()=>window.removeEventListener("keydown", handleEsc);
    }, [
        isMounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        const handleClickOutside = (e)=>{
            if (admissionRef.current && !admissionRef.current.contains(e.target)) {
                setAdmissionOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        isMounted
    ]);
    const activeData = hamburgerMenudata[activeIndex] || hamburgerMenudata[0];
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1100,
                height: "80px"
            }
        }, void 0, false, {
            fileName: "[project]/src/component/Header.js",
            lineNumber: 256,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-64ca288ec2be7095" + " " + "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-64ca288ec2be7095" + " " + `nav-container ${scrolled ? "header-scrolled" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-64ca288ec2be7095" + " " + "brand-wrap logo-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-label": "Home",
                            className: "d-flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/footer/footer-logo.png",
                                    className: "site-logo",
                                    alt: "Site Logo",
                                    width: 100,
                                    height: 100,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-64ca288ec2be7095" + " " + "logo-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-64ca288ec2be7095" + " " + "d-flex  align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-64ca288ec2be7095",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-64ca288ec2be7095" + " " + `${scrolled ? "dark-blue-text" : ""} mb-0 logo-primary-text`,
                                                            children: "NAAC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 285,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-64ca288ec2be7095" + " " + `${scrolled ? "dark-blue-text" : ""} mb-0 logo-secondry-text`,
                                                            children: "GRADE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 292,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-64ca288ec2be7095" + " " + `${scrolled ? "yellow-text" : ""} mb-0 logo-tertiary-text`,
                                                    children: "A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-64ca288ec2be7095" + " " + `${scrolled ? "text-dark" : ""} mb-0`,
                                            children: "JSS is NAAC 'A' Grade Accredited"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/Header.js",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-64ca288ec2be7095" + " " + "right-navbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Main navigation",
                                className: "jsx-64ca288ec2be7095" + " " + "desktop-nav",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-64ca288ec2be7095" + " " + "nav-list",
                                    children: navLinks.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setActiveLink(i),
                                            className: "jsx-64ca288ec2be7095" + " " + "nav-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: l.href,
                                                    className: `nav-link ${activeLink == i ? "active-link" : ""}`,
                                                    children: l.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                l.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "menu",
                                                    className: "jsx-64ca288ec2be7095" + " " + "mega-dropdown",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-64ca288ec2be7095" + " " + "mega-left",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-64ca288ec2be7095",
                                                                children: l.dropdown.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-64ca288ec2be7095" + " " + "mega-left-item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: d.href,
                                                                            className: "dropdown-item",
                                                                            children: d.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/component/Header.js",
                                                                            lineNumber: 338,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, j, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 337,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 334,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-64ca288ec2be7095" + " " + "mega-right",
                                                            children: l.right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-64ca288ec2be7095" + " " + "mega-right-text",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-64ca288ec2be7095" + " " + "mega-subtitle",
                                                                                children: l.right.subtitle
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 350,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "jsx-64ca288ec2be7095" + " " + "mega-title",
                                                                                children: l.right.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 353,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-64ca288ec2be7095" + " " + "mega-desc",
                                                                                children: l.right.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 354,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-64ca288ec2be7095" + " " + "mega-ctas",
                                                                                children: l.right.ctas?.map((cta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: cta.href,
                                                                                        className: "jsx-64ca288ec2be7095" + " " + `cta ${cta.type}`,
                                                                                        children: cta.text
                                                                                    }, idx, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 357,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 355,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 349,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-64ca288ec2be7095" + " " + "mega-right-banners",
                                                                        children: l.right.banners?.map((b, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                href: b.href,
                                                                                className: "jsx-64ca288ec2be7095" + " " + "banner",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: b.img,
                                                                                        alt: b.title,
                                                                                        width: 260,
                                                                                        height: 160
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 371,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-64ca288ec2be7095" + " " + "banner-label",
                                                                                        children: b.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 377,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 370,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 368,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "mega-right-text",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-64ca288ec2be7095" + " " + "mega-title",
                                                                    children: l.dropdown && l.dropdown[0]?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/Header.js",
                                                                    lineNumber: 386,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 385,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-64ca288ec2be7095" + " " + "right-navbar-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: admissionRef,
                                        className: "jsx-64ca288ec2be7095" + " " + "admission-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAdmissionOpen((prev)=>!prev),
                                                className: "jsx-64ca288ec2be7095" + " " + "admission-btn",
                                                children: "ADMISSIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this),
                                            admissionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-64ca288ec2be7095" + " " + "admission-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-64ca288ec2be7095" + " " + "dropdown-arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-64ca288ec2be7095" + " " + "ad-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-subtitle",
                                                                children: admissionsData.left.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 412,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-title",
                                                                children: admissionsData.left.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 415,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-desc",
                                                                children: admissionsData.left.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-contact",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-64ca288ec2be7095",
                                                                        children: [
                                                                            "📧 ",
                                                                            admissionsData.left.email
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 418,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-64ca288ec2be7095",
                                                                        children: [
                                                                            "📞 ",
                                                                            admissionsData.left.phone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 419,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 417,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-ctas",
                                                                children: admissionsData.left.ctas.map((cta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: cta.href,
                                                                        className: "jsx-64ca288ec2be7095" + " " + `cta ${cta.type}`,
                                                                        children: cta.text
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 423,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-64ca288ec2be7095" + " " + "ad-middle",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-64ca288ec2be7095",
                                                                children: admissionsData.middle.links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-64ca288ec2be7095" + " " + "ad-link",
                                                                        children: [
                                                                            link,
                                                                            " →"
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 437,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 435,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-64ca288ec2be7095" + " " + "ad-stats",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "jsx-64ca288ec2be7095",
                                                                        children: admissionsData.middle.stats.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 443,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-64ca288ec2be7095",
                                                                        children: admissionsData.middle.stats.subtext
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 444,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "jsx-64ca288ec2be7095" + " " + "stats-btn",
                                                                        children: [
                                                                            admissionsData.middle.stats.btnText,
                                                                            " →"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 445,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this),
                                                    admissionsData.right && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-64ca288ec2be7095" + " " + "ad-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: admissionsData.right.img,
                                                            alt: admissionsData.right.alt,
                                                            width: 400,
                                                            height: 400,
                                                            className: "addmision-section-img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 453,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Open menu",
                                        onClick: openMenu,
                                        className: "jsx-64ca288ec2be7095" + " " + "hamburger",
                                        children: "☰"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeMenu,
                className: "jsx-64ca288ec2be7095" + " " + `backdrop ${menuOpen ? "show" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                className: "jsx-64ca288ec2be7095" + " " + `menu-overlay ${menuOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close menu",
                        onClick: closeMenu,
                        className: "jsx-64ca288ec2be7095" + " " + "close-btn",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-64ca288ec2be7095" + " " + "hamburger-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "jsx-64ca288ec2be7095" + " " + "menu-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-64ca288ec2be7095",
                                    children: hamburgerMenudata.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setActiveIndex(idx),
                                            className: "jsx-64ca288ec2be7095" + " " + `menu-left-item ${activeIndex === idx ? "active" : ""}`,
                                            children: item.name
                                        }, idx, false, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-64ca288ec2be7095" + " " + "menu-middle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-64ca288ec2be7095" + " " + "middle-title",
                                        children: "ABOUT JSSMVP HERITAGE ABOUT JSS LEADERSHIP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-64ca288ec2be7095",
                                        children: activeData.subMenu.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-64ca288ec2be7095" + " " + "middle-item",
                                                children: s
                                            }, i, false, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 508,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-64ca288ec2be7095" + " " + "menu-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-64ca288ec2be7095" + " " + "right-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-64ca288ec2be7095" + " " + "image-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: activeData.img,
                                            alt: activeData.name,
                                            width: 620,
                                            height: 400,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            sizes: "100vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "64ca288ec2be7095",
                children: ".site-header.jsx-64ca288ec2be7095{z-index:1100;position:fixed;top:0;left:0;right:0}.mega-right-banners.jsx-64ca288ec2be7095{justify-content:end;gap:1rem;width:70%;height:70%;margin-top:10rem;margin-bottom:5rem;display:flex}.right-navbar-section.jsx-64ca288ec2be7095,.right-navbar.jsx-64ca288ec2be7095{align-items:center;display:flex}.logo-tertiary-text.jsx-64ca288ec2be7095{font-size:55px}.logo-secondry-text.jsx-64ca288ec2be7095,.logo-primary-text.jsx-64ca288ec2be7095{font-size:22px;font-weight:700}.logo-text.jsx-64ca288ec2be7095 p.jsx-64ca288ec2be7095{border-bottom:2px solid #f8c326;padding-bottom:8px;font-size:12px}.logo-text.jsx-64ca288ec2be7095{color:#fff;border-left:1px solid #cfc7c7;padding-left:1.5rem}.nav-container.jsx-64ca288ec2be7095{justify-content:space-between;align-items:center;max-width:100%;margin:0 auto;padding:1rem 5rem;transition:all .3s;display:flex}.nav-list.jsx-64ca288ec2be7095{color:#fff;background-color:#16344e;gap:30px;margin:0 1rem 0 0;padding:.1rem 2rem;font-size:20px;list-style:none;display:flex}.nav-item.jsx-64ca288ec2be7095{position:relative}.nav-container.header-scrolled.jsx-64ca288ec2be7095{background-color:#fff}.nav-link.jsx-64ca288ec2be7095{color:inherit;padding:6px 8px;font-size:16px;font-weight:600;text-decoration:none;transition:color .3s;display:inline-block}.header-scrolled.jsx-64ca288ec2be7095 .nav-link.jsx-64ca288ec2be7095{color:#16344e}.dropdown.jsx-64ca288ec2be7095{z-index:1;color:#000;background:#fff;border:1px solid #eee;min-width:200px;padding:8px 15px;list-style:none;display:none;position:absolute;top:100%;left:0;box-shadow:0 4px 12px #0000001a}.dropdown-item.jsx-64ca288ec2be7095{color:#16344e;padding:8px 14px;text-decoration:none;display:block}.dropdown-item.jsx-64ca288ec2be7095:hover{background:#f5f5f5}.admission-wrap.jsx-64ca288ec2be7095{margin-right:12px;position:relative}.admission-btn.jsx-64ca288ec2be7095{cursor:pointer;background:#ffc100;border:none;padding:10px 18px;font-size:15px;font-weight:700;transition:background .3s}.admission-btn.jsx-64ca288ec2be7095:hover{background:#e6b000}.admission-dropdown.jsx-64ca288ec2be7095{z-index:1200;background:#fff;width:70%;margin-top:6px;display:flex;position:fixed;top:6rem;right:10rem;box-shadow:0 6px 18px #0003}.dropdown-arrow.jsx-64ca288ec2be7095{border-bottom:10px solid #fff;border-left:10px solid #0000;border-right:10px solid #0000;width:0;height:0;position:absolute;top:-10px;right:40px}.ad-left.jsx-64ca288ec2be7095{color:#fff;background:#2f7de8;flex-direction:column;justify-content:space-between;width:100%;padding:24px;display:flex}.ad-right.jsx-64ca288ec2be7095{width:100%}.ad-subtitle.jsx-64ca288ec2be7095{text-transform:uppercase;margin-bottom:8px;font-size:13px}.ad-title.jsx-64ca288ec2be7095{margin-bottom:12px;font-size:22px;font-weight:700}.ad-desc.jsx-64ca288ec2be7095,.ad-contact.jsx-64ca288ec2be7095{margin-bottom:16px;font-size:14px}.ad-ctas.jsx-64ca288ec2be7095{flex-wrap:wrap;gap:8px;display:flex}.cta.jsx-64ca288ec2be7095{cursor:pointer;border:none;padding:8px 14px;font-size:14px;font-weight:600;text-decoration:none;transition:opacity .3s}.cta.jsx-64ca288ec2be7095:hover{opacity:.9}.cta.primary.jsx-64ca288ec2be7095{color:#000;background:#ffc100}.cta.secondary.jsx-64ca288ec2be7095{color:#2f7de8;border:1px solid #fff}.ad-middle.jsx-64ca288ec2be7095{border-right:1px solid #eee;width:100%;padding:24px}.ad-middle.jsx-64ca288ec2be7095 ul.jsx-64ca288ec2be7095{margin:0;padding:0;list-style:none}.ad-link.jsx-64ca288ec2be7095{cursor:pointer;color:#333;padding:6px 0;font-size:15px;font-weight:500;transition:color .3s}.ad-link.jsx-64ca288ec2be7095:hover{color:#2f7de8;text-decoration:underline}.ad-stats.jsx-64ca288ec2be7095{margin-top:20px}.ad-stats.jsx-64ca288ec2be7095 h3.jsx-64ca288ec2be7095{margin-bottom:4px;font-size:18px;font-weight:700}.ad-stats.jsx-64ca288ec2be7095 p.jsx-64ca288ec2be7095{color:#777;margin-bottom:10px;font-size:13px}.stats-btn.jsx-64ca288ec2be7095{cursor:pointer;background:#fff;border:1px solid #000;padding:6px 12px;font-weight:600;transition:all .3s}.stats-btn.jsx-64ca288ec2be7095:hover{color:#fff;background:#000}.addmision-section-img.jsx-64ca288ec2be7095{object-fit:cover;width:100%;height:100%}.hamburger.jsx-64ca288ec2be7095{cursor:pointer;color:#fff;background:#16344e;border:none;padding:4px 10px;font-size:22px;transition:background .3s}.hamburger.jsx-64ca288ec2be7095:hover{background-color:#1e4264}.backdrop.jsx-64ca288ec2be7095{opacity:0;pointer-events:none;z-index:1190;background:#00000059;transition:opacity .25s;position:fixed;inset:0}.backdrop.show.jsx-64ca288ec2be7095{opacity:1;pointer-events:all}.menu-overlay.jsx-64ca288ec2be7095{z-index:1200;pointer-events:none;position:fixed;inset:0}.menu-overlay.open.jsx-64ca288ec2be7095{pointer-events:auto}.hamburger-layout.jsx-64ca288ec2be7095{background:#fff;width:0;height:55%;transition:width .45s cubic-bezier(.2,.9,.2,1);display:flex;position:absolute;top:0;right:0;overflow:hidden}.menu-overlay.open.jsx-64ca288ec2be7095 .hamburger-layout.jsx-64ca288ec2be7095{width:100%}.menu-left.jsx-64ca288ec2be7095{color:#fff;background:#2f7de8;width:20%;padding-top:5rem}.menu-left-item.jsx-64ca288ec2be7095{cursor:pointer;margin-bottom:6px;padding:12px 14px 12px 5rem;font-size:21px;font-weight:600;transition:all .3s}.menu-left-item.jsx-64ca288ec2be7095:hover{background:#1e6fd8}.menu-left-item.active.jsx-64ca288ec2be7095{color:#000;background:#ffc100}.menu-left.jsx-64ca288ec2be7095 ul.jsx-64ca288ec2be7095{padding:0;list-style:none}.menu-middle.jsx-64ca288ec2be7095{background:#fff;border-right:1px solid #eee;width:20%;padding:5rem 3rem 1rem}.middle-title.jsx-64ca288ec2be7095{color:#000;text-transform:uppercase;margin-bottom:10px;font-size:21px}.middle-item.jsx-64ca288ec2be7095{cursor:pointer;border-bottom:1px dashed #eee;padding:8px 0;font-weight:700;transition:color .3s}.middle-item.jsx-64ca288ec2be7095:hover{color:#2f7de8}.menu-right.jsx-64ca288ec2be7095{background:#fafafa;flex:1;padding:28px;overflow-y:auto}.image-box.jsx-64ca288ec2be7095{justify-content:center;display:flex}.close-btn.jsx-64ca288ec2be7095{display:none}.menu-overlay.open.jsx-64ca288ec2be7095 .close-btn.jsx-64ca288ec2be7095{z-index:1300;background:unset;color:#000;cursor:pointer;border:none;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;font-size:24px;font-weight:700;transition:background .3s;display:flex;position:absolute;top:20px;right:20px}.menu-overlay.open.jsx-64ca288ec2be7095 .close-btn.jsx-64ca288ec2be7095:hover{background:#0000001a}.mega-dropdown.jsx-64ca288ec2be7095{z-index:-1;background:#fff;gap:20px;width:100%;min-width:max-content;height:auto;display:none;position:fixed;top:0;left:0;box-shadow:0 8px 30px #00000026}.nav-item.jsx-64ca288ec2be7095:hover>.mega-dropdown.jsx-64ca288ec2be7095,.nav-item.jsx-64ca288ec2be7095:focus-within>.mega-dropdown.jsx-64ca288ec2be7095{display:flex}.mega-left.jsx-64ca288ec2be7095{color:#fff;background:#2f7de8;width:20%;position:relative}.mega-left.jsx-64ca288ec2be7095 ul.jsx-64ca288ec2be7095{text-align:center;width:100%;margin:0;padding:0;list-style:none;position:absolute;top:35%}.mega-left-item.jsx-64ca288ec2be7095{cursor:pointer;padding:8px 0;font-weight:700}.mega-left-item.jsx-64ca288ec2be7095 .dropdown-item.jsx-64ca288ec2be7095{color:#fff;text-decoration:none}.mega-left-item.jsx-64ca288ec2be7095:hover{color:#000;background:#ffc100}.mega-right.jsx-64ca288ec2be7095{align-items:center;gap:3rem;width:80%;display:flex}.mega-right-text.jsx-64ca288ec2be7095{width:20%}.mega-subtitle.jsx-64ca288ec2be7095{color:#555;text-transform:uppercase;margin-bottom:6px;font-size:13px}.mega-title.jsx-64ca288ec2be7095{color:#16344e;margin-bottom:8px;font-size:24px;font-weight:700}.mega-desc.jsx-64ca288ec2be7095{color:#444;margin-bottom:12px;font-size:14px}.mega-ctas.jsx-64ca288ec2be7095{gap:12px;display:flex}.mega-banners.jsx-64ca288ec2be7095{align-items:center;gap:12px;display:flex}.banner.jsx-64ca288ec2be7095{border-radius:6px;width:100%;height:100%;text-decoration:none;display:block;position:relative;overflow:hidden}.banner.jsx-64ca288ec2be7095 img.jsx-64ca288ec2be7095,.banner.jsx-64ca288ec2be7095 img{object-fit:cover;width:100%;height:100%;display:block}.banner-label.jsx-64ca288ec2be7095{color:#fff;background:#00000080;border-radius:2px;width:100%;padding:15px 10px;font-size:14px;font-weight:700;position:absolute;bottom:0;left:0}@media (width>=1024px) and (width<=1420px){.mega-right-banners.jsx-64ca288ec2be7095{height:70%;margin-top:8rem;margin-bottom:3rem}.nav-container.jsx-64ca288ec2be7095{padding:1rem 2rem}.nav-list.jsx-64ca288ec2be7095{gap:20px;font-size:16px}.mega-right.jsx-64ca288ec2be7095{gap:1.5rem}.banner.jsx-64ca288ec2be7095{width:240px;height:200px}.admission-dropdown.jsx-64ca288ec2be7095{width:85%;top:6rem;right:5rem}}@media (width<=1100px){.mega-dropdown.jsx-64ca288ec2be7095{grid-template-columns:1fr;min-width:700px}.mega-right-text.jsx-64ca288ec2be7095{max-width:100%}.banner.jsx-64ca288ec2be7095{width:200px;height:130px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Header.js",
        lineNumber: 270,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/component/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const res = {
            logo: "/images/footer/footer-logo.png",
            address: "C-20/1, Sector - 62, Noida, Uttar Pradesh",
            phone: "+91 9311830458",
            email: "admission@jssaten.ac.in",
            landlines: [
                "0120-2401448 (Direct)",
                "0120-2400115, 2401442, 2401449 (EPBX)"
            ],
            sections: [
                {
                    title: "ABOUT JSS UNIVERSITY"
                },
                {
                    title: "ACADEMICS"
                },
                {
                    title: "ADMISSIONS"
                },
                {
                    title: "FACILITIES"
                },
                {
                    title: "STUDENT SUPPORT"
                },
                {
                    title: "RESEARCH & INNOVATION"
                },
                {
                    title: "PLACEMENTS"
                }
            ],
            quickLinks: [
                {
                    label: "Examination",
                    url: "#"
                },
                {
                    label: "Alumni",
                    url: "#"
                },
                {
                    label: "Annual Reports",
                    url: "#"
                },
                {
                    label: "ERP Login",
                    url: "#"
                },
                {
                    label: "Testimonials",
                    url: "#"
                },
                {
                    label: "Happenings",
                    url: "#"
                },
                {
                    label: "IQAC",
                    url: "#"
                },
                {
                    label: "Downloads",
                    url: "#"
                },
                {
                    label: "Careers",
                    url: "#"
                },
                {
                    label: "OBC Cell",
                    url: "#"
                },
                {
                    label: "National Digital Library",
                    url: "#"
                },
                {
                    label: "Online Grievance System",
                    url: "#"
                }
            ],
            socials: [
                {
                    icon: "facebook",
                    url: "#"
                },
                {
                    icon: "twitter",
                    url: "#"
                },
                {
                    icon: "youtube",
                    url: "#"
                },
                {
                    icon: "linkedin",
                    url: "#"
                }
            ]
        };
        setData(res);
    }, []);
    if (!data) return null;
    const renderIcon = (icon)=>{
        switch(icon){
            case "facebook":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFacebookF"], {}, void 0, false, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 61,
                    columnNumber: 16
                }, this);
            case "twitter":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case "youtube":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            case "linkedin":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {}, void 0, false, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "jsx-58ffcf47f3265dc0" + " " + "bg-dark text-white pt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-58ffcf47f3265dc0" + " " + "container border-bottom border-secondary pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-58ffcf47f3265dc0" + " " + "row g-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-58ffcf47f3265dc0" + " " + "col-md-9",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-58ffcf47f3265dc0" + " " + "row d-flex justify-content-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-58ffcf47f3265dc0" + " " + "col-sm-1 ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: data.logo,
                                            alt: "Logo",
                                            style: {
                                                width: "80px"
                                            },
                                            className: "jsx-58ffcf47f3265dc0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Footer.js",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Footer.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-58ffcf47f3265dc0" + " " + "col-md-10 mx-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-58ffcf47f3265dc0" + " " + "fw-bold mb-1 text-info",
                                                children: "Connect with us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Footer.js",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-58ffcf47f3265dc0" + " " + "mb-1",
                                                children: data.address
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Footer.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-58ffcf47f3265dc0" + " " + "col-md-12 d-flex flex-column flex-md-row gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-58ffcf47f3265dc0" + " " + "mb-1",
                                                        children: data.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Footer.js",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-58ffcf47f3265dc0" + " " + "mb-1",
                                                        children: data.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Footer.js",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this),
                                                    data.landlines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-58ffcf47f3265dc0" + " " + "mb-1",
                                                            children: line
                                                        }, i, false, {
                                                            fileName: "[project]/src/component/Footer.js",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Footer.js",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Footer.js",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Footer.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/Footer.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-58ffcf47f3265dc0" + " " + "col-md-3 text-md-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "jsx-58ffcf47f3265dc0" + " " + "btn btn-light fw-bold mb-3 rounded-0 px-5 mx-2",
                                    children: "GET DIRECTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Footer.js",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-58ffcf47f3265dc0" + " " + "d-flex justify-content-md-end gap-2 social-icons",
                                    children: [
                                        "Follow us on",
                                        data.socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.url,
                                                style: {
                                                    width: "30px",
                                                    height: "30px"
                                                },
                                                className: "jsx-58ffcf47f3265dc0" + " " + "btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center",
                                                children: renderIcon(s.icon)
                                            }, i, false, {
                                                fileName: "[project]/src/component/Footer.js",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Footer.js",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/Footer.js",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/Footer.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-58ffcf47f3265dc0" + " " + "container d-flex flex-wrap align-items-center pt-3",
                children: data.sections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-58ffcf47f3265dc0" + " " + "me-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            className: "jsx-58ffcf47f3265dc0" + " " + "fw-normal",
                            children: section.title
                        }, void 0, false, {
                            fileName: "[project]/src/component/Footer.js",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/component/Footer.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/component/Footer.js",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-58ffcf47f3265dc0" + " " + "container border-bottom border-secondary py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-58ffcf47f3265dc0" + " " + "d-flex flex-wrap gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-58ffcf47f3265dc0" + " " + "side-border",
                            children: "Quick Links "
                        }, void 0, false, {
                            fileName: "[project]/src/component/Footer.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        data.quickLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.url,
                                className: "jsx-58ffcf47f3265dc0" + " " + "text-white-50 text-decoration-none",
                                children: link.label
                            }, i, false, {
                                fileName: "[project]/src/component/Footer.js",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/Footer.js",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/Footer.js",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-58ffcf47f3265dc0" + " " + "container py-3 d-flex flex-column flex-md-row justify-content-between text-white-50 small",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-58ffcf47f3265dc0" + " " + "mb-1 mb-md-0",
                        children: [
                            "© Copyright ",
                            new Date().getFullYear(),
                            " - JSS. All Rights Reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Footer.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-58ffcf47f3265dc0" + " " + "mb-0",
                        children: "Website Design and Development by Sterco"
                    }, void 0, false, {
                        fileName: "[project]/src/component/Footer.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Footer.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "58ffcf47f3265dc0",
                children: ".side-border.jsx-58ffcf47f3265dc0{border-right:2px solid #6d757d;padding-right:1rem}.social-icons.jsx-58ffcf47f3265dc0{font-size:.9rem}.social-icons.jsx-58ffcf47f3265dc0 a.jsx-58ffcf47f3265dc0:hover{background-color:#f8f9fa59}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Footer.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__22db0260._.js.map