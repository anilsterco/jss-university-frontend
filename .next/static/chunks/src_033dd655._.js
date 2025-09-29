(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/component/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Header.js
__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)"); // ✅ import
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Header() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // mobile menu
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // which mobile submenu is open
    const navLinks = [
        {
            name: "ABOUT JSS UNIVERSITY",
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
        },
        {
            name: "EXAMINATION",
            href: "/",
            dropdown: [
                {
                    name: "Code of Conduct",
                    href: "/"
                },
                {
                    name: "EMS- Portal link",
                    href: "/"
                },
                {
                    name: "Exam Regulations",
                    href: "/"
                }
            ]
        }
    ];
    const toggleSubmenu = (idx)=>{
        setOpenDropdown((prev)=>prev === idx ? null : idx);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-e3d943f8c1f218a8" + " " + "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e3d943f8c1f218a8" + " " + "nav-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo.png",
                        alt: "Site Logo",
                        width: 300,
                        height: 100,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e3d943f8c1f218a8" + " " + "right-header-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Main navigation",
                                className: "jsx-e3d943f8c1f218a8" + " " + "navbar ".concat(menuOpen ? "open" : ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-e3d943f8c1f218a8" + " " + "nav-list header-item",
                                    children: navLinks.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-e3d943f8c1f218a8" + " " + "nav-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-e3d943f8c1f218a8" + " " + "nav-link-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: link.href,
                                                            className: "nav-link",
                                                            children: link.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Navbar.js",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this),
                                                        link.dropdown && link.dropdown.length > 0 && // Toggle button only used for mobile; hidden on desktop via CSS
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "aria-expanded": openDropdown === idx,
                                                            "aria-controls": "submenu-".concat(idx),
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                toggleSubmenu(idx);
                                                            },
                                                            className: "jsx-e3d943f8c1f218a8" + " " + "submenu-toggle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/Navbar.js",
                                                            lineNumber: 97,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/Navbar.js",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                link.dropdown && link.dropdown.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    id: "submenu-".concat(idx),
                                                    role: "menu",
                                                    "aria-label": "".concat(link.name, " submenu"),
                                                    className: "jsx-e3d943f8c1f218a8" + " " + "dropdown-menu ".concat(openDropdown === idx ? "show-mobile" : ""),
                                                    children: link.dropdown.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-e3d943f8c1f218a8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: sub.href,
                                                                className: "dropdown-item",
                                                                role: "menuitem",
                                                                children: sub.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/component/Navbar.js",
                                                                lineNumber: 120,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/src/component/Navbar.js",
                                                            lineNumber: 119,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/Navbar.js",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMenuOpen((s)=>!s);
                                    setOpenDropdown(null);
                                },
                                "aria-label": "Toggle navigation",
                                "aria-expanded": menuOpen,
                                className: "jsx-e3d943f8c1f218a8" + " " + "hamburger",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "16",
                                    viewBox: "0 0 22 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "jsx-e3d943f8c1f218a8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "22",
                                            height: "2",
                                            rx: "1",
                                            className: "jsx-e3d943f8c1f218a8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            y: "7",
                                            width: "22",
                                            height: "2",
                                            rx: "1",
                                            className: "jsx-e3d943f8c1f218a8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            y: "14",
                                            width: "22",
                                            height: "2",
                                            rx: "1",
                                            className: "jsx-e3d943f8c1f218a8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/Navbar.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/Navbar.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/Navbar.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e3d943f8c1f218a8",
                children: ".right-header-section.jsx-e3d943f8c1f218a8{align-items:center;display:flex}.site-header.jsx-e3d943f8c1f218a8{z-index:1;background:0 0;width:100%;padding:12px 20px;position:absolute;top:0}.nav-container.jsx-e3d943f8c1f218a8{justify-content:space-between;align-items:center;max-width:90%;margin:0 auto;display:flex}.brand.jsx-e3d943f8c1f218a8{color:inherit;font-size:18px;font-weight:700;text-decoration:none}.hamburger.jsx-e3d943f8c1f218a8{cursor:pointer;background:0 0;border:none;padding:6px}.hamburger.jsx-e3d943f8c1f218a8 svg.jsx-e3d943f8c1f218a8 rect.jsx-e3d943f8c1f218a8{fill:#fff}.navbar.jsx-e3d943f8c1f218a8{display:flex}.nav-list.jsx-e3d943f8c1f218a8{color:#fff;align-items:center;gap:28px;margin:0;padding:0;font-weight:500;list-style:none;display:flex}.nav-item.jsx-e3d943f8c1f218a8{position:relative}.nav-link-row.jsx-e3d943f8c1f218a8{align-items:center;gap:8px;display:flex}.nav-link.jsx-e3d943f8c1f218a8{color:#111827;padding:6px 8px;font-weight:600;text-decoration:none}.submenu-toggle.jsx-e3d943f8c1f218a8{cursor:pointer;background:0 0;border:none;padding:6px;font-size:12px}.dropdown-menu.jsx-e3d943f8c1f218a8{z-index:1000;background:#fff;border:1px solid #e5e7eb;border-radius:6px;min-width:220px;padding:6px 0;list-style:none;display:none;position:absolute;top:calc(100% + 6px);left:0;box-shadow:0 6px 18px rgba(16,24,40,.08)}.nav-item.jsx-e3d943f8c1f218a8:hover>.dropdown-menu.jsx-e3d943f8c1f218a8,.nav-item.jsx-e3d943f8c1f218a8:focus-within>.dropdown-menu.jsx-e3d943f8c1f218a8{display:block}.dropdown-item.jsx-e3d943f8c1f218a8{color:#111827;white-space:nowrap;padding:8px 14px;font-size:14px;text-decoration:none;display:block}.dropdown-item.jsx-e3d943f8c1f218a8:hover,.dropdown-item.jsx-e3d943f8c1f218a8:focus{background:#f3f4f6}@media (max-width:768px){.hamburger.jsx-e3d943f8c1f218a8{display:block}.navbar.jsx-e3d943f8c1f218a8{width:100%;display:none}.navbar.open.jsx-e3d943f8c1f218a8{display:block}.nav-list.jsx-e3d943f8c1f218a8{flex-direction:column;align-items:stretch;gap:0;margin-top:12px}.nav-item.jsx-e3d943f8c1f218a8{border-top:1px solid #eee}.nav-link.jsx-e3d943f8c1f218a8{width:100%;padding:12px 16px;display:block}.submenu-toggle.jsx-e3d943f8c1f218a8{color:#111827;justify-content:center;align-items:center;margin-right:12px;display:inline-flex}.nav-link-row.jsx-e3d943f8c1f218a8{justify-content:space-between;padding:0 12px}.dropdown-menu.jsx-e3d943f8c1f218a8{box-shadow:none;border:none;margin:0;padding:0;display:none;position:static}.dropdown-menu.show-mobile.jsx-e3d943f8c1f218a8{display:block}.dropdown-item.jsx-e3d943f8c1f218a8{border-top:1px solid #f1f1f1;padding:10px 28px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Navbar.js",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Header, "GIIwitNn3KPCk3wU9tSBsPc4owo=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            marginTop: "50px",
            padding: "20px",
            borderTop: "1px solid #ccc",
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "© ",
                new Date().getFullYear(),
                " My App. All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Footer.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/Footer.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Footer.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const metadata = {
    title: "My Next App",
    description: "A Next.js project with Zustand and SEO setup"
};
function RootLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "jsx-7b3e614eb00f969b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "jsx-7b3e614eb00f969b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "jsx-7b3e614eb00f969b" + " " + "main-container",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7b3e614eb00f969b",
                children: ".main-container.jsx-7b3e614eb00f969b{position:relative}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_033dd655._.js.map