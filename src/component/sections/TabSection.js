"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabSection({ title, subtitle, tabs }) {
  const pathname = usePathname();

  // Extract the last segment of the current path as the slug
  const currentSlug = pathname.split("/").filter(Boolean).pop();

  const isActive = (tab) => {
    const tabSlug = tab.url.split("/").filter(Boolean).pop();
    const textSlug = tab.text.toLowerCase().replace(/\s+/g, "-");
    return currentSlug === tabSlug || currentSlug === textSlug;
  };

  return (
    <section className="inner-title">
      <div className="container">
        <div className="innnr_head text-center">
          <h2>{subtitle}</h2>

          <h3 dangerouslySetInnerHTML={{ __html: title }} />

          {tabs.length > 1 && (
            <ul>
              {tabs.map((tab, i) => (
                <li key={i} className={isActive(tab) ? "active" : ""}>
                  {tab.url != "/jss-step" ? (
                    <Link href={tab.url}>{tab.text}</Link>
                  ) : (
                    <Link href="https://www.jssstepnoida.org/" target="_blank">{tab.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
