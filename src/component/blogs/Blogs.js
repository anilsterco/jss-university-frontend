"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import styles from "./blogs.module.css";
import Pagination from "@/component/common/pagination-component/Pagination";

export default function BlogsGrid({ className, blogs }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const blogList = blogs?.blogs?.data || [];
  const currentPage = blogs?.blogs?.current_page || 1;
  const totalPages = blogs?.blogs?.last_page || 1;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.eventsSection}>
      <div className="container">
        {blogList.length > 0 ? (
          <>
            <div
              className={`events_row latest-event blogs_list_page m-auto ${styles.cardsRow}`}
            >
              {blogList.map((blog) => (
                <div key={blog.id} className="events_col">
                  <Link href={`/blogs/${blog.slug || blog.id}`} style={{ color: "inherit" }}>
                    <div className={styles.eventCard}>
                      {blog.image ? (
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={400}
                          height={250}
                          layout="responsive"
                          className={styles.eventImage}
                        />
                      ) : null}
                      <div className={styles.cardBody}>
                        <h5
                          className={styles.cardTitle}
                          dangerouslySetInnerHTML={{ __html: blog.title }}
                        />
                        {blog?.description && (
                          <p>{blog.description}</p>
                        )}
                        <p className={styles.cardDate}>{formatDate(blog.date)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              maxVisiblePages={5}
            />
          </>
        ) : (
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            No Result Found
          </div>
        )}
      </div>
    </section>
  );
}