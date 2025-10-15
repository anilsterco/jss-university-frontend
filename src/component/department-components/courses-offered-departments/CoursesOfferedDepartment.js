import styles from "./courses-offered.module.css";
import Image from "next/image";
import Link from "next/link";
const CoursesOffered = () => {
  // Dynamic data structure
  const coursesData = {
    subtitle: "COURSES OFFERED",
    title: "AT JSS THE EMPHASIS IS ON YOU",
    imagePlaceholder: true,
    img: "/images/home-page/seven-dummy-img.png",
    // img: "/images/home-page/third-section-banner.png",
    courses: [
      {
        id: 1,
        category: "B.TECH IN",
        title: "CSE-AIML",
        link: "Apply Now",
      },
      {
        id: 2,
        category: "B.TECH IN",
        title: "Computer Science and Engineering",
        link: "Apply Now",
      },
      {
        id: 3,
        category: "B.TECH IN",
        title: "CSE with a specialization in Data Science (CSE-DS)",
        link: "Apply Now",
      },
    ],
    admissionBar: {
      title: "Admission 2025-26",
      links: [
        { title: "Scholarships Criteria & Success", url: "#1" },
        { title: "Student Cells Activities Coverage", url: "#2" },
        { title: "Recruitment Vacancies Internships", url: "#3" },
      ],
      downloadButton: "DOWNLOAD BROCHURE",
      applyButton: "APPLY NOW",
    },
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <p className={styles.subtitle}>{coursesData.subtitle}</p>
        <h2 className={`${styles.title} highlighted-title`}>
          {coursesData.title}
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="row g-4 position-relative w-100 m-100">
        {/* Image Placeholder */}
        <div className="col-lg-5">
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderContent}>
              <Image
                src={coursesData.img}
                alt="Image Placeholder"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                priority
              />
            </div>

            {/* Admission Bar overlapping image */}
            <div className={styles.admissionBar}>
              <div className={styles.admissionContent}>
                <span className={styles.admissionTitle}>
                  {coursesData.admissionBar.title}
                </span>
                <div className={styles.admissionLinks}>
                  {coursesData.admissionBar.links.map((link, index) => (
                    <div key={index}>
                      <Link href={link.url} key={index}>
                        <span className={styles.admissionLink}>{link.title}</span>
                        {index < coursesData.admissionBar.links.length - 1 && (
                          <span className={styles.separator}>•</span>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className={styles.admissionButtons}>
                  <button className={styles.downloadBtn}>
                    {coursesData.admissionBar.downloadButton}
                  </button>
                  <button className={styles.applyBtn}>
                    {coursesData.admissionBar.applyButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Cards */}
        <div className="col-lg-7">
          <div className={styles.coursesGrid}>
            {coursesData.courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseCardContent}>
                  <span className={styles.courseCategory}>
                    {course.category}
                  </span>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <a href="#" className={styles.courseLink}>
                    {course.link}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesOffered;
