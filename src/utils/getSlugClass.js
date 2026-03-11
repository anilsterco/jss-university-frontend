export const getSlugClass = (pathname) => {
  if (!pathname) return "";
  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "home";
};
