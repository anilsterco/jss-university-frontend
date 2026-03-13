"use client";

import { usePathname } from "next/navigation";

const getSlugClass = (pathname, typeOnly) => {
  if (!pathname) return "home";

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return "home";
  if (segments.length === 1) return segments[0];

  const first = segments[0];
  const last = segments[segments.length - 1];

  return typeOnly == "true"
    ? `${first}-${last} ${first}-page`
    : `${first}-${last}`;
};

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  // const slugClass = getSlugClass(pathname);
  const typeClass = getSlugClass(pathname, "true");

  return <main className={`main-container ${typeClass}`}>{children}</main>;
}
