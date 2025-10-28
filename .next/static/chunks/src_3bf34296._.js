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
  "filterItem": "news-events-module__WsP3GG__filterItem",
  "filters": "news-events-module__WsP3GG__filters",
  "resetFilterButton": "news-events-module__WsP3GG__resetFilterButton",
  "secondaryImageWrapper": "news-events-module__WsP3GG__secondaryImageWrapper",
  "secondarySection": "news-events-module__WsP3GG__secondarySection",
  "secondaryText": "news-events-module__WsP3GG__secondaryText",
  "textOnlyCard": "news-events-module__WsP3GG__textOnlyCard",
  "upcomingTag": "news-events-module__WsP3GG__upcomingTag",
});
}),
"[project]/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "happeningAPI",
    ()=>happeningAPI,
    "schoolListAPI",
    ()=>schoolListAPI
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
    getEvents: function() {
        let endpoint = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/happenings";
        return fetchData(endpoint);
    }
};
const schoolListAPI = {
    getSchoolList: function() {
        let endpoint = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/schools/all";
        return fetchData(endpoint);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/common/pagination-component/pagination.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "pagination-module__06BIta__active",
  "disabled": "pagination-module__06BIta__disabled",
  "pageItem": "pagination-module__06BIta__pageItem",
  "pageLink": "pagination-module__06BIta__pageLink",
  "pagination": "pagination-module__06BIta__pagination",
  "paginationContainer": "pagination-module__06BIta__paginationContainer",
});
}),
"[project]/src/component/common/pagination-component/Pagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/common/pagination-component/pagination.module.css [app-client] (css module)");
;
;
;
;
function Pagination(param) {
    let { currentPage, totalPages, onPageChange, maxVisiblePages = 5 } = param;
    // Generate array of page numbers to display
    const getPageNumbers = ()=>{
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        // Adjust start page if we're near the end
        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        for(let i = startPage; i <= endPage; i++){
            pages.push(i);
        }
        return pages;
    };
    const pageNumbers = getPageNumbers();
    const handlePageClick = (page)=>{
        if (page !== currentPage && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paginationContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Page navigation",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem, " ").concat(currentPage === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled : ""),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                            onClick: ()=>handlePageClick(currentPage - 1),
                            disabled: currentPage === 1,
                            "aria-label": "Previous",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronLeft"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    pageNumbers[0] > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                                    onClick: ()=>handlePageClick(1),
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            pageNumbers[0] > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                                    children: "..."
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                    lineNumber: 72,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    pageNumbers.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem, " ").concat(currentPage === page ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                                onClick: ()=>handlePageClick(page),
                                children: page
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, page, false, {
                            fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)),
                    pageNumbers[pageNumbers.length - 1] < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            pageNumbers[pageNumbers.length - 1] < totalPages - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                                    children: "..."
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                    lineNumber: 100,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                                    onClick: ()=>handlePageClick(totalPages),
                                    children: totalPages
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem, " ").concat(currentPage === totalPages ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled : ""),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageLink,
                            onClick: ()=>handlePageClick(currentPage + 1),
                            disabled: currentPage === totalPages,
                            "aria-label": "Next",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/common/pagination-component/Pagination.js",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/component/common/pagination-component/Pagination.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/common/pagination-component/Pagination.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/common/pagination-component/Pagination.js [app-client] (ecmascript)");
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
function EventsSection() {
    var _data_data, _data_data1, _data_data2, _data_data_pagination, _data_data3, _data_data_pagination1, _data_data4;
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        month: "",
        school: "",
        page: 1
    });
    const { data: schoolsList, isLoading: schoolsLoading, error: schoolsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "schools"
        ],
        queryFn: {
            "EventsSection.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schoolListAPI"].getSchoolList()
        }["EventsSection.useQuery"],
        staleTime: 10 * 60 * 1000
    });
    console.log(schoolsList, "schoolsList");
    // Use React Query with dynamic query key based on filters including page
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "news-events",
            filters.month,
            filters.school,
            filters.page
        ],
        queryFn: {
            "EventsSection.useQuery": ()=>{
                const queryParams = buildQueryParams();
                console.log(queryParams);
                const endpoint = "/happenings?".concat(queryParams);
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["happeningAPI"].getEvents(endpoint);
            }
        }["EventsSection.useQuery"],
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        keepPreviousData: true
    });
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    // Format month name to number (January -> 1, February -> 2, etc.)
    const formatMonthToNumber = (monthName)=>{
        const months = {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        };
        return months[monthName];
    };
    const schools = (schoolsList === null || schoolsList === void 0 ? void 0 : schoolsList.data) || [];
    const upCommingEvents = (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.upcoming_events) || [];
    const secondryItem = (data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.first_event) || null;
    const allEvents = (data === null || data === void 0 ? void 0 : (_data_data2 = data.data) === null || _data_data2 === void 0 ? void 0 : _data_data2.other_events) || [];
    // Get pagination data from API response
    const currentPage = (data === null || data === void 0 ? void 0 : (_data_data3 = data.data) === null || _data_data3 === void 0 ? void 0 : (_data_data_pagination = _data_data3.pagination) === null || _data_data_pagination === void 0 ? void 0 : _data_data_pagination.current_page) || filters.page;
    const totalPages = (data === null || data === void 0 ? void 0 : (_data_data4 = data.data) === null || _data_data4 === void 0 ? void 0 : (_data_data_pagination1 = _data_data4.pagination) === null || _data_data_pagination1 === void 0 ? void 0 : _data_data_pagination1.last_page) || 1;
    // Build query parameters based on filters
    const buildQueryParams = ()=>{
        const params = new URLSearchParams();
        // Always add page parameter
        params.append("page", filters.page);
        if (filters.month !== "") {
            const monthNumber = formatMonthToNumber(filters.month);
            params.append("month", monthNumber);
        }
        if (filters.school !== "") {
            const schoolId = getSchoolId(filters.school);
            params.append("school", schoolId);
        }
        return params.toString();
    };
    // Map school names to IDs
    const getSchoolId = (schoolName)=>{
        const school = schools.find((s)=>s.name === schoolName);
        return (school === null || school === void 0 ? void 0 : school.id) || null;
    };
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const handleFilter = (key, value)=>{
        setFilters((prev)=>({
                ...prev,
                [key]: value,
                // Reset to page 1 when changing filters
                ...key !== "page" && {
                    page: 1
                }
            }));
    };
    const handlePageChange = (page)=>{
        setFilters((prev)=>({
                ...prev,
                page
            }));
        // Scroll to top when page changes
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    if (isLoading && !data || schoolsLoading && !schoolsList) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            textAlign: "center",
            marginTop: "5rem"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuLoader"], {}, void 0, false, {
            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
            lineNumber: 146,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 145,
        columnNumber: 7
    }, this);
    if (error || schoolsError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Error loading data"
    }, void 0, false, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 149,
        columnNumber: 37
    }, this);
    console.log("setFilters", filters);
    const resetFilters = ()=>{
        setFilters({
            page: 1,
            month: "",
            school: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventsSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerWrapper,
                children: [
                    upCommingEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
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
                        children: upCommingEvents.map((event)=>{
                            var _event_event_type, _event_title;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
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
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTextBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upcomingTag,
                                                children: ((_event_event_type = event.event_type) === null || _event_event_type === void 0 ? void 0 : _event_event_type.toUpperCase()) || "EVENT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTitle,
                                                children: (_event_title = event.title) === null || _event_title === void 0 ? void 0 : _event_title.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerDate,
                                                children: formatDate(event.event_date_from)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 196,
                                                columnNumber: 19
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
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "upcoming-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                            size: 8,
                                                            color: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.id, true, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "4rem"
                        },
                        children: "No Upcoming Events"
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-end gap-2 ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filters),
                        children: [
                            filters.month !== "" || filters.school !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resetFilterButton,
                                onClick: resetFilters,
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        onChange: (e)=>handleFilter("month", e.target.value),
                                        value: filters.month,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                hidden: true,
                                                children: "Select Month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            months.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: m,
                                                    children: m
                                                }, m, false, {
                                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {}, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        onChange: (e)=>handleFilter("school", e.target.value),
                                        value: filters.school,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                hidden: true,
                                                children: "Select School"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this),
                                            schools.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s.name,
                                                    children: s.name
                                                }, s.id, false, {
                                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {}, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            secondryItem != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 265,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 263,
                        columnNumber: 11
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
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventTitle,
                                    children: secondryItem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventDesc,
                                    children: secondryItem.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 281,
                                    columnNumber: 15
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
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 262,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginTop: "5rem"
                },
                children: "No Result Found"
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 289,
                columnNumber: 9
            }, this),
            allEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row w-100 m-auto ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsRow),
                        children: allEvents.map((event, index)=>{
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
                                                children: !event.banner_image ? "Event" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 318,
                                                columnNumber: 23
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
                                                lineNumber: 322,
                                                columnNumber: 25
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 332,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$news$2d$events$2f$news$2d$events$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDate,
                                                        children: formatDate(event.event_date_from)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                        lineNumber: 333,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                                lineNumber: 331,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                        lineNumber: 308,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                    lineNumber: 307,
                                    columnNumber: 19
                                }, this)
                            }, event.id, false, {
                                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                                lineNumber: 306,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$common$2f$pagination$2d$component$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        currentPage: currentPage,
                        totalPages: totalPages,
                        onPageChange: handlePageChange,
                        maxVisiblePages: 5
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginTop: "5rem"
                },
                children: "No Result Found"
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
                lineNumber: 353,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/happening-components/news-events/NewsEvents.js",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(EventsSection, "VvFiC/zueczRV8gsXCWAd2vZ+HE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
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
  "bannerDate": "gallery-module__JUIRBG__bannerDate",
  "bannerImage": "gallery-module__JUIRBG__bannerImage",
  "bannerTextBox": "gallery-module__JUIRBG__bannerTextBox",
  "bannerTitle": "gallery-module__JUIRBG__bannerTitle",
  "bannerWrapper": "gallery-module__JUIRBG__bannerWrapper",
  "cardBadge": "gallery-module__JUIRBG__cardBadge",
  "cardContent": "gallery-module__JUIRBG__cardContent",
  "cardDate": "gallery-module__JUIRBG__cardDate",
  "cardImage": "gallery-module__JUIRBG__cardImage",
  "cardTitle": "gallery-module__JUIRBG__cardTitle",
  "closeButton": "gallery-module__JUIRBG__closeButton",
  "container": "gallery-module__JUIRBG__container",
  "eventCard": "gallery-module__JUIRBG__eventCard",
  "fadeIn": "gallery-module__JUIRBG__fadeIn",
  "filterBox": "gallery-module__JUIRBG__filterBox",
  "galleryCard": "gallery-module__JUIRBG__galleryCard",
  "galleryGrid": "gallery-module__JUIRBG__galleryGrid",
  "imageFilterButton": "gallery-module__JUIRBG__imageFilterButton",
  "imagePlaceholder": "gallery-module__JUIRBG__imagePlaceholder",
  "mediaContainer": "gallery-module__JUIRBG__mediaContainer",
  "mediaIframe": "gallery-module__JUIRBG__mediaIframe",
  "mediaImage": "gallery-module__JUIRBG__mediaImage",
  "mediaSection": "gallery-module__JUIRBG__mediaSection",
  "modal": "gallery-module__JUIRBG__modal",
  "modalContent": "gallery-module__JUIRBG__modalContent",
  "modalDate": "gallery-module__JUIRBG__modalDate",
  "modalHeader": "gallery-module__JUIRBG__modalHeader",
  "modalTitle": "gallery-module__JUIRBG__modalTitle",
  "slideCounter": "gallery-module__JUIRBG__slideCounter",
  "slideUp": "gallery-module__JUIRBG__slideUp",
  "slider": "gallery-module__JUIRBG__slider",
  "sliderArrow": "gallery-module__JUIRBG__sliderArrow",
  "sliderArrowLeft": "gallery-module__JUIRBG__sliderArrowLeft",
  "sliderArrowRight": "gallery-module__JUIRBG__sliderArrowRight",
  "thumbnail": "gallery-module__JUIRBG__thumbnail",
  "thumbnailActive": "gallery-module__JUIRBG__thumbnailActive",
  "thumbnailImage": "gallery-module__JUIRBG__thumbnailImage",
  "thumbnailVideo": "gallery-module__JUIRBG__thumbnailVideo",
  "thumbnails": "gallery-module__JUIRBG__thumbnails",
  "upcomingTag": "gallery-module__JUIRBG__upcomingTag",
  "videoFilterButton": "gallery-module__JUIRBG__videoFilterButton",
});
}),
"[project]/src/component/happening-components/gallery/Gallery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/gallery/gallery.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
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
function Gallery() {
    _s();
    const upCommingEvents = [
        {
            id: 1,
            title: "That Shake The Future",
            banner_image: "https://project-demo.in/jss/assets/img/happenings/banners/1760524600_68ef793871375.png",
            event_type: "Event",
            event_date_from: "2023-09-01"
        },
        {
            id: 2,
            title: "Future That Shake ",
            banner_image: "https://project-demo.in/jss/assets/img/happenings/banners/1760524600_68ef793871375.png",
            event_type: "Event",
            event_date_from: "2023-06-07"
        }
    ];
    const galleryData = [
        {
            id: 1,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 48,
                videos: 12
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 1"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    alt: "Gallery Video 1"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 2"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 3"
                }
            ]
        },
        {
            id: 2,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 32,
                videos: 8
            },
            thumbnail: "/images/home-page/fifth-section-banner.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 4"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 5"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    alt: "Gallery Video 2"
                }
            ]
        },
        {
            id: 3,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 56,
                videos: 15
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    alt: "Gallery Video 3"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 6"
                }
            ]
        },
        {
            id: 4,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 24,
                videos: 6
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 7"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 8"
                }
            ]
        },
        {
            id: 5,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 40,
                videos: 10
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 9"
                }
            ]
        },
        {
            id: 6,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 64,
                videos: 18
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    alt: "Gallery Video 4"
                }
            ]
        },
        {
            id: 7,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 36,
                videos: 9
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 10"
                }
            ]
        },
        {
            id: 8,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 28,
                videos: 7
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 11"
                }
            ]
        },
        {
            id: 9,
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            date: "February 12, 2018",
            stats: {
                photos: 52,
                videos: 14
            },
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 12"
                }
            ]
        }
    ];
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedGallery, setSelectedGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSlideIndex, setCurrentSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const openModal = (gallery)=>{
        setSelectedGallery(gallery);
        setCurrentSlideIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedGallery(null);
        setCurrentSlideIndex(0);
        document.body.style.overflow = "auto";
    };
    const nextSlide = ()=>{
        if (selectedGallery && currentSlideIndex < selectedGallery.media.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
            setCurrentSlideIndex(0);
        }
    };
    const previousSlide = ()=>{
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        } else {
            setCurrentSlideIndex(selectedGallery ? selectedGallery.media.length - 1 : 0);
        }
    };
    const goToSlide = (index)=>{
        setCurrentSlideIndex(index);
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerWrapper,
                children: [
                    upCommingEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
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
                        children: upCommingEvents.map((event)=>{
                            var _event_event_type, _event_title;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
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
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerImage
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTextBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upcomingTag,
                                                children: ((_event_event_type = event.event_type) === null || _event_event_type === void 0 ? void 0 : _event_event_type.toUpperCase()) || "EVENT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerTitle,
                                                children: (_event_title = event.title) === null || _event_title === void 0 ? void 0 : _event_title.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bannerDate,
                                                children: formatDate(event.event_date_from)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 328,
                                                columnNumber: 19
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
                                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                            lineNumber: 333,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "upcoming-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                                            size: 8,
                                                            color: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                            lineNumber: 336,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.id, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "4rem"
                        },
                        children: "No Upcoming Events"
                    }, void 0, false, {
                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageFilterButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiImageOn"], {
                                        fontSize: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    " Images"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoFilterButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiVideoCameraLight"], {
                                        fontSize: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    "Videos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                children: galleryData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryCard,
                        onClick: ()=>openModal(item),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.thumbnail,
                                            alt: "Gallery Thumbnail",
                                            layout: "responsive",
                                            width: 1200,
                                            height: 400,
                                            style: {
                                                width: "100%",
                                                height: "auto"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                        children: [
                                            item.stats.photos,
                                            " PHOTOS ",
                                            item.stats.videos,
                                            " VIDEOS"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDate,
                                        children: item.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                        lineNumber: 360,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            isModalOpen && selectedGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            onClick: closeModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaContainer,
                                children: selectedGallery.media[currentSlideIndex].type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaIframe,
                                    src: selectedGallery.media[currentSlideIndex].url,
                                    title: selectedGallery.media[currentSlideIndex].alt,
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                    lineNumber: 415,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaImage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selectedGallery.media[currentSlideIndex].url,
                                        alt: selectedGallery.media[currentSlideIndex].alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                        lineNumber: 425,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                    lineNumber: 424,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                            lineNumber: 411,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideCounter,
                                    children: [
                                        currentSlideIndex + 1,
                                        " / ",
                                        selectedGallery.media.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDate,
                                            children: selectedGallery.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                                            children: selectedGallery.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrow, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrowLeft),
                                            onClick: previousSlide,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15 18l-6-6 6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                    lineNumber: 456,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 448,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrow, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$gallery$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrowRight),
                                            onClick: nextSlide,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 18l6-6-6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                    lineNumber: 471,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                    lineNumber: 391,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
                lineNumber: 390,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/happening-components/gallery/Gallery.js",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(Gallery, "Ow3kS361867U7gniCC0qQCvOpgU=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/media-coverage/media-coverage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bannerDate": "media-coverage-module__dZP9Nq__bannerDate",
  "bannerImage": "media-coverage-module__dZP9Nq__bannerImage",
  "bannerTextBox": "media-coverage-module__dZP9Nq__bannerTextBox",
  "bannerTitle": "media-coverage-module__dZP9Nq__bannerTitle",
  "bannerWrapper": "media-coverage-module__dZP9Nq__bannerWrapper",
  "cardBadge": "media-coverage-module__dZP9Nq__cardBadge",
  "cardContent": "media-coverage-module__dZP9Nq__cardContent",
  "cardDate": "media-coverage-module__dZP9Nq__cardDate",
  "cardImage": "media-coverage-module__dZP9Nq__cardImage",
  "cardTitle": "media-coverage-module__dZP9Nq__cardTitle",
  "closeButton": "media-coverage-module__dZP9Nq__closeButton",
  "container": "media-coverage-module__dZP9Nq__container",
  "eventCard": "media-coverage-module__dZP9Nq__eventCard",
  "fadeIn": "media-coverage-module__dZP9Nq__fadeIn",
  "filterBox": "media-coverage-module__dZP9Nq__filterBox",
  "galleryCard": "media-coverage-module__dZP9Nq__galleryCard",
  "galleryGrid": "media-coverage-module__dZP9Nq__galleryGrid",
  "imageFilterButton": "media-coverage-module__dZP9Nq__imageFilterButton",
  "imagePlaceholder": "media-coverage-module__dZP9Nq__imagePlaceholder",
  "mediaContainer": "media-coverage-module__dZP9Nq__mediaContainer",
  "mediaIframe": "media-coverage-module__dZP9Nq__mediaIframe",
  "mediaImage": "media-coverage-module__dZP9Nq__mediaImage",
  "mediaSection": "media-coverage-module__dZP9Nq__mediaSection",
  "modal": "media-coverage-module__dZP9Nq__modal",
  "modalContent": "media-coverage-module__dZP9Nq__modalContent",
  "modalDate": "media-coverage-module__dZP9Nq__modalDate",
  "modalHeader": "media-coverage-module__dZP9Nq__modalHeader",
  "modalTitle": "media-coverage-module__dZP9Nq__modalTitle",
  "slideCounter": "media-coverage-module__dZP9Nq__slideCounter",
  "slideUp": "media-coverage-module__dZP9Nq__slideUp",
  "slider": "media-coverage-module__dZP9Nq__slider",
  "sliderArrow": "media-coverage-module__dZP9Nq__sliderArrow",
  "sliderArrowLeft": "media-coverage-module__dZP9Nq__sliderArrowLeft",
  "sliderArrowRight": "media-coverage-module__dZP9Nq__sliderArrowRight",
  "thumbnail": "media-coverage-module__dZP9Nq__thumbnail",
  "thumbnailActive": "media-coverage-module__dZP9Nq__thumbnailActive",
  "thumbnailImage": "media-coverage-module__dZP9Nq__thumbnailImage",
  "thumbnailVideo": "media-coverage-module__dZP9Nq__thumbnailVideo",
  "thumbnails": "media-coverage-module__dZP9Nq__thumbnails",
  "upcomingTag": "media-coverage-module__dZP9Nq__upcomingTag",
  "videoFilterButton": "media-coverage-module__dZP9Nq__videoFilterButton",
});
}),
"[project]/src/component/happening-components/media-coverage/MediaCoverage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaCoverage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/happening-components/media-coverage/media-coverage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MediaCoverage() {
    _s();
    const galleryData = [
        {
            id: 1,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 1"
                },
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 2"
                },
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 3"
                }
            ]
        },
        {
            id: 2,
            thumbnail: "/images/home-page/fifth-section-banner.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/fifth-section-banner.png",
                    alt: "Gallery Image 4"
                },
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 5"
                },
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 43"
                }
            ]
        },
        {
            id: 3,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 6"
                }
            ]
        },
        {
            id: 4,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 7"
                },
                {
                    type: "image",
                    url: "/images/home-page/gallary-popup-dummy-banner.png",
                    alt: "Gallery Image 8"
                }
            ]
        },
        {
            id: 5,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 9"
                }
            ]
        },
        {
            id: 6,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 9"
                }
            ]
        },
        {
            id: 7,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 10"
                }
            ]
        },
        {
            id: 8,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 11"
                }
            ]
        },
        {
            id: 9,
            thumbnail: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
            media: [
                {
                    type: "image",
                    url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
                    alt: "Gallery Image 12"
                }
            ]
        }
    ];
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedGallery, setSelectedGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSlideIndex, setCurrentSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const openModal = (gallery)=>{
        setSelectedGallery(gallery);
        setCurrentSlideIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedGallery(null);
        setCurrentSlideIndex(0);
        document.body.style.overflow = "auto";
    };
    const nextSlide = ()=>{
        if (selectedGallery && currentSlideIndex < selectedGallery.media.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
            setCurrentSlideIndex(0);
        }
    };
    const previousSlide = ()=>{
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        } else {
            setCurrentSlideIndex(selectedGallery ? selectedGallery.media.length - 1 : 0);
        }
    };
    const goToSlide = (index)=>{
        setCurrentSlideIndex(index);
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                children: galleryData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryCard,
                        onClick: ()=>openModal(item),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.thumbnail,
                                    alt: "Gallery Thumbnail",
                                    layout: "responsive",
                                    width: 1200,
                                    height: 400,
                                    style: {
                                        width: "100%",
                                        height: "auto"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            isModalOpen && selectedGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            onClick: closeModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaContainer,
                                children: selectedGallery.media[currentSlideIndex].type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaIframe,
                                    src: selectedGallery.media[currentSlideIndex].url,
                                    title: selectedGallery.media[currentSlideIndex].alt,
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 245,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mediaImage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selectedGallery.media[currentSlideIndex].url,
                                        alt: selectedGallery.media[currentSlideIndex].alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                        lineNumber: 255,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 254,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideCounter,
                                    children: [
                                        currentSlideIndex + 1,
                                        " / ",
                                        selectedGallery.media.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDate,
                                            children: selectedGallery.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                                            children: selectedGallery.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrow, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrowLeft),
                                            onClick: previousSlide,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M15 18l-6-6 6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrow, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$media$2d$coverage$2f$media$2d$coverage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderArrowRight),
                                            onClick: nextSlide,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 18l6-6-6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                                lineNumber: 293,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                    lineNumber: 221,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/happening-components/media-coverage/MediaCoverage.js",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(MediaCoverage, "Ow3kS361867U7gniCC0qQCvOpgU=");
_c = MediaCoverage;
var _c;
__turbopack_context__.k.register(_c, "MediaCoverage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/component/happening-components/notice-announcement/notice-announcement.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "notice-announcement-module__Nnl2Na__container",
  "documentContent": "notice-announcement-module__Nnl2Na__documentContent",
  "documentDate": "notice-announcement-module__Nnl2Na__documentDate",
  "documentItem": "notice-announcement-module__Nnl2Na__documentItem",
  "documentTitle": "notice-announcement-module__Nnl2Na__documentTitle",
  "documentsList": "notice-announcement-module__Nnl2Na__documentsList",
  "highlighted": "notice-announcement-module__Nnl2Na__highlighted",
  "leftBorder": "notice-announcement-module__Nnl2Na__leftBorder",
  "pdfIcon": "notice-announcement-module__Nnl2Na__pdfIcon",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function NoticeAnnouncement() {
    // Dynamic data structure - This will come from API in future
    const documentsData = [
        {
            id: 1,
            title: "UGC e-samadhan portal",
            date: "1 May 2023",
            pdfUrl: "/documents/dummy-pdf.pdf",
            isHighlighted: false
        },
        {
            id: 2,
            title: "https://www.gkudde.in/ is not the authorised website of GKU",
            date: "1 May 2023",
            pdfUrl: "/documents/dummy-pdf.pdf",
            isHighlighted: false
        },
        {
            id: 3,
            title: "GKU Journal of Multidisciplinary Research",
            date: "2 May 2023",
            pdfUrl: "/documents/dummy-pdf.pdf",
            isHighlighted: true
        },
        {
            id: 4,
            title: "UGC-DEB online programmes Application",
            date: "27 June 2023",
            pdfUrl: "/documents/dummy-pdf.pdf",
            isHighlighted: false
        },
        {
            id: 5,
            title: "Letter of recognition from UGC",
            date: "21 January 2024",
            pdfUrl: "/documents/dummy-pdf.pdf",
            isHighlighted: false
        }
    ];
    const handleDocumentClick = (pdfUrl)=>{
        // Open PDF in new tab
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentsList,
                    children: documentsData.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentItem, " "),
                            onClick: ()=>handleDocumentClick(doc.pdfUrl),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftBorder
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentTitle,
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentDate,
                                            children: doc.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$happening$2d$components$2f$notice$2d$announcement$2f$notice$2d$announcement$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pdfIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAdobeacrobatreader"], {
                                        color: "#e74c3c",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, doc.id, true, {
                            fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/happening-components/notice-announcement/NoticeAnnouncement.js",
        lineNumber: 51,
        columnNumber: 5
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

//# sourceMappingURL=src_3bf34296._.js.map