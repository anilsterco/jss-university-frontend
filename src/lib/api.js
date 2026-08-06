import { BASE_URL } from "@/config/config.mjs";

// --- Generic fetch function with SSR caching ---
async function fetchData(endpoint, options = {}) {
  const isDev = process.env.NODE_ENV === 'development';

  const res = await fetch(`${BASE_URL}${endpoint}`, isDev ? {
    cache:"no-store"
  } : {
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
  getEvents: (endpoint = "happenings") => fetchData(endpoint),
};
export const schoolListAPI = {
  getSchoolList: (endpoint = "schools/all") => fetchData(endpoint),
};
export const galleryAPI = {
  getGallery: (endpoint) =>
    fetch(`${BASE_URL}${endpoint}`).then((res) => res.json()),
};
