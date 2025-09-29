module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/component/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
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
function Navbar() {
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e5953b08203c9b6d",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-e5953b08203c9b6d" + " " + "navbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "jsx-e5953b08203c9b6d" + " " + "nav-links",
                    children: navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onMouseEnter: ()=>setHoveredIndex(index),
                            onMouseLeave: ()=>setHoveredIndex(null),
                            className: "jsx-e5953b08203c9b6d" + " " + "nav-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "jsx-e5953b08203c9b6d" + " " + "nav-link",
                                    children: link.name
                                }, void 0, false, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                link.dropdown && hoveredIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e5953b08203c9b6d" + " " + "dropdown",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e5953b08203c9b6d" + " " + "dropdown-arrow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-e5953b08203c9b6d",
                                            children: link.dropdown.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-e5953b08203c9b6d",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item.href,
                                                        className: "jsx-e5953b08203c9b6d",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/Navbar.js",
                                                        lineNumber: 85,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/component/Navbar.js",
                                                    lineNumber: 84,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/Navbar.js",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/Navbar.js",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, link.name, true, {
                            fileName: "[project]/src/component/Navbar.js",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/component/Navbar.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/Navbar.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e5953b08203c9b6d",
                children: ".navbar.jsx-e5953b08203c9b6d{background:#002147;padding:15px 30px;display:flex}.nav-links.jsx-e5953b08203c9b6d{gap:30px;list-style:none;display:flex}.nav-item.jsx-e5953b08203c9b6d{position:relative}.nav-link.jsx-e5953b08203c9b6d{color:#fff;padding:8px 12px;font-size:16px;text-decoration:none;display:block}.nav-link.jsx-e5953b08203c9b6d:hover{background:#004080;border-radius:4px}.dropdown.jsx-e5953b08203c9b6d{z-index:999;background:#fff;border-radius:6px;min-width:200px;margin-top:10px;padding:10px 0;position:absolute;top:100%;left:50%;transform:translate(-50%);box-shadow:0 4px 20px #00000026}.dropdown-arrow.jsx-e5953b08203c9b6d{z-index:-1;background:#fff;width:16px;height:16px;position:absolute;top:-8px;left:50%;transform:translate(-50%)rotate(45deg);box-shadow:-3px -3px 5px #0000000d}.dropdown.jsx-e5953b08203c9b6d ul.jsx-e5953b08203c9b6d{margin:0;padding:0;list-style:none}.dropdown.jsx-e5953b08203c9b6d li.jsx-e5953b08203c9b6d{padding:10px 20px}.dropdown.jsx-e5953b08203c9b6d li.jsx-e5953b08203c9b6d a.jsx-e5953b08203c9b6d{color:#002147;font-size:15px;text-decoration:none;transition:background .2s;display:block}.dropdown.jsx-e5953b08203c9b6d li.jsx-e5953b08203c9b6d a.jsx-e5953b08203c9b6d:hover{background:#f0f0f0}.nav-item.jsx-e5953b08203c9b6d:hover .dropdown.jsx-e5953b08203c9b6d{display:block}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Navbar.js",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab2eca32._.js.map