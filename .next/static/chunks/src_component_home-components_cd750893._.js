(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/component/home-components/banner/banner.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerContent": "banner-module__TnqM8q__bannerContent",
  "bannerContentA": "banner-module__TnqM8q__bannerContentA",
  "bannerContentH1": "banner-module__TnqM8q__bannerContentH1",
  "bannerContentP": "banner-module__TnqM8q__bannerContentP",
  "firstBannerSlide": "banner-module__TnqM8q__firstBannerSlide",
  "iconSpacing": "banner-module__TnqM8q__iconSpacing",
  "slideImage": "banner-module__TnqM8q__slideImage",
  "swiperContainer": "banner-module__TnqM8q__swiperContainer",
});
}),
"[project]/src/component/home-components/banner/BannerComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/Banner/index.js
__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/home-components/banner/banner.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
;
function HeroSlider() {
    const slides = [
        {
            id: 1,
            title: "A TRADITION OF INNOVATION AND LEADERSHIP",
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            img: "/images/home-page/placeholder-banner.png",
            url: "/"
        },
        {
            id: 2,
            title: "INNOVATION AND LEADERSHIP A TRADITION OF",
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            img: "/images/home-page/placeholder-banner.png",
            url: "/"
        },
        {
            id: 3,
            title: "TRADITION OF INNOVATION AND LEADERSHIP",
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            img: "/images/home-page/placeholder-banner.png",
            url: "/"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].firstBannerSlide,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
            ],
            navigation: false,
            pagination: {
                clickable: true
            },
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swiperContainer,
            children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.img,
                            alt: "slide image",
                            fill: true,
                            priority: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContentH1,
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContentP,
                                    children: slide.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                slide.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: slide.url,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContentA,
                                    children: [
                                        "Learn more about JSS",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRightCircle"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$banner$2f$banner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconSpacing
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, slide.id, true, {
                    fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
                    lineNumber: 48,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/home-components/banner/BannerComponent.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/home-components/courses-offered/courses-offered.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerLabel": "courses-offered-module__nc8kwW__bannerLabel",
  "bottomSectionH6": "courses-offered-module__nc8kwW__bottomSectionH6",
  "cardImage": "courses-offered-module__nc8kwW__cardImage",
  "programsCount": "courses-offered-module__nc8kwW__programsCount",
  "programsCountPlus": "courses-offered-module__nc8kwW__programsCountPlus",
  "programsCountWrapper": "courses-offered-module__nc8kwW__programsCountWrapper",
  "programsText": "courses-offered-module__nc8kwW__programsText",
  "secondSection": "courses-offered-module__nc8kwW__secondSection",
  "topSection": "courses-offered-module__nc8kwW__topSection",
  "topSectionH1": "courses-offered-module__nc8kwW__topSectionH1",
});
}),
"[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/CoursesOffered/index.js
__turbopack_context__.s([
    "default",
    ()=>CoursesOffered
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/home-components/courses-offered/courses-offered.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
// ✅ All data stored separately for easy replacement (API later)
const coursesData = {
    title: "<span class='blue-text'>Start Your</span> JSS Journey",
    subtitle: "Courses Offered",
    searchPlaceholder: "Search Course",
    programsCount: "200",
    programsText: "academic programs and pave the way to your ideal future.",
    levels: [
        {
            img: "/images/home-page/second-section-banner.png",
            name: "UG",
            link: "/"
        },
        {
            img: "/images/home-page/second-section-banner.png",
            name: "PG",
            link: "/"
        },
        {
            img: "/images/home-page/second-section-banner.png",
            name: "PHD",
            link: "/"
        }
    ],
    schools: [
        {
            name: "Engineering",
            link: "#"
        },
        {
            name: "Pharmacy",
            link: "#"
        },
        {
            name: "Management",
            link: "#"
        },
        {
            name: "Computer Applications",
            link: "#"
        },
        {
            name: "Applied Sciences",
            link: "#"
        },
        {
            name: "Humanities",
            link: "#"
        }
    ],
    admission: {
        year: "2025-26",
        desc: "Sed ut perspiciatis unde omnis",
        applyLink: "#"
    }
};
function CoursesOffered() {
    // Create ProgramsCount component
    const ProgramsCount = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].programsCountWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "display-4 programs-count ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].programsCount),
                    children: coursesData.programsCount
                }, void 0, false, {
                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                    lineNumber: 55,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].programsCountPlus,
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                    lineNumber: 58,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
            lineNumber: 54,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "container-fluid second-section ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondSection),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row align-items-center mb-5 top-section ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSection),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-4 mb-4 mb-lg-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-uppercase small mb-2",
                                    children: coursesData.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "fw-bold ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSectionH1),
                                    dangerouslySetInnerHTML: {
                                        __html: coursesData.title
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "input-group my-4 shadow-sm rounded-pill overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "form-control border-0",
                                            placeholder: coursesData.searchPlaceholder
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "input-group-text bg-white border-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiSearch"], {}, void 0, false, {
                                                fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgramsCount, {}, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].programsText,
                                            children: coursesData.programsText
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-8 d-flex justify-content-end gap-3",
                            children: coursesData.levels.map((level, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: level.link,
                                    className: "second-section-cards-image position-relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: level.img,
                                            alt: "slide image",
                                            width: 200,
                                            height: 300,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "banner-label d-flex align-items-center gap-2 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerLabel),
                                            children: [
                                                level.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                    fontSize: 15,
                                                    color: "#b08f29"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                                    lineNumber: 118,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row border-top border-bottom align-items-center bottom-section w-100 m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-8 pb-4 pt-1 border-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "fw-bold mb-3 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$courses$2d$offered$2f$courses$2d$offered$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomSectionH6),
                                    children: "Explore Programs by School of"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex flex-wrap explore-program-section gap-3",
                                    children: coursesData.schools.map((school, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: school.link,
                                            className: "py-2 px-4 d-flex justify-content-between align-items-center",
                                            children: [
                                                school.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                    fontSize: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                                    lineNumber: 138,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-4 d-flex justify-content-between align-items-center ps-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "fw-bold mb-1",
                                            children: [
                                                "Admission",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: coursesData.admission.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "small mb-0",
                                            children: coursesData.admission.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: coursesData.admission.applyLink,
                                    className: "btn btn-warning rounded-pill px-3",
                                    children: "Apply Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/home-components/courses-offered/CourseOfferedComponent.js",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = CoursesOffered;
var _c;
__turbopack_context__.k.register(_c, "CoursesOffered");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/home-components/placement/placement.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blueBg": "placement-module__VSLvPW__blueBg",
  "statsLabel": "placement-module__VSLvPW__statsLabel",
  "statsNumber": "placement-module__VSLvPW__statsNumber",
  "testimonialImageContainer": "placement-module__VSLvPW__testimonialImageContainer",
  "thirdSection": "placement-module__VSLvPW__thirdSection",
  "wallOfFameContainer": "placement-module__VSLvPW__wallOfFameContainer",
  "wallOfFameImage": "placement-module__VSLvPW__wallOfFameImage",
  "wallOfFameText": "placement-module__VSLvPW__wallOfFameText",
});
}),
"[project]/src/component/home-components/placement/PlacementComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/PlacementsSection/index.js
__turbopack_context__.s([
    "default",
    ()=>PlacementsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/home-components/placement/placement.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const placementsData = {
    title: "FROM <span class='blue-text'>CAMPUS</span> TO <span class='blue-text'>CORPORATE</span>",
    stats: [
        {
            number: "5000+",
            label: "STUDENTS HIRED"
        },
        {
            number: "22.5",
            label: "LPA MAX"
        },
        {
            number: "2000+",
            label: "RECRUITERS"
        }
    ],
    testimonials: [
        {
            img: "/images/home-page/testimonial-placeholder.png",
            text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
            name: "Jane Doe",
            role: "Product Engineer, TCS"
        },
        {
            img: "/images/home-page/testimonial-placeholder.png",
            text: "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
            name: "John Smith",
            role: "Software Engineer, Infosys"
        },
        {
            img: "/images/home-page/testimonial-placeholder.png",
            text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            name: "Anita Verma",
            role: "Business Analyst, IBM"
        }
    ],
    wallOfFame: {
        img: "/images/home-page/third-section-banner.png",
        text: "JSS <span class='text-warning'>PLACEMENTS 2023</span> WALL OF FAME",
        link: "#"
    },
    recruiters: [
        {
            name: "Flipkart",
            logo: "/images/home-page/flipkart-logo.png"
        },
        {
            name: "TCS",
            logo: "/images/home-page/tcs-logo.png"
        },
        {
            name: "Swiggy",
            logo: "/images/home-page/swiggy-logo.png"
        },
        {
            name: "TCS",
            logo: "/images/home-page/tcs-logo.png"
        },
        {
            name: "Flipkart",
            logo: "/images/home-page/flipkart-logo.png"
        },
        {
            name: "Swiggy",
            logo: "/images/home-page/swiggy-logo.png"
        },
        {
            name: "Flipkart",
            logo: "/images/home-page/flipkart-logo.png"
        },
        {
            name: "TCS",
            logo: "/images/home-page/tcs-logo.png"
        },
        {
            name: "Swiggy",
            logo: "/images/home-page/swiggy-logo.png"
        },
        {
            name: "TCS",
            logo: "/images/home-page/tcs-logo.png"
        }
    ]
};
function PlacementsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "container-fluid py-5 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thirdSection),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-bold text-uppercase small text-muted mb-2",
                            children: "Placements"
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fw-bold display-6",
                            dangerouslySetInnerHTML: {
                                __html: placementsData.title
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-4 w-100 m-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-7 ps-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row mb-5 pb-4 w-100 m-auto",
                                    children: placementsData.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-md-4 text-center border p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fw-bold ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsNumber),
                                                    children: stat.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-0 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsLabel),
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                    modules: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                    ],
                                    navigation: {
                                        nextEl: ".testimonial-next",
                                        prevEl: ".testimonial-prev"
                                    },
                                    loop: true,
                                    spaceBetween: 30,
                                    slidesPerView: 1,
                                    style: {
                                        padding: "20px 20px"
                                    },
                                    className: "testimonial-slider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueBg
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        placementsData.testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "position-relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialImageContainer
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: t.img,
                                                                    alt: t.name,
                                                                    width: 140,
                                                                    height: 160,
                                                                    priority: true,
                                                                    className: "position-absolute top-0 start-0 rounded shadow"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuoteLeft"], {
                                                                    className: "mb-3",
                                                                    color: "#b08f29"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 122,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "",
                                                                    children: [
                                                                        t.text,
                                                                        "”"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 123,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: "small mb-0 blue-text",
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    className: "",
                                                                    children: t.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 125,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-flex gap-2 mt-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "testimonial-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                                                                                size: 8
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                                lineNumber: 128,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                            lineNumber: 127,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "testimonial-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                                                size: 8
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                                lineNumber: 131,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                            lineNumber: 130,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                                    lineNumber: 126,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-5 d-flex justify-content-end px-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "position-relative bg-light d-flex align-items-center justify-content-center rounded ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wallOfFameContainer),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: placementsData.wallOfFame.img,
                                        alt: "Wall of Fame",
                                        width: 400,
                                        height: 700,
                                        className: "rounded ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wallOfFameImage)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "position-absolute text-white fw-bold fs-3 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$placement$2f$placement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wallOfFameText),
                                        dangerouslySetInnerHTML: {
                                            __html: placementsData.wallOfFame.text
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: placementsData.wallOfFame.link,
                                        className: "position-absolute",
                                        style: {
                                            bottom: "4%",
                                            left: "6%"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuCircleArrowRight"], {
                                            size: 20,
                                            color: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-top mt-5 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-bold small text-uppercase mb-3 blue-text",
                            children: "Our Recruiters"
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex flex-wrap gap-4 align-items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                ],
                                navigation: false,
                                loop: true,
                                spaceBetween: 10,
                                slidesPerView: 7,
                                className: "recruiters-slider",
                                children: placementsData.recruiters.map((rec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: rec.logo,
                                            alt: rec.name,
                                            width: 150,
                                            height: 80,
                                            className: "img-fluid"
                                        }, i, false, {
                                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/home-components/placement/PlacementComponent.js",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = PlacementsSection;
var _c;
__turbopack_context__.k.register(_c, "PlacementsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/home-components/facilities/facilities.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerContent": "facilities-module__UE4CmG__bannerContent",
  "bannerLink": "facilities-module__UE4CmG__bannerLink",
  "bannerLinks": "facilities-module__UE4CmG__bannerLinks",
  "blueText": "facilities-module__UE4CmG__blueText",
  "fixedSlider": "facilities-module__UE4CmG__fixedSlider",
  "fourthSliderSection": "facilities-module__UE4CmG__fourthSliderSection",
  "headingContainer": "facilities-module__UE4CmG__headingContainer",
  "headingContent": "facilities-module__UE4CmG__headingContent",
  "slideContainer": "facilities-module__UE4CmG__slideContainer",
  "slideImage": "facilities-module__UE4CmG__slideImage",
  "slideNumberBox": "facilities-module__UE4CmG__slideNumberBox",
  "slideProgress": "facilities-module__UE4CmG__slideProgress",
  "sliderStickyWrapper": "facilities-module__UE4CmG__sliderStickyWrapper",
  "swiperContainer": "facilities-module__UE4CmG__swiperContainer",
  "verticalLine": "facilities-module__UE4CmG__verticalLine",
});
}),
"[project]/src/component/home-components/facilities/FacilitiesComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/FacilitiesSlider/index.js
__turbopack_context__.s([
    "default",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/mousewheel.mjs [app-client] (ecmascript) <export default as Mousewheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/keyboard.mjs [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/home-components/facilities/facilities.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function HeroSlider() {
    _s();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPinned, setIsPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLastSlide, setIsLastSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFirstSlide, setIsFirstSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const slides = [
        {
            id: 1,
            title: "CLASSROOM",
            desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
            img: "/images/home-page/fourth-section-first-banner.png",
            url: [
                {
                    link: "/",
                    text: "SMART CLASSROOM"
                },
                {
                    link: "/",
                    text: "VIRTUAL CLASSROOM"
                },
                {
                    link: "/",
                    text: "LECTURE HALL"
                }
            ]
        },
        {
            id: 2,
            title: "ACADEMICS LABS",
            desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
            img: "/images/home-page/fourth-section-second-banner.png",
            url: [
                {
                    link: "/",
                    text: "SMART CLASSROOM"
                },
                {
                    link: "/",
                    text: "VIRTUAL CLASSROOM"
                },
                {
                    link: "/",
                    text: "LECTURE HALL"
                }
            ]
        },
        {
            id: 3,
            title: "CAMPUS",
            desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
            img: "/images/home-page/fourth-section-third-banner.png",
            url: [
                {
                    link: "/",
                    text: "SMART CLASSROOM"
                },
                {
                    link: "/",
                    text: "VIRTUAL CLASSROOM"
                },
                {
                    link: "/",
                    text: "LECTURE HALL"
                }
            ]
        },
        {
            id: 4,
            title: "SPORTS AND HEALTH",
            desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
            img: "/images/home-page/fourth-section-fourth-banner.png",
            url: [
                {
                    link: "/",
                    text: "SMART CLASSROOM"
                },
                {
                    link: "/",
                    text: "VIRTUAL CLASSROOM"
                },
                {
                    link: "/",
                    text: "LECTURE HALL"
                }
            ]
        }
    ];
    // Detect when slider section is in viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlider.useEffect": ()=>{
            const section = sectionRef.current;
            const observer = new IntersectionObserver({
                "HeroSlider.useEffect": (param)=>{
                    let [entry] = param;
                    setIsPinned(entry.isIntersecting);
                }
            }["HeroSlider.useEffect"], {
                threshold: 0.3
            });
            if (section) observer.observe(section);
            return ({
                "HeroSlider.useEffect": ()=>observer.disconnect()
            })["HeroSlider.useEffect"];
        }
    }["HeroSlider.useEffect"], []);
    const handleSlideChange = (swiper)=>{
        setIsFirstSlide(swiper.activeIndex === 0);
        setIsLastSlide(swiper.activeIndex === slides.length - 1);
    };
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handleWheel]": (e)=>{
            if (!isPinned || isTransitioning) return;
            const swiper = swiperRef.current.swiper;
            const delta = e.deltaY;
            // Scroll down
            if (delta > 40) {
                if (!isLastSlide) {
                    swiper.slideNext(800);
                } else {
                    // Instantly move to next section (no delay/freeze)
                    setIsTransitioning(true);
                    const next = sectionRef.current.nextElementSibling;
                    if (next) {
                        document.body.style.overflow = "auto";
                        next.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                    // small timeout to avoid double-trigger
                    setTimeout({
                        "HeroSlider.useCallback[handleWheel]": ()=>setIsTransitioning(false)
                    }["HeroSlider.useCallback[handleWheel]"], 300);
                }
            } else if (delta < -40) {
                if (!isFirstSlide) {
                    swiper.slidePrev(800);
                } else {
                    // Instantly move to previous section
                    setIsTransitioning(true);
                    const prev = sectionRef.current.previousElementSibling;
                    if (prev) {
                        document.body.style.overflow = "auto";
                        prev.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                    setTimeout({
                        "HeroSlider.useCallback[handleWheel]": ()=>setIsTransitioning(false)
                    }["HeroSlider.useCallback[handleWheel]"], 300);
                }
            }
        }
    }["HeroSlider.useCallback[handleWheel]"], [
        isPinned,
        isTransitioning,
        isLastSlide,
        isFirstSlide
    ]);
    // Listen for mousewheel only while slider is visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlider.useEffect": ()=>{
            const handleGlobalWheel = {
                "HeroSlider.useEffect.handleGlobalWheel": (e)=>{
                    var _sectionRef_current;
                    const rect = (_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.getBoundingClientRect();
                    if (!rect) return;
                    const inView = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;
                    if (inView) {
                        e.preventDefault();
                        handleWheel(e);
                    }
                }
            }["HeroSlider.useEffect.handleGlobalWheel"];
            window.addEventListener("wheel", handleGlobalWheel, {
                passive: false
            });
            return ({
                "HeroSlider.useEffect": ()=>window.removeEventListener("wheel", handleGlobalWheel)
            })["HeroSlider.useEffect"];
        }
    }["HeroSlider.useEffect"], [
        handleWheel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fourthSliderSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingContent, " d-flex gap-5"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCirclePlus"], {
                                color: "#b08f29",
                                fontSize: 30
                            }, void 0, false, {
                                fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "mb-2",
                                    children: "FACILITIES @ JSS UNIVERSITY"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mb-0",
                                    children: [
                                        "INFRA THAT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueText,
                                            children: "ELEVATES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                            lineNumber: 197,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderStickyWrapper, " ").concat(isPinned ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fixedSlider : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    ref: swiperRef,
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__["Mousewheel"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"]
                    ],
                    direction: "vertical",
                    speed: 3000,
                    slidesPerView: 1,
                    onSlideChange: handleSlideChange,
                    allowTouchMove: false,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swiperContainer,
                    children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: slide.img,
                                        alt: "slide image",
                                        fill: true,
                                        priority: index === 0,
                                        quality: 85,
                                        sizes: "100vw",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verticalLine,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideNumberBox,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerContent,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: slide.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: slide.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerLinks,
                                        children: slide.url && slide.url.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.link,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerLink,
                                                children: [
                                                    item.text,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {}, void 0, false, {
                                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                                        lineNumber: 247,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                                lineNumber: 241,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$facilities$2f$facilities$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideProgress,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                index + 1,
                                                " / ",
                                                slides.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        }, slide.id, false, {
                            fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/home-components/facilities/FacilitiesComponent.js",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(HeroSlider, "2Don6bQPYuipaPyDpS0BNjFmTns=");
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/home-components/about-home-jss/about-home-jss.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chancellorImage": "about-home-jss-module__Uc86oW__chancellorImage",
  "contentPart": "about-home-jss-module__Uc86oW__contentPart",
  "description": "about-home-jss-module__Uc86oW__description",
  "fifthMiddleSection": "about-home-jss-module__Uc86oW__fifthMiddleSection",
  "fifthSection": "about-home-jss-module__Uc86oW__fifthSection",
  "highlightBox": "about-home-jss-module__Uc86oW__highlightBox",
  "highlightNumber": "about-home-jss-module__Uc86oW__highlightNumber",
  "leftColumn": "about-home-jss-module__Uc86oW__leftColumn",
  "navButtons": "about-home-jss-module__Uc86oW__navButtons",
  "rightColumn": "about-home-jss-module__Uc86oW__rightColumn",
  "sourceText": "about-home-jss-module__Uc86oW__sourceText",
  "topSection": "about-home-jss-module__Uc86oW__topSection",
  "topSectionHeading": "about-home-jss-module__Uc86oW__topSectionHeading",
  "violetText": "about-home-jss-module__Uc86oW__violetText",
});
}),
"[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/LegacySection/index.js
__turbopack_context__.s([
    "default",
    ()=>LegacySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/home-components/about-home-jss/about-home-jss.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
const legacyData = {
    title: "SRI SUTTUR MATH THE <span class='blue-text'>1000-YEAR LEGACY</span>",
    subtitle: "ABOUT JSS UNIVERSITY",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
    url: "/",
    chancellor: {
        img: "/images/home-page/fifth-section-banner.png",
        name: "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji",
        message: "Message From Chancellor"
    },
    highlights: [
        {
            number: "#37",
            text: "#201-300 IN ENGINEERING IN 2024",
            source: "Outlook 2020"
        },
        {
            number: "#9",
            text: "AMONG TOP EMERGING PRIVATE INSTITUTIONS 2016 BY",
            source: "Times of India"
        }
    ],
    buttons: [
        {
            text: "360 VIEW",
            link: "#"
        },
        {
            text: "WHY JSS",
            link: "#"
        },
        {
            text: "APPLY NOW",
            link: "#"
        }
    ],
    accreditations: [
        {
            name: "UGC",
            img: "/images/home-page/fifth-slider-first-img.png",
            text: "JSS Academy of Technical Education, Noida is recognized under UGC"
        },
        {
            name: "AICTE",
            img: "/images/home-page/fifth-slider-second-img.png",
            text: "Approved by All India Council for Technical Education (AICTE)"
        },
        {
            name: "NAAC",
            img: "/images/home-page/fifth-slider-first-img.png",
            text: "National Assessment and Accreditation Council (NAAC)"
        }
    ]
};
function LegacySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container-fluid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fifthSection),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSection),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-bold small text-uppercase",
                            children: legacyData.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fw-bold display-6 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topSectionHeading),
                            dangerouslySetInnerHTML: {
                                __html: legacyData.title
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-4 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fifthMiddleSection),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-5 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftColumn),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "position-relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: legacyData.chancellor.img,
                                        alt: legacyData.chancellor.name,
                                        width: 500,
                                        height: 350,
                                        className: "img-fluid rounded ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chancellorImage)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentPart,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoPlayCircleOutline"], {
                                                fontSize: 30,
                                                className: "text-warning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: legacyData.chancellor.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    legacyData.chancellor.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-7 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightColumn),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "fw-light ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description),
                                    children: legacyData.description
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divider mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: legacyData.url,
                                        className: "nav-buttons",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsArrowRightCircle"], {
                                            className: "fw-light",
                                            color: "rgba(146, 142, 142, 1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row g-3 mb-4 d-flex gap-4",
                                    children: legacyData.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "fw-bold ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightNumber),
                                                    children: h.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "left-content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-1",
                                                            children: h.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sourceText,
                                                            children: h.source
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex gap-3 about-home-buttons",
                                    children: legacyData.buttons.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: btn.link,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$home$2d$components$2f$about$2d$home$2d$jss$2f$about$2d$home$2d$jss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButtons,
                                            children: btn.text
                                        }, i, false, {
                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 pt-4 fifth-section-slider",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                        ],
                        autoplay: {
                            delay: 3000
                        },
                        spaceBetween: 30,
                        pagination: {
                            clickable: true
                        },
                        slidesPerView: 3,
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            576: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            }
                        },
                        children: legacyData.accreditations.map((acc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gap-3 px-3 d-flex align-items-center content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: acc.img,
                                            alt: acc.name,
                                            width: 80,
                                            height: 80,
                                            className: "img-fluid mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "small w-50",
                                            children: acc.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/home-components/about-home-jss/AboutHomeComponent.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = LegacySection;
var _c;
__turbopack_context__.k.register(_c, "LegacySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/home-components/testimonial/TestimonialComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home-components/TestimonialsSection/index.js
__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './TestimonialsSection.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const testimonialsData = [
    {
        name: "NAMAN SUKHIJA",
        batch: "B. Tech (CE), 2012-16 Batch",
        role: "Designer & Certifier, Passive House Institute, Germany",
        quote: "Studying at JSS Noida has been a transformative journey...",
        img: "/images/home-page/sixth-section-first-banner.png",
        videoUrl: "https://www.youtube.com/embed/8pARSE8wytw?si=Z1u43drelLPclwBc",
        url: "#1"
    },
    {
        name: "APOORV SHIKHAR",
        batch: "B. Tech (ES), 2013-17 Batch",
        role: "Junior Research Fellow, GB Pant National Institute of Himalayan Environment, Uttarakhand",
        img: "/images/home-page/sixth-section-second-banner.png",
        quote: "I have gained both theoretical and practical knowledge and was exposed to real-world challenges.",
        videoUrl: "",
        url: "#2"
    },
    {
        name: "YASHIKA MATHUR",
        batch: "B. Tech (CE), 2013-17 Batch",
        role: "Counsellor – Engineering Design, Design2Occupancy Services LLP",
        img: "/images/home-page/sixth-section-third-banner.png",
        videoUrl: "",
        url: "#3"
    },
    {
        name: "NADEEM KHAN",
        batch: "B. Tech (ME), 2015-19 Batch",
        role: "Project Mechanical Engineer, JK Paper Ltd, Unit CPM, Gujarat",
        img: "/images/home-page/sixth-section-fourth-banner.png",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        url: "#4"
    },
    {
        name: "RITIKA SHARMA",
        batch: "B. Tech (CSE), Batch of 2024",
        img: "/images/home-page/sixth-section-fifth-banner.png",
        quote: "JSS University has truly shaped my journey—both academically and personally.",
        videoUrl: "",
        url: "#5"
    }
];
function TestimonialsSection() {
    _s();
    const [selectedVideo, setSelectedVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // distribute testimonials dynamically into columns
    const column1 = testimonialsData.slice(0, 1);
    const column2 = testimonialsData.slice(1, 3);
    const column3 = testimonialsData.slice(3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: styles.testimonialsSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.testimonialsContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.columnLeft,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.headerContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: styles.testimonialsLabel,
                                        children: "TESTIMONIALS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: styles.mainHeading,
                                        children: [
                                            "IN ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: styles.blueText,
                                                children: "CONVERSATION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                                lineNumber: 72,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            "WITH THE",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: styles.blueText,
                                                children: [
                                                    "JSS",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                                        lineNumber: 77,
                                                        columnNumber: 17
                                                    }, this),
                                                    "COMMUNITY"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: styles.circleArrowBtn,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12h14M12 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            column1.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                    data: item,
                                    onPlay: ()=>setSelectedVideo(item.videoUrl)
                                }, i, false, {
                                    fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.columnMiddle,
                        children: column2.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                data: item,
                                onPlay: ()=>setSelectedVideo(item.videoUrl)
                            }, i, false, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.columnRight,
                        children: column3.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                data: item,
                                onPlay: ()=>setSelectedVideo(item.videoUrl)
                            }, i, false, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            selectedVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.videoModalOverlay,
                onClick: ()=>setSelectedVideo(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.videoModalContent,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            src: selectedVideo,
                            title: "Testimonial Video",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            className: styles.videoIframe
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: styles.closeBtn,
                            onClick: ()=>setSelectedVideo(null),
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "sxgy0ooEX+Me+y0n/sMclmbujtY=");
_c = TestimonialsSection;
function TestimonialCard(param) {
    let { data, onPlay } = param;
    const hasVideo = data.videoUrl && data.videoUrl.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: styles.testimonialCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.cardImgContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: data.url,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: data.img,
                            alt: data.name,
                            width: 380,
                            height: 380,
                            className: styles.cardImg
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    hasVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.playBtn,
                        onClick: onPlay,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    data.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.quoteBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: styles.yellowLine
                            }, void 0, false, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: styles.quoteTextOverlay,
                                children: data.quote
                            }, void 0, false, {
                                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: data.url,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.cardInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: styles.personName,
                            children: data.name
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.personBatch,
                            children: data.batch
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        data.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: styles.personRole,
                            children: data.role
                        }, void 0, false, {
                            fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                            lineNumber: 195,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/home-components/testimonial/TestimonialComponent.js",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c1 = TestimonialCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "TestimonialsSection");
__turbopack_context__.k.register(_c1, "TestimonialCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_component_home-components_cd750893._.js.map