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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [admissionOpen, setAdmissionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [engineeringDropdown, setEngineeringDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSchool, setSelectedSchool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedSchoolName, setSelectedSchoolName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ENGINEERING");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLink, setActiveLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const admissionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineeringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            firstContent: {
                title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
                desc: "The Genesis of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-first-banner.png",
                alt: "hambuger banner",
                url: "/"
            },
            secondContent: {
                title: "<span class='blue-text'>21+</span> Acres",
                desc: "Campus Area of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-second-banner.png",
                alt: "hambuger banner",
                url: "/"
            }
        },
        {
            name: "Academics",
            subMenu: [
                "Undergraduate",
                "Postgraduate",
                "Doctoral"
            ],
            firstContent: {
                title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
                desc: "The Genesis of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-first-banner.png",
                alt: "hambuger banner",
                url: "/"
            },
            secondContent: {
                title: "<span class='blue-text'>21+</span> Acres",
                desc: "Campus Area of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-second-banner.png",
                alt: "hambuger banner",
                url: "/"
            }
        },
        {
            name: "Facilities",
            subMenu: [
                "Hostels",
                "Clubs & Societies",
                "Events"
            ],
            firstContent: {
                title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
                desc: "The Genesis of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-first-banner.png",
                alt: "hambuger banner",
                url: "/"
            },
            secondContent: {
                title: "<span class='blue-text'>21+</span> Acres",
                desc: "Campus Area of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-second-banner.png",
                alt: "hambuger banner",
                url: "/"
            }
        },
        {
            name: "Students Support",
            subMenu: [
                "Apply Now",
                "Eligibility",
                "FAQs"
            ],
            firstContent: {
                title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
                desc: "The Genesis of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-first-banner.png",
                alt: "hambuger banner",
                url: "/"
            },
            secondContent: {
                title: "<span class='blue-text'>21+</span> Acres",
                desc: "Campus Area of the social-educational-spritual philosophy.",
                img: "/images/header/humburger-second-banner.png",
                alt: "hambuger banner",
                url: "/"
            }
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
    const engineeringData = {
        schools: [
            {
                name: "Computer Science & Engineering",
                departments: [
                    {
                        text: "Artificial Intelligence",
                        url: "/"
                    },
                    {
                        text: "Data Science",
                        url: "/"
                    },
                    {
                        text: "Cyber Security",
                        url: "/"
                    },
                    {
                        text: "IoT and Cloud",
                        url: "/"
                    }
                ]
            },
            {
                name: "Electronics & Communication",
                departments: [
                    {
                        text: "Data Science",
                        url: "/"
                    },
                    {
                        text: "Cyber Security",
                        url: "/"
                    },
                    {
                        text: "Artificial Intelligence",
                        url: "/"
                    },
                    {
                        text: "IoT and Cloud",
                        url: "/"
                    }
                ]
            },
            {
                name: "Mechanical Engineering",
                departments: [
                    {
                        text: "Artificial Intelligence",
                        url: "/"
                    },
                    {
                        text: "Data Science",
                        url: "/"
                    },
                    {
                        text: "Cyber Security",
                        url: "/"
                    },
                    {
                        text: "IoT and Cloud",
                        url: "/"
                    }
                ]
            },
            {
                name: "Electronics & Communication",
                departments: [
                    {
                        text: "Data Science",
                        url: "/"
                    },
                    {
                        text: "Cyber Security",
                        url: "/"
                    },
                    {
                        text: "Artificial Intelligence",
                        url: "/"
                    },
                    {
                        text: "IoT and Cloud",
                        url: "/"
                    }
                ]
            }
        ]
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
                setEngineeringDropdown(false);
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
            if (engineeringRef.current && !engineeringRef.current.contains(e.target) && // also allow clicking the toggle button without closing
            !e.target.closest(".school-toggle")) {
                setEngineeringDropdown(false);
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
            lineNumber: 417,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-d7acbe4ed7f581b9" + " " + "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d7acbe4ed7f581b9" + " " + `nav-container ${scrolled ? "header-scrolled" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d7acbe4ed7f581b9" + " " + "brand-wrap logo-content",
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
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d7acbe4ed7f581b9" + " " + "logo-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d7acbe4ed7f581b9" + " " + "d-flex  align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d7acbe4ed7f581b9",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-d7acbe4ed7f581b9" + " " + `${scrolled ? "dark-blue-text" : ""} mb-0 logo-primary-text`,
                                                            children: "NAAC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 446,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "jsx-d7acbe4ed7f581b9" + " " + `${scrolled ? "dark-blue-text" : ""} mb-0 logo-secondry-text`,
                                                            children: "GRADE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-d7acbe4ed7f581b9" + " " + `${scrolled ? "yellow-text" : ""} mb-0 logo-tertiary-text`,
                                                    children: "A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 461,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-d7acbe4ed7f581b9" + " " + `${scrolled ? "text-dark" : ""} mb-0`,
                                            children: "JSS is NAAC 'A' Grade Accredited"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/Header.js",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    pathname === "/schools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setEngineeringDropdown((prev)=>!prev),
                                className: "jsx-d7acbe4ed7f581b9" + " " + "school-toggle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "mb-0",
                                        children: "School of"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "fw-bold",
                                        children: [
                                            selectedSchoolName,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoChevronDownOutline"], {
                                                fontSize: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 484,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this),
                            engineeringDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: engineeringRef,
                                className: "jsx-d7acbe4ed7f581b9" + " " + "engineering-dropdown-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d7acbe4ed7f581b9" + " " + "engineering-dropdown",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d7acbe4ed7f581b9" + " " + "schools-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "jsx-d7acbe4ed7f581b9",
                                                    children: "Schools"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this),
                                                engineeringData.schools.map((school, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>{
                                                            setSelectedSchool(idx);
                                                            setSelectedSchoolName(school.name);
                                                        },
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + `school-item ${selectedSchool === idx ? "active" : ""}`,
                                                        children: school.name
                                                    }, idx, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 498,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d7acbe4ed7f581b9" + " " + "departments-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-d7acbe4ed7f581b9" + " " + "dropdown-arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 515,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "jsx-d7acbe4ed7f581b9" + " " + "text-white",
                                                    children: "Department"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 516,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d7acbe4ed7f581b9" + " " + "link-content",
                                                    children: engineeringData.schools[selectedSchool].departments.map((dept, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: dept.url,
                                                            className: "department-links text-white",
                                                            children: dept.text
                                                        }, i, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 520,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 517,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoTriangleSharp"], {
                                                    className: "triangle-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 514,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 493,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d7acbe4ed7f581b9" + " " + "right-navbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Main navigation",
                                className: "jsx-d7acbe4ed7f581b9" + " " + "desktop-nav",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-d7acbe4ed7f581b9" + " " + "nav-list",
                                    children: navLinks.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setActiveLink(i),
                                            className: "jsx-d7acbe4ed7f581b9" + " " + "nav-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: l.href,
                                                    className: `nav-link ${activeLink == i ? "active-link" : ""}`,
                                                    children: l.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 547,
                                                    columnNumber: 19
                                                }, this),
                                                l.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "menu",
                                                    className: "jsx-d7acbe4ed7f581b9" + " " + "mega-dropdown",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d7acbe4ed7f581b9" + " " + "mega-left",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-d7acbe4ed7f581b9",
                                                                children: l.dropdown.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "mega-left-item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: d.href,
                                                                            className: "dropdown-item",
                                                                            children: d.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/component/Header.js",
                                                                            lineNumber: 561,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, j, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 560,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 558,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 557,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-d7acbe4ed7f581b9" + " " + "mega-right",
                                                            children: l.right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "mega-right-text",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "mega-subtitle",
                                                                                children: l.right.subtitle
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 573,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "mega-title",
                                                                                children: l.right.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 576,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "mega-desc",
                                                                                children: l.right.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 577,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "mega-ctas",
                                                                                children: l.right.ctas?.map((cta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: cta.href,
                                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + `cta ${cta.type}`,
                                                                                        children: cta.text
                                                                                    }, idx, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 580,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 578,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 572,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "mega-right-banners",
                                                                        children: l.right.banners?.map((b, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                href: b.href,
                                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "banner",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: b.img,
                                                                                        alt: b.title,
                                                                                        width: 260,
                                                                                        height: 160
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 594,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "banner-label",
                                                                                        children: b.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/component/Header.js",
                                                                                        lineNumber: 600,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/src/component/Header.js",
                                                                                lineNumber: 593,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 591,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "mega-right-text",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-d7acbe4ed7f581b9" + " " + "mega-title",
                                                                    children: l.dropdown && l.dropdown[0]?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/Header.js",
                                                                    lineNumber: 609,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 608,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 569,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/Header.js",
                                                    lineNumber: 556,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d7acbe4ed7f581b9" + " " + "right-navbar-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: admissionRef,
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "admission-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAdmissionOpen((prev)=>!prev),
                                                className: "jsx-d7acbe4ed7f581b9" + " " + "admission-btn",
                                                children: "ADMISSIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this),
                                            admissionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-d7acbe4ed7f581b9" + " " + "admission-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "dropdown-arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 633,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "ad-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-subtitle",
                                                                children: admissionsData.left.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 635,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-title",
                                                                children: admissionsData.left.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 638,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-desc",
                                                                children: admissionsData.left.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 639,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-contact",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-d7acbe4ed7f581b9",
                                                                        children: [
                                                                            "📧 ",
                                                                            admissionsData.left.email
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 641,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-d7acbe4ed7f581b9",
                                                                        children: [
                                                                            "📞 ",
                                                                            admissionsData.left.phone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 642,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 640,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-ctas",
                                                                children: admissionsData.left.ctas.map((cta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: cta.href,
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + `cta ${cta.type}`,
                                                                        children: cta.text
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 646,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 644,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 634,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "ad-middle",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-d7acbe4ed7f581b9",
                                                                children: admissionsData.middle.links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "ad-link",
                                                                        children: [
                                                                            link,
                                                                            " →"
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 660,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 658,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-d7acbe4ed7f581b9" + " " + "ad-stats",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "jsx-d7acbe4ed7f581b9",
                                                                        children: admissionsData.middle.stats.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 666,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-d7acbe4ed7f581b9",
                                                                        children: admissionsData.middle.stats.subtext
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 667,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "stats-btn",
                                                                        children: [
                                                                            admissionsData.middle.stats.btnText,
                                                                            " →"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Header.js",
                                                                        lineNumber: 668,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 665,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 657,
                                                        columnNumber: 19
                                                    }, this),
                                                    admissionsData.right && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "ad-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: admissionsData.right.img,
                                                            alt: admissionsData.right.alt,
                                                            width: 400,
                                                            height: 400,
                                                            className: "addmision-section-img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 676,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 675,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Open menu",
                                        onClick: openMenu,
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "hamburger",
                                        children: "☰"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 432,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeMenu,
                className: "jsx-d7acbe4ed7f581b9" + " " + `backdrop ${menuOpen ? "show" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 700,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                className: "jsx-d7acbe4ed7f581b9" + " " + `menu-overlay ${menuOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close menu",
                        onClick: closeMenu,
                        className: "jsx-d7acbe4ed7f581b9" + " " + "close-btn",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 706,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d7acbe4ed7f581b9" + " " + "hamburger-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "jsx-d7acbe4ed7f581b9" + " " + "menu-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-d7acbe4ed7f581b9",
                                    children: hamburgerMenudata.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setActiveIndex(idx),
                                            className: "jsx-d7acbe4ed7f581b9" + " " + `menu-left-item ${activeIndex === idx ? "active" : ""}`,
                                            children: item.name
                                        }, idx, false, {
                                            fileName: "[project]/src/component/Header.js",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 716,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 715,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-d7acbe4ed7f581b9" + " " + "menu-middle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "middle-title",
                                        children: "ABOUT JSSMVP HERITAGE ABOUT JSS LEADERSHIP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-d7acbe4ed7f581b9",
                                        children: activeData.subMenu.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-d7acbe4ed7f581b9" + " " + "middle-item",
                                                children: s
                                            }, i, false, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 737,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 735,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-d7acbe4ed7f581b9" + " " + "menu-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d7acbe4ed7f581b9" + " " + "right-inner h-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-d7acbe4ed7f581b9" + " " + "image-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-d7acbe4ed7f581b9" + " " + "first-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: activeData.firstContent.title
                                                        },
                                                        className: "jsx-d7acbe4ed7f581b9"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 748,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-d7acbe4ed7f581b9",
                                                        children: activeData.firstContent.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 753,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: activeData.firstContent.url,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowRightCircle"], {
                                                            className: "mb-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 755,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 754,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "hamburger-section-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: activeData.firstContent.url,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: activeData.firstContent.img,
                                                                alt: activeData.firstContent.alt,
                                                                fill: true,
                                                                style: {
                                                                    objectFit: "cover"
                                                                },
                                                                sizes: "100vw"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 759,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 757,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 747,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-d7acbe4ed7f581b9" + " " + "second-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "hamburger-section-img",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: activeData.secondContent.url,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: activeData.secondContent.img,
                                                                alt: activeData.secondContent.alt,
                                                                fill: true,
                                                                style: {
                                                                    objectFit: "cover"
                                                                },
                                                                sizes: "100vw"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 772,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Header.js",
                                                            lineNumber: 771,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 770,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d7acbe4ed7f581b9" + " " + "d-flex align-items-start mt-5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: activeData.secondContent.title
                                                                },
                                                                className: "jsx-d7acbe4ed7f581b9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 782,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d7acbe4ed7f581b9",
                                                                children: activeData.secondContent.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Header.js",
                                                                lineNumber: 787,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Header.js",
                                                        lineNumber: 781,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Header.js",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Header.js",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Header.js",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Header.js",
                                lineNumber: 744,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Header.js",
                        lineNumber: 714,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Header.js",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d7acbe4ed7f581b9",
                children: ".school-toggle.jsx-d7acbe4ed7f581b9{cursor:pointer;color:#fff;flex-direction:column;font-weight:600;transition:color .3s;display:flex}.header-scrolled.jsx-d7acbe4ed7f581b9 .school-toggle.jsx-d7acbe4ed7f581b9{color:#16344e}.engineering-dropdown-container.jsx-d7acbe4ed7f581b9{z-index:1000;width:100%;display:flex;position:absolute;top:130px}.engineering-dropdown.jsx-d7acbe4ed7f581b9{background:#fff;border-radius:8px;width:35%;min-height:320px;display:flex;overflow:hidden;box-shadow:0 6px 20px #00000026}.schools-list.jsx-d7acbe4ed7f581b9{color:#fff;background:#16344e;flex-direction:column;width:50%;display:flex}.school-item.jsx-d7acbe4ed7f581b9{cursor:pointer;padding:10px 20px;transition:background .3s}.school-item.jsx-d7acbe4ed7f581b9:hover{background:#1e4b6b}.school-item.active.jsx-d7acbe4ed7f581b9{color:#000;background:#ffc100}.departments-list.jsx-d7acbe4ed7f581b9{background:#224666;width:50%;display:block}.departments-list.jsx-d7acbe4ed7f581b9 .link-content.jsx-d7acbe4ed7f581b9{padding-left:1.2rem}.engineering-dropdown.jsx-d7acbe4ed7f581b9 h6.jsx-d7acbe4ed7f581b9{padding-top:1.2rem;padding-left:1.2rem;font-size:18px}.department-item.jsx-d7acbe4ed7f581b9{cursor:pointer;color:#fff;border-radius:8px;padding:8px;font-weight:500;transition:all .3s}.right-inner.jsx-d7acbe4ed7f581b9 .hamburger-section-img.jsx-d7acbe4ed7f581b9{border-radius:12px;width:100%;height:50%;position:relative;overflow:hidden}.right-inner.jsx-d7acbe4ed7f581b9 .first-content.jsx-d7acbe4ed7f581b9{width:30%}.right-inner.jsx-d7acbe4ed7f581b9 .second-content.jsx-d7acbe4ed7f581b9{width:40%}.site-header.jsx-d7acbe4ed7f581b9{z-index:1100;position:fixed;top:0;left:0;right:0}.mega-right-banners.jsx-d7acbe4ed7f581b9{justify-content:end;gap:1rem;width:70%;height:70%;margin-top:10rem;margin-bottom:5rem;display:flex}.right-inner.jsx-d7acbe4ed7f581b9 .second-content.jsx-d7acbe4ed7f581b9 h1.jsx-d7acbe4ed7f581b9{width:50%;font-size:4rem;font-weight:700;line-height:60px}.right-inner.jsx-d7acbe4ed7f581b9 .second-content.jsx-d7acbe4ed7f581b9 p.jsx-d7acbe4ed7f581b9{border-bottom:2px solid #fc0;width:50%;margin-top:1rem;padding-bottom:1rem;font-size:.9rem}.right-inner.jsx-d7acbe4ed7f581b9 .first-content.jsx-d7acbe4ed7f581b9 h1.jsx-d7acbe4ed7f581b9{margin-top:2rem;margin-bottom:1rem;font-size:2.2rem;font-weight:700}.right-inner.jsx-d7acbe4ed7f581b9 .first-content.jsx-d7acbe4ed7f581b9 p.jsx-d7acbe4ed7f581b9{font-size:.9rem}.right-navbar-section.jsx-d7acbe4ed7f581b9,.right-navbar.jsx-d7acbe4ed7f581b9{align-items:center;display:flex}.logo-tertiary-text.jsx-d7acbe4ed7f581b9{font-size:55px}.logo-secondry-text.jsx-d7acbe4ed7f581b9,.logo-primary-text.jsx-d7acbe4ed7f581b9{font-size:22px;font-weight:700}.logo-text.jsx-d7acbe4ed7f581b9 p.jsx-d7acbe4ed7f581b9{border-bottom:2px solid #f8c326;padding-bottom:8px;font-size:12px}.logo-text.jsx-d7acbe4ed7f581b9{color:#fff;border-left:1px solid #cfc7c7;padding-left:1.5rem}.nav-container.jsx-d7acbe4ed7f581b9{justify-content:space-between;align-items:center;max-width:100%;margin:0 auto;padding:1rem 5rem;transition:all .3s;display:flex}.nav-list.jsx-d7acbe4ed7f581b9{color:#fff;background-color:#16344e;gap:30px;margin:0 1rem 0 0;padding:.1rem 2rem;font-size:20px;list-style:none;display:flex}.nav-item.jsx-d7acbe4ed7f581b9{position:relative}.nav-container.header-scrolled.jsx-d7acbe4ed7f581b9{background-color:#fff}.nav-link.jsx-d7acbe4ed7f581b9{color:inherit;padding:6px 8px;font-size:16px;font-weight:600;text-decoration:none;transition:color .3s;display:inline-block}.header-scrolled.jsx-d7acbe4ed7f581b9 .nav-link.jsx-d7acbe4ed7f581b9{color:#16344e}.dropdown.jsx-d7acbe4ed7f581b9{z-index:1;color:#000;background:#fff;border:1px solid #eee;min-width:200px;padding:8px 15px;list-style:none;display:none;position:absolute;top:100%;left:0;box-shadow:0 4px 12px #0000001a}.dropdown-item.jsx-d7acbe4ed7f581b9{color:#16344e;padding:8px 14px;text-decoration:none;display:block}.dropdown-item.jsx-d7acbe4ed7f581b9:hover{background:#f5f5f5}.admission-wrap.jsx-d7acbe4ed7f581b9{margin-right:12px;position:relative}.admission-btn.jsx-d7acbe4ed7f581b9{cursor:pointer;background:#ffc100;border:none;padding:10px 18px;font-size:15px;font-weight:700;transition:background .3s}.admission-btn.jsx-d7acbe4ed7f581b9:hover{background:#e6b000}.admission-dropdown.jsx-d7acbe4ed7f581b9{z-index:1200;background:#fff;width:70%;margin-top:6px;display:flex;position:fixed;top:6rem;right:10rem;box-shadow:0 6px 18px #0003}.dropdown-arrow.jsx-d7acbe4ed7f581b9{border-bottom:10px solid #fff;border-left:10px solid #0000;border-right:10px solid #0000;width:0;height:0;position:absolute;top:-10px;right:40px}.ad-left.jsx-d7acbe4ed7f581b9{color:#fff;background:#2f7de8;flex-direction:column;justify-content:space-between;width:100%;padding:24px;display:flex}.ad-right.jsx-d7acbe4ed7f581b9{width:100%}.ad-subtitle.jsx-d7acbe4ed7f581b9{text-transform:uppercase;margin-bottom:8px;font-size:13px}.ad-title.jsx-d7acbe4ed7f581b9{margin-bottom:12px;font-size:22px;font-weight:700}.ad-desc.jsx-d7acbe4ed7f581b9,.ad-contact.jsx-d7acbe4ed7f581b9{margin-bottom:16px;font-size:14px}.ad-ctas.jsx-d7acbe4ed7f581b9{flex-wrap:wrap;gap:8px;display:flex}.cta.jsx-d7acbe4ed7f581b9{cursor:pointer;border:none;padding:8px 14px;font-size:14px;font-weight:600;text-decoration:none;transition:opacity .3s}.cta.jsx-d7acbe4ed7f581b9:hover{opacity:.9}.cta.primary.jsx-d7acbe4ed7f581b9{color:#000;background:#ffc100}.cta.secondary.jsx-d7acbe4ed7f581b9{color:#fff;border:1px solid #fff}.ad-middle.jsx-d7acbe4ed7f581b9{border-right:1px solid #eee;width:100%;padding:24px}.ad-middle.jsx-d7acbe4ed7f581b9 ul.jsx-d7acbe4ed7f581b9{margin:0;padding:0;list-style:none}.ad-link.jsx-d7acbe4ed7f581b9{cursor:pointer;color:#333;padding:6px 0;font-size:15px;font-weight:500;transition:color .3s}.ad-link.jsx-d7acbe4ed7f581b9:hover{color:#2f7de8;text-decoration:underline}.ad-stats.jsx-d7acbe4ed7f581b9{margin-top:20px}.ad-stats.jsx-d7acbe4ed7f581b9 h3.jsx-d7acbe4ed7f581b9{margin-bottom:4px;font-size:18px;font-weight:700}.ad-stats.jsx-d7acbe4ed7f581b9 p.jsx-d7acbe4ed7f581b9{color:#777;margin-bottom:10px;font-size:13px}.stats-btn.jsx-d7acbe4ed7f581b9{cursor:pointer;background:#fff;border:1px solid #000;padding:6px 12px;font-weight:600;transition:all .3s}.stats-btn.jsx-d7acbe4ed7f581b9:hover{color:#fff;background:#000}.addmision-section-img.jsx-d7acbe4ed7f581b9{object-fit:cover;width:100%;height:100%}.hamburger.jsx-d7acbe4ed7f581b9{cursor:pointer;color:#fff;background:#16344e;border:none;padding:4px 10px;font-size:22px;transition:background .3s}.hamburger.jsx-d7acbe4ed7f581b9:hover{background-color:#1e4264}.backdrop.jsx-d7acbe4ed7f581b9{opacity:0;pointer-events:none;z-index:1190;background:#00000059;transition:opacity .25s;position:fixed;inset:0}.backdrop.show.jsx-d7acbe4ed7f581b9{opacity:1;pointer-events:all}.menu-overlay.jsx-d7acbe4ed7f581b9{z-index:1200;pointer-events:none;position:fixed;inset:0}.menu-overlay.open.jsx-d7acbe4ed7f581b9{pointer-events:auto}.hamburger-layout.jsx-d7acbe4ed7f581b9{background:#fff;width:0;height:80%;transition:width .45s cubic-bezier(.2,.9,.2,1);display:flex;position:absolute;top:0;right:0;overflow:hidden}.menu-overlay.open.jsx-d7acbe4ed7f581b9 .hamburger-layout.jsx-d7acbe4ed7f581b9{width:100%}.menu-left.jsx-d7acbe4ed7f581b9{color:#fff;background:#2f7de8;width:20%;padding-top:5rem}.menu-left-item.jsx-d7acbe4ed7f581b9{cursor:pointer;margin-bottom:6px;padding:12px 14px 12px 5rem;font-size:21px;font-weight:600;transition:all .3s}.menu-left-item.jsx-d7acbe4ed7f581b9:hover{background:#1e6fd8}.menu-left-item.active.jsx-d7acbe4ed7f581b9{color:#000;background:#ffc100}.menu-left.jsx-d7acbe4ed7f581b9 ul.jsx-d7acbe4ed7f581b9{padding:0;list-style:none}.menu-middle.jsx-d7acbe4ed7f581b9{background:#fff;border-right:1px solid #eee;width:20%;padding:5rem 3rem 1rem}.middle-title.jsx-d7acbe4ed7f581b9{color:#000;text-transform:uppercase;margin-bottom:10px;font-size:21px}.middle-item.jsx-d7acbe4ed7f581b9{cursor:pointer;border-bottom:1px dashed #eee;padding:8px 0;font-weight:700;transition:color .3s}.middle-item.jsx-d7acbe4ed7f581b9:hover{color:#2f7de8}.menu-right.jsx-d7acbe4ed7f581b9{background:#fafafa;flex:1;width:60%;padding:5rem 3rem;overflow-y:auto}.image-box.jsx-d7acbe4ed7f581b9{justify-content:center;gap:3rem;height:100%;display:flex}.close-btn.jsx-d7acbe4ed7f581b9{display:none}.menu-overlay.open.jsx-d7acbe4ed7f581b9 .close-btn.jsx-d7acbe4ed7f581b9{z-index:1300;background:unset;color:#000;cursor:pointer;border:none;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;font-size:24px;font-weight:700;transition:background .3s;display:flex;position:absolute;top:20px;right:20px}.menu-overlay.open.jsx-d7acbe4ed7f581b9 .close-btn.jsx-d7acbe4ed7f581b9:hover{background:#0000001a}.mega-dropdown.jsx-d7acbe4ed7f581b9{z-index:-1;background:#fff;gap:20px;width:100%;min-width:max-content;height:auto;display:none;position:fixed;top:0;left:0;box-shadow:0 8px 30px #00000026}.nav-item.jsx-d7acbe4ed7f581b9:hover>.mega-dropdown.jsx-d7acbe4ed7f581b9,.nav-item.jsx-d7acbe4ed7f581b9:focus-within>.mega-dropdown.jsx-d7acbe4ed7f581b9{display:flex}.mega-left.jsx-d7acbe4ed7f581b9{color:#fff;background:#2f7de8;width:20%;position:relative}.mega-left.jsx-d7acbe4ed7f581b9 ul.jsx-d7acbe4ed7f581b9{text-align:center;width:100%;margin:0;padding:0;list-style:none;position:absolute;top:35%}.mega-left-item.jsx-d7acbe4ed7f581b9{cursor:pointer;padding:8px 0;font-weight:700}.mega-left-item.jsx-d7acbe4ed7f581b9 .dropdown-item.jsx-d7acbe4ed7f581b9{color:#fff;text-decoration:none}.mega-left-item.jsx-d7acbe4ed7f581b9:hover{color:#000;background:#ffc100}.mega-right.jsx-d7acbe4ed7f581b9{align-items:center;gap:3rem;width:80%;display:flex}.mega-right-text.jsx-d7acbe4ed7f581b9{width:20%}.mega-subtitle.jsx-d7acbe4ed7f581b9{color:#555;text-transform:uppercase;margin-bottom:6px;font-size:13px}.mega-title.jsx-d7acbe4ed7f581b9{color:#16344e;margin-bottom:8px;font-size:24px;font-weight:700}.mega-desc.jsx-d7acbe4ed7f581b9{color:#444;margin-bottom:12px;font-size:14px}.mega-ctas.jsx-d7acbe4ed7f581b9{gap:12px;display:flex}.mega-banners.jsx-d7acbe4ed7f581b9{align-items:center;gap:12px;display:flex}.banner.jsx-d7acbe4ed7f581b9{border-radius:6px;width:100%;height:100%;text-decoration:none;display:block;position:relative;overflow:hidden}.banner.jsx-d7acbe4ed7f581b9 img.jsx-d7acbe4ed7f581b9,.banner.jsx-d7acbe4ed7f581b9 img{object-fit:cover;width:100%;height:100%;display:block}.banner-label.jsx-d7acbe4ed7f581b9{color:#fff;background:#00000080;border-radius:2px;width:100%;padding:15px 10px;font-size:14px;font-weight:700;position:absolute;bottom:0;left:0}@media (width>=1024px) and (width<=1420px){.mega-right-banners.jsx-d7acbe4ed7f581b9{height:70%;margin-top:8rem;margin-bottom:3rem}.nav-container.jsx-d7acbe4ed7f581b9{padding:1rem 2rem}.nav-list.jsx-d7acbe4ed7f581b9{gap:20px;font-size:16px}.mega-right.jsx-d7acbe4ed7f581b9{gap:1.5rem}.banner.jsx-d7acbe4ed7f581b9{width:240px;height:200px}.admission-dropdown.jsx-d7acbe4ed7f581b9{width:85%;top:6rem;right:5rem}}@media (width<=1100px){.mega-dropdown.jsx-d7acbe4ed7f581b9{grid-template-columns:1fr;min-width:700px}.mega-right-text.jsx-d7acbe4ed7f581b9{max-width:100%}.banner.jsx-d7acbe4ed7f581b9{width:200px;height:130px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Header.js",
        lineNumber: 431,
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