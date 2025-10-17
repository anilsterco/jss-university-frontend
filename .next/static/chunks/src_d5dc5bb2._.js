(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/happenings/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeTab": "page-module__yFOS7q__activeTab",
  "happeningsContainer": "page-module__yFOS7q__happeningsContainer",
  "happeningsSubTitle": "page-module__yFOS7q__happeningsSubTitle",
  "happeningsTitle": "page-module__yFOS7q__happeningsTitle",
  "tabButton": "page-module__yFOS7q__tabButton",
  "tabHeaders": "page-module__yFOS7q__tabHeaders",
});
}),
"[project]/src/component/happening-components/news-events/news-events.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerDate": "news-events-module__WsP3GG__bannerDate",
  "bannerImage": "news-events-module__WsP3GG__bannerImage",
  "bannerTextBox": "news-events-module__WsP3GG__bannerTextBox",
  "bannerTitle": "news-events-module__WsP3GG__bannerTitle",
  "bannerWrapper": "news-events-module__WsP3GG__bannerWrapper",
  "cardBody": "news-events-module__WsP3GG__cardBody",
  "cardDate": "news-events-module__WsP3GG__cardDate",
  "cardTitle": "news-events-module__WsP3GG__cardTitle",
  "cardsRow": "news-events-module__WsP3GG__cardsRow",
  "eventCard": "news-events-module__WsP3GG__eventCard",
  "eventDate": "news-events-module__WsP3GG__eventDate",
  "eventDesc": "news-events-module__WsP3GG__eventDesc",
  "eventImage": "news-events-module__WsP3GG__eventImage",
  "eventTitle": "news-events-module__WsP3GG__eventTitle",
  "eventType": "news-events-module__WsP3GG__eventType",
  "eventsSection": "news-events-module__WsP3GG__eventsSection",
  "filters": "news-events-module__WsP3GG__filters",
  "secondaryImageWrapper": "news-events-module__WsP3GG__secondaryImageWrapper",
  "secondarySection": "news-events-module__WsP3GG__secondarySection",
  "secondaryText": "news-events-module__WsP3GG__secondaryText",
  "textOnlyCard": "news-events-module__WsP3GG__textOnlyCard",
  "upcomingTag": "news-events-module__WsP3GG__upcomingTag",
});
}),
"[project]/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ✅ CENTRALIZED API FILE
// All your API logic — Home, SchoolPage, DepartmentPage — in one place
__turbopack_context__.s([
    "happeningAPI",
    ()=>happeningAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "https://project-demo.in/jss/api";
// --- Generic fetch function with SSR caching ---
async function fetchData(endpoint) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const res = await fetch("".concat(BASE_URL).concat(endpoint), {
        next: {
            revalidate: 120
        },
        ...options
    });
    if (!res.ok) {
        console.error("❌ API Fetch Error:", res.status, endpoint);
        throw new Error("Failed to fetch ".concat(endpoint));
    }
    return res.json();
}
const happeningAPI = {
    getEvents: ()=>fetchData("/happenings"),
    getMedia: ()=>fetchData("/happenings/media"),
    getNotice: ()=>fetchData("/happenings/notice")
}; // --- 🔹 SCHOOL PAGE APIs ---
 // export const schoolAPI = {
 //   getAllSchools: () => fetchData("/schools"),
 //   getSchoolDetails: (slug) => fetchData(`/schools/${slug}`),
 // };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/news-events/NewsEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/news-events/news-events.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
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
function EventsSection() {
    var _data_data, _data_data1, _data_data2;
    _s();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "news-events"
        ],
        queryFn: {
            "EventsSection.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["happeningAPI"].getEvents()
        }["EventsSection.useQuery"],
        staleTime: 5 * 60 * 1000
    });
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    // const allEvents = [
    //   {
    //     id: 1,
    //     title: "Sed ut perspiciatis unde omnis iste natus error sit",
    //     date: "October 18, 2024",
    //     category: "Technology",
    //     type: "Event",
    //     month: "October",
    //     school: "Engineering",
    //     img: "/images/home-page/card-img.png",
    //     upcoming: true,
    //   },
    //   {
    //     id: 2,
    //     title: "Lorem ipsum dolor sit amet, consectet adipiscing elit.",
    //     date: "October 16, 2025",
    //     category: "Festival",
    //     month: "October",
    //     school: "Design",
    //     img: "/images/home-page/card-img.png",
    //     description:
    //       "Writing for The Conversation, Professor Hayley Fowler, Paul Davies, and Simon Lee discuss how the rapidly warming climate impacts creativity.",
    //   },
    //   {
    //     id: 3,
    //     title: "Business Today Codestorm 2.0",
    //     date: "October 10, 2024",
    //     category: "Business",
    //     month: "October",
    //     school: "Management",
    //     img: null,
    //     bgColor: "#B72833",
    //   },
    //   {
    //     id: 4,
    //     title: "dolor sit amet, consectetur adipiscing elit.",
    //     date: "July 10, 2024",
    //     category: "Education",
    //     month: "July",
    //     school: "Architecture",
    //     img: "/images/home-page/card-img.png",
    //   },
    //   {
    //     id: 5,
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     date: "July 20, 2024",
    //     category: "Education",
    //     month: "July",
    //     school: "Architecture",
    //     img: "/images/home-page/card-img.png",
    //   },
    //   {
    //     id: 6,
    //     title: "Annual Fest that celebrates everything JSS stands for",
    //     date: "August 18, 2024",
    //     category: "Cultural",
    //     month: "August",
    //     school: "Engineering",
    //     img: null,
    //     bgColor: "#002E6E",
    //   },
    //   {
    //     id: 7,
    //     title: "Sed ut perspiciatis unde omnis iste natus error sit.",
    //     date: "August 14, 2024",
    //     category: "Workshop",
    //     month: "August",
    //     school: "Robotics",
    //     img: "/images/home-page/card-img.png",
    //   },
    //   {
    //     id: 8,
    //     title: "Perspiciatis unde omnis iste natus error sit.",
    //     date: "August 14, 2024",
    //     category: "Workshop",
    //     month: "August",
    //     school: "Robotics",
    //     img: "/images/home-page/card-img.png",
    //   },
    // ];
    const upCommingEvents = (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.upcoming_events) || [];
    const secondryItem = (data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.first_event) || [];
    const allEvents = (data === null || data === void 0 ? void 0 : (_data_data2 = data.data) === null || _data_data2 === void 0 ? void 0 : _data_data2.other_events) || [];
    // const upCommingEvents = [
    //   {
    //     id: 1,
    //     title: "Techtonic Summit: Ideas That Shake The Future",
    //     date: "October 18, 2024",
    //     category: "Technology",
    //     month: "October",
    //     school: "Engineering",
    //     img: "/images/home-page/upcoming-banner.png",
    //     upcoming: true,
    //   },
    //   {
    //     id: 2,
    //     title: "Ideas That Shake The Future",
    //     date: "October 18, 2024",
    //     category: "Technology",
    //     month: "October",
    //     school: "Engineering",
    //     img: "/images/home-page/upcoming-banner.png",
    //     upcoming: true,
    //   },
    // ];
    // const upCommingEvents = apidata?.data?.upcoming_events || [];
    // const secondryItem = {
    //   id: 1,
    //   title: "SUMMER BEATS FESTIVAL 2025",
    //   desc: "Writing for The Conversation, Professor Hayley Fowler, Paul Davies and Dr Simon Lee discuss how the rapidly warming climate",
    //   date: "October 16, 2025",
    //   category: "Technology",
    //   month: "October",
    //   school: "Engineering",
    //   img: "/images/home-page/secondry-banner.png",
    //   // upcoming: true,
    // };
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: "All",
        month: "All",
        school: "All"
    });
    const months = [
        "All",
        "January",
        "July",
        "August",
        "October"
    ];
    const schools = [
        "All",
        "Engineering",
        "Design",
        "Management",
        "Architecture",
        "Robotics"
    ];
    const filteredEvents = allEvents.filter((event)=>{
        const byMonth = filters.month === "All" || event.month === filters.month;
        const bySchool = filters.school === "All" || event.school === filters.school;
        return byMonth && bySchool;
    });
    const handleFilter = (key, value)=>{
        setFilters((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            textAlign: "center",
            marginTop: "5rem"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuLoader"], {}, void 0, false, {
            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
            lineNumber: 180,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 179,
        columnNumber: 7
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error loading data"
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 183,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventsSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                        ],
                        navigation: {
                            nextEl: ".upcoming-next",
                            prevEl: ".upcoming-prev"
                        },
                        loop: true,
                        spaceBetween: 20,
                        slidesPerView: 1,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swiperContainer,
                        children: upCommingEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: event.banner_image,
                                            alt: event.title,
                                            layout: "responsive",
                                            width: 1200,
                                            height: 400,
                                            style: {
                                                width: "100%",
                                                height: "auto"
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerImage
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTextBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upcomingTag,
                                                children: event.event_type.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTitle,
                                                children: event.title.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerDate,
                                                children: formatDate(event.event_date_from)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "upcoming-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                                                            size: 8,
                                                            color: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "upcoming-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                            size: 8,
                                                            color: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, event.id, true, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-end gap-2 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filters),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select",
                                onChange: (e)=>handleFilter("month", e.target.value),
                                value: filters.month,
                                children: months.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: m
                                    }, m, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select",
                                onChange: (e)=>handleFilter("school", e.target.value),
                                value: filters.school,
                                children: schools.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row mt-5 w-100 m-auto ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondarySection),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryImageWrapper,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: secondryItem.banner_image,
                                alt: "Secondary Event",
                                layout: "responsive",
                                width: 700,
                                height: 400,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryImage
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventDate,
                                    children: formatDate(secondryItem.event_date_from)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventTitle,
                                    children: "SUMMER BEATS FESTIVAL 2025"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventDesc,
                                    children: "Writing for The Conversation, Professor Hayley Fowler and Simon Lee discuss how the rapidly warming climate influences creativity."
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    style: {
                                        color: "inherit"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsArrowRightCircle"], {
                                        fontSize: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row  w-100 m-auto ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsRow),
                children: filteredEvents.map((event, index)=>{
                    const darkColors = [
                        "#16344E",
                        "#B08F29",
                        "#00489A",
                        "#AF251C"
                    ];
                    const shuffledColors = [
                        ...darkColors
                    ].sort(()=>Math.random() - 0.5);
                    const bgColor = shuffledColors[index % 4];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-3 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            style: {
                                color: "inherit"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventCard, " ").concat(!event.banner_image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textOnlyCard : ""),
                                style: !event.banner_image ? {
                                    backgroundColor: event.bgColor || bgColor
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventType,
                                        children: event.img === null ? "Event" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, this),
                                    event.banner_image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: event.banner_image,
                                        alt: event.title,
                                        width: 400,
                                        height: 250,
                                        layout: "responsive",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 313,
                                        columnNumber: 21
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: event.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDate,
                                                children: formatDate(event.event_date_from)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 324,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 322,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 299,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                            lineNumber: 298,
                            columnNumber: 15
                        }, this)
                    }, event.id, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 297,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(EventsSection, "H6E2VcVImT7tlcFVuaVTshf6CbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = EventsSection;
var _c;
__turbopack_context__.k.register(_c, "EventsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/gallery/gallery.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/src/component/happening-components/gallery/Gallery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/gallery/gallery.module.css [app-client] (css module)");
;
;
function Gallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: "Gallery"
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/media-coverage/media-coverage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/src/component/happening-components/media-coverage/MediaCoverage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaCoverage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/media-coverage/media-coverage.module.css [app-client] (css module)");
;
;
function MediaCoverage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: "MediaCoverage"
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = MediaCoverage;
var _c;
__turbopack_context__.k.register(_c, "MediaCoverage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/notice-announcement/notice-announcement.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoticeAnnouncement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/notice-announcement/notice-announcement.module.css [app-client] (css module)");
;
;
function NoticeAnnouncement() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: "NoticeAnnouncement"
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = NoticeAnnouncement;
var _c;
__turbopack_context__.k.register(_c, "NoticeAnnouncement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/happenings/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Happenings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/happenings/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$NewsEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/news-events/NewsEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$Gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/gallery/Gallery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$MediaCoverage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/media-coverage/MediaCoverage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$NoticeAnnouncement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Happenings() {
    var _tabs_find;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("news");
    const tabs = [
        {
            id: "news",
            label: "News & Events",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$NewsEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "gallery",
            label: "Gallery",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$Gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "media",
            label: "Media Coverage",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$MediaCoverage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "press",
            label: "Press Release",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$NoticeAnnouncement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    ];
    const ActiveComponent = (_tabs_find = tabs.find((tab)=>tab.id === activeTab)) === null || _tabs_find === void 0 ? void 0 : _tabs_find.component;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].happeningsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].happeningsSubTitle, " text-center"),
                children: "HAPPENINGS"
            }, void 0, false, {
                fileName: "[project]/src/app/happenings/page.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].happeningsTitle, " "),
                children: "STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS"
            }, void 0, false, {
                fileName: "[project]/src/app/happenings/page.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabHeaders,
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === tab.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ""),
                        onClick: ()=>setActiveTab(tab.id),
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/src/app/happenings/page.js",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/happenings/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$happenings$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabContent,
                children: ActiveComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                    fileName: "[project]/src/app/happenings/page.js",
                    lineNumber: 43,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/happenings/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/happenings/page.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Happenings, "Qfj3ItBzgzUhAF7tRJKXnwi8Aic=");
_c = Happenings;
var _c;
__turbopack_context__.k.register(_c, "Happenings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d5dc5bb2._.js.map