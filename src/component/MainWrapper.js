"use client";

import { usePathname } from "next/navigation";

const getSlugClass = (pathname) => {
  if (!pathname) return "home";

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return "home";
  if (segments.length === 1) return segments[0];

  const first = segments[0];
  const last = segments[segments.length - 1];
  return `${first}-${last}`;
};

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const slugClass = getSlugClass(pathname);

  return <main className={`main-container ${slugClass}`}>{children}</main>;
}
