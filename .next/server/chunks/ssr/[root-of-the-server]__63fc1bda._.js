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
"[project]/src/component/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const admissionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            img: "/images/hambuger-banner.png"
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
            img: "https://picsum.photos/500/400?random=5",
            alt: "Admissions Image"
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log("Hamburger Menu Data:", scrolled);
    const openMenu = ()=>{
        setMenuOpen(true);
        setActiveIndex(0);
    };
    const closeMenu = ()=>{
        setMenuOpen(false);
        setActiveIndex(null);
    };
    // Close with ESC key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", handleEsc);
        return ()=>window.removeEventListener("keydown", handleEsc);
    }, []);
    // Close admission dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (admissionRef.current && !admissionRef.current.contains(e.target)) {
                setAdmissionOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const activeData = hamburgerMenudata[activeIndex] || hamburgerMenudata[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-ed3c91b5f7730187" + " " + "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ed3c91b5f7730187" + " " + `nav-container ${scrolled ? "header-scrolled" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ed3c91b5f7730187" + " " + "brand-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo.png",
                                alt: "Site Logo",
                                width: 250,
                                height: 90,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/Navbar.js",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ed3c91b5f7730187" + " " + "right-navbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Main navigation",
                                className: "jsx-ed3c91b5f7730187" + " " + "desktop-nav",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-ed3c91b5f7730187" + " " + "nav-list",
                                    children: navLinks.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-ed3c91b5f7730187" + " " + "nav-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: l.href,
                                                    className: "nav-link",
                                                    children: l.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Navbar.js",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                l.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-ed3c91b5f7730187" + " " + "dropdown",
                                                    children: l.dropdown.map((d, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-ed3c91b5f7730187",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: d.href,
                                                                className: "dropdown-item",
                                                                children: d.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 191,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, j, false, {
                                                            fileName: "[project]/src/component/Navbar.js",
                                                            lineNumber: 190,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Navbar.js",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ed3c91b5f7730187" + " " + "right-navbar-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: admissionRef,
                                        className: "jsx-ed3c91b5f7730187" + " " + "admission-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAdmissionOpen((prev)=>!prev),
                                                className: "jsx-ed3c91b5f7730187" + " " + "admission-btn",
                                                children: "ADMISSIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Navbar.js",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            admissionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ed3c91b5f7730187" + " " + "admission-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-ed3c91b5f7730187" + " " + "dropdown-arrow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Navbar.js",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-ed3c91b5f7730187" + " " + "ad-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-subtitle",
                                                                children: admissionsData.left.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-title",
                                                                children: admissionsData.left.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 220,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-desc",
                                                                children: admissionsData.left.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-contact",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-ed3c91b5f7730187",
                                                                        children: [
                                                                            "📧 ",
                                                                            admissionsData.left.email
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 223,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-ed3c91b5f7730187",
                                                                        children: [
                                                                            "📞 ",
                                                                            admissionsData.left.phone
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 224,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-ctas",
                                                                children: admissionsData.left.ctas.map((cta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: cta.href,
                                                                        className: "jsx-ed3c91b5f7730187" + " " + `cta ${cta.type}`,
                                                                        children: cta.text
                                                                    }, idx, false, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 228,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Navbar.js",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-ed3c91b5f7730187" + " " + "ad-middle",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "jsx-ed3c91b5f7730187",
                                                                children: admissionsData.middle.links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "jsx-ed3c91b5f7730187" + " " + "ad-link",
                                                                        children: [
                                                                            link,
                                                                            " →"
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 243,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-ed3c91b5f7730187" + " " + "ad-stats",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "jsx-ed3c91b5f7730187",
                                                                        children: admissionsData.middle.stats.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 249,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-ed3c91b5f7730187",
                                                                        children: admissionsData.middle.stats.subtext
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 250,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "jsx-ed3c91b5f7730187" + " " + "stats-btn",
                                                                        children: [
                                                                            admissionsData.middle.stats.btnText,
                                                                            " →"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/component/Navbar.js",
                                                                        lineNumber: 251,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/component/Navbar.js",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-ed3c91b5f7730187" + " " + "ad-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: admissionsData.right.img,
                                                            alt: admissionsData.right.alt,
                                                            width: 400,
                                                            height: 400,
                                                            className: "ad-img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Navbar.js",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Navbar.js",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Navbar.js",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/Navbar.js",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Open menu",
                                        onClick: openMenu,
                                        className: "jsx-ed3c91b5f7730187" + " " + "hamburger",
                                        children: "☰"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Navbar.js",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Navbar.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeMenu,
                className: "jsx-ed3c91b5f7730187" + " " + `backdrop ${menuOpen ? "show" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/component/Navbar.js",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                className: "jsx-ed3c91b5f7730187" + " " + `menu-overlay ${menuOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close menu",
                        onClick: closeMenu,
                        className: "jsx-ed3c91b5f7730187" + " " + "close-btn",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ed3c91b5f7730187" + " " + "hamburger-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "jsx-ed3c91b5f7730187" + " " + "menu-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-ed3c91b5f7730187",
                                    children: hamburgerMenudata.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onClick: ()=>setActiveIndex(idx),
                                            className: "jsx-ed3c91b5f7730187" + " " + `menu-left-item ${activeIndex === idx ? "active" : ""}`,
                                            children: item.name
                                        }, idx, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-ed3c91b5f7730187" + " " + "menu-middle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-ed3c91b5f7730187" + " " + "middle-title",
                                        children: "ABOUT JSSMVP HERITAGE ABOUT JSS LEADERSHIP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Navbar.js",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-ed3c91b5f7730187",
                                        children: activeData.subMenu.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-ed3c91b5f7730187" + " " + "middle-item",
                                                children: s
                                            }, i, false, {
                                                fileName: "[project]/src/component/Navbar.js",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Navbar.js",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-ed3c91b5f7730187" + " " + "menu-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ed3c91b5f7730187" + " " + "right-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ed3c91b5f7730187" + " " + "image-box",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: activeData.img,
                                            alt: activeData.name,
                                            width: 620,
                                            height: 400,
                                            objectFit: "cover",
                                            sizes: "100vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/Navbar.js",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Navbar.js",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ed3c91b5f7730187",
                children: ".site-header.jsx-ed3c91b5f7730187{z-index:1100;position:fixed;top:0;left:0;right:0}.right-navbar-section.jsx-ed3c91b5f7730187,.right-navbar.jsx-ed3c91b5f7730187{align-items:center;display:flex}.nav-container.jsx-ed3c91b5f7730187{justify-content:space-between;align-items:center;max-width:90%;margin:0 auto;padding:20px;display:flex}.nav-list.jsx-ed3c91b5f7730187{color:#fff;background-color:#16344e;gap:30px;margin:0 1rem 0 0;padding:.4rem 2rem;font-size:20px;list-style:none;display:flex}.nav-item.jsx-ed3c91b5f7730187{position:relative}.nav-container.header-scrolled.jsx-ed3c91b5f7730187 .nav-list.jsx-ed3c91b5f7730187{color:#000;background-color:#0000}.nav-link.jsx-ed3c91b5f7730187{color:#16344e;padding:6px 8px;font-size:16px;font-weight:600;text-decoration:none;display:inline-block}.dropdown.jsx-ed3c91b5f7730187{z-index:1;color:#000;background:#fff;border:1px solid #eee;min-width:200px;padding:8px 15px;list-style:none;display:none;position:absolute;top:100%;left:0;box-shadow:0 4px 12px #0000001a}.dropdown-item.jsx-ed3c91b5f7730187{color:#16344e;padding:8px 14px;text-decoration:none;display:block}.dropdown-item.jsx-ed3c91b5f7730187:hover{background:#f5f5f5}.nav-item.jsx-ed3c91b5f7730187:hover>.dropdown.jsx-ed3c91b5f7730187{display:block}.admission-wrap.jsx-ed3c91b5f7730187{margin-right:12px;position:relative}.admission-btn.jsx-ed3c91b5f7730187{cursor:pointer;background:#ffc100;border:none;padding:10px 18px;font-size:15px;font-weight:700}.admission-dropdown.jsx-ed3c91b5f7730187{z-index:1200;background:#fff;width:1000px;margin-top:6px;display:flex;position:absolute;top:100%;right:0;box-shadow:0 6px 18px #0003}.dropdown-arrow.jsx-ed3c91b5f7730187{border-bottom:10px solid #fff;border-left:10px solid #0000;border-right:10px solid #0000;width:0;height:0;position:absolute;top:-10px;right:40px}.ad-left.jsx-ed3c91b5f7730187{color:#fff;background:#2f7de8;flex-direction:column;justify-content:space-between;width:33.33%;padding:24px;display:flex}.ad-subtitle.jsx-ed3c91b5f7730187{text-transform:uppercase;margin-bottom:8px;font-size:13px}.ad-title.jsx-ed3c91b5f7730187{margin-bottom:12px;font-size:22px;font-weight:700}.ad-desc.jsx-ed3c91b5f7730187,.ad-contact.jsx-ed3c91b5f7730187{margin-bottom:16px;font-size:14px}.ad-ctas.jsx-ed3c91b5f7730187{flex-wrap:wrap;gap:8px;display:flex}.cta.jsx-ed3c91b5f7730187{padding:8px 14px;font-size:14px;font-weight:600;text-decoration:none}.cta.primary.jsx-ed3c91b5f7730187{color:#000;background:#ffc100}.cta.secondary.jsx-ed3c91b5f7730187{color:#2f7de8;background:#fff}.ad-middle.jsx-ed3c91b5f7730187{border-right:1px solid #eee;width:33.33%;padding:24px}.ad-middle.jsx-ed3c91b5f7730187 ul.jsx-ed3c91b5f7730187{margin:0;padding:0;list-style:none}.ad-link.jsx-ed3c91b5f7730187{cursor:pointer;color:#333;padding:6px 0;font-size:15px;font-weight:500}.ad-link.jsx-ed3c91b5f7730187:hover{text-decoration:underline}.ad-stats.jsx-ed3c91b5f7730187{margin-top:20px}.ad-stats.jsx-ed3c91b5f7730187 h3.jsx-ed3c91b5f7730187{margin-bottom:4px;font-size:18px;font-weight:700}.ad-stats.jsx-ed3c91b5f7730187 p.jsx-ed3c91b5f7730187{color:#777;margin-bottom:10px;font-size:13px}.stats-btn.jsx-ed3c91b5f7730187{cursor:pointer;background:#fff;border:1px solid #000;padding:6px 12px;font-weight:600}.ad-right.jsx-ed3c91b5f7730187{width:33.33%}.ad-img.jsx-ed3c91b5f7730187{object-fit:cover;width:100%;height:100%}.hamburger.jsx-ed3c91b5f7730187{cursor:pointer;color:#fff;background:#16344e;border:none;padding:4px 10px;font-size:22px}.backdrop.jsx-ed3c91b5f7730187{opacity:0;pointer-events:none;z-index:1190;background:#00000059;transition:opacity .25s;position:fixed;inset:0}.backdrop.show.jsx-ed3c91b5f7730187{opacity:1;pointer-events:all}.menu-overlay.jsx-ed3c91b5f7730187{z-index:1200;pointer-events:none;position:fixed;inset:0}.menu-overlay.open.jsx-ed3c91b5f7730187{pointer-events:auto}.hamburger-layout.jsx-ed3c91b5f7730187{background:#fff;width:0;height:55%;transition:width .45s cubic-bezier(.2,.9,.2,1);display:flex;position:absolute;top:0;right:0;overflow:hidden}.menu-overlay.open.jsx-ed3c91b5f7730187 .hamburger-layout.jsx-ed3c91b5f7730187{width:100%}.menu-left.jsx-ed3c91b5f7730187{color:#fff;background:#2f7de8;width:20%;padding-top:5rem}.menu-left-item.jsx-ed3c91b5f7730187{cursor:pointer;margin-bottom:6px;padding:12px 14px 12px 5rem;font-size:21px;font-weight:600}.menu-left-item.active.jsx-ed3c91b5f7730187{color:#000;background:#ffc100}.menu-left.jsx-ed3c91b5f7730187 ul.jsx-ed3c91b5f7730187{padding:0;list-style:none}.menu-middle.jsx-ed3c91b5f7730187{background:#fff;border-right:1px solid #eee;width:20%;padding:5rem 3rem 1rem}.middle-title.jsx-ed3c91b5f7730187{color:#000;text-transform:uppercase;margin-bottom:10px;font-size:21px}.middle-item.jsx-ed3c91b5f7730187{border-bottom:1px dashed #eee;padding:8px 0;font-weight:700}.menu-right.jsx-ed3c91b5f7730187{background:#fafafa;flex:1;padding:28px;overflow-y:auto}.image-box.jsx-ed3c91b5f7730187{justify-content:center;display:flex}.close-btn.jsx-ed3c91b5f7730187{display:none}.menu-overlay.open.jsx-ed3c91b5f7730187 .close-btn.jsx-ed3c91b5f7730187{z-index:1300;background:unset;color:#000;cursor:pointer;border:none;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;font-size:24px;font-weight:700;display:flex;position:absolute;top:20px;right:20px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Navbar.js",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__63fc1bda._.js.map