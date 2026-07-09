"use client";
import styles from "./page.module.css";
import BlogsGrid from "@/component/blogs/Blogs";

export default function BlogsClient({ data, className, blogs }) {
  return (
    <div className={`${styles.happeningsContainer} ${styles[className]}`}>
      {data?.tabs?.subTitle && (
        <p className={`${styles.happeningsSubTitle} text-center`}>
          {data?.tabs?.subTitle}
        </p>
      )}
      {data?.tabs?.title && (
        <h1
          className={styles.happeningsTitle}
          dangerouslySetInnerHTML={{ __html: data.tabs.title }}
        />
      )}

      <div className={styles.tabContent}>
        <BlogsGrid className={className} blogs={blogs} />
      </div>
    </div>
  );
}