// ✅ CENTRALIZED API FILE
// All your API logic — Home, SchoolPage, DepartmentPage — in one place

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://project-demo.in/jss/api";

// --- Generic fetch function with SSR caching ---
async function fetchData(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 120 }, // cache for 2 mins, change as needed
    ...options,
  });

  if (!res.ok) {
    console.error("❌ API Fetch Error:", res.status, endpoint);
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

// --- 🔹 HOME PAGE APIs ---
export const happeningAPI = {
  getEvents: () => fetchData("/happenings"),
  getMedia: () => fetchData("/happenings/media"),
  getNotice: () => fetchData("/happenings/notice"),
};

// --- 🔹 SCHOOL PAGE APIs ---
// export const schoolAPI = {
//   getAllSchools: () => fetchData("/schools"),
//   getSchoolDetails: (slug) => fetchData(`/schools/${slug}`),
// };


