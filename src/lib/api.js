// lib/api.js
const API_BASE = "http://sd7:8080/jss/api";

// Simple fetch function
async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      cache: "no-store",
    });

    if (res.status !== 200) {
      return {
        status: res.status,
        error: `API returned status ${res.status}`,
        data: null,
      };
    }

    const data = await res.json();
    return {
      status: res.status,
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(`API Error ${endpoint}:`, error);
  }
}

// Homepage APIs
export const Api = {
  getHomeBanners: () => fetchAPI("/homepage/banners"),
  //   getCourses: () => fetchAPI('/homepage/courses'),
  //   getPlacements: () => fetchAPI('/homepage/placements'),
  //   getFacilities: () => fetchAPI('/homepage/facilities'),
  //   getAbout: () => fetchAPI('/homepage/about'),
  //   getTestimonials: () => fetchAPI('/homepage/testimonials'),
  //   getHappenings: () => fetchAPI('/homepage/happenings'),
};
