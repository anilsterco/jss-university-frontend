import styles from "./courses-offered.module.css";
import Image from "next/image";
import Link from "next/link";
const CoursesOffered = ({ data }) => {
  // Dynamic data structure
  const dummyCoursesData = {
    subtitle: "COURSES OFFERED",
    title: `<span class="dark-blue-text">AT JSS THE</span><span class="blue-text">EMPHASIS IS ON YOU</span>`,
    image: "/images/home-page/seven-dummy-img.png",
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
    admission_bar: {
      links: [
        { title: "Scholarships Criteria & Success", url: "#1" },
        { title: "Student Cells Activities Coverage", url: "#2" },
        { title: "Recruitment Vacancies Internships", url: "#3" },
      ],
      download_button: "#",
      apply_button: "/apply",
    },
  };

  const coursesData = data ? data : dummyCoursesData;

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <p className={styles.subtitle}>{coursesData.subtitle}</p>
        <h2
          className={`${styles.title}`}
          dangerouslySetInnerHTML={{ __html: coursesData.title }}
        ></h2>
      </div>

      {/* Main Content Grid */}
      <div className="row g-4 position-relative w-100 m-100">
        {/* Image Placeholder */}
        <div className="col-lg-5">
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderContent}>
              <Image
                src={coursesData.image}
                alt="Image Placeholder"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                priority
              />
            </div>

            {/* Admission Bar overlapping image */}
            <div className={styles.admission_bar}>
              <div className={styles.admissionContent}>
                <span className={styles.admissionTitle}>Admission 2025-26</span>
                <div className={styles.admissionLinks}>
                  {coursesData.admission_bar.links.map((link, index) => (
                    <div key={index}>
                      <Link href={link.url} key={index}>
                        <span className={styles.admissionLink}>
                          {link.text}
                        </span>
                        {index < coursesData.admission_bar.links.length - 1 && (
                          <span className={styles.separator}>•</span>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className={styles.admissionButtons}>
                  <Link
                    // href={coursesData.admission_bar.download_button}
                    href={"#"}
                    className={styles.downloadBtn}
                  >
                    DOWNLOAD BROCHURE
                  </Link>
                  <Link
                    href={coursesData.admission_bar.apply_button}
                    className={styles.applyBtn}
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Cards */}
        <div className="col-lg-7">
          <div className={styles.coursesGrid}>
            {coursesData.courses &&
              coursesData.courses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <div className={styles.courseCardContent}>
                    <span className={styles.courseCategory}>
                      {course.category}
                    </span>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    {course.link && (
                      <Link href={course.link} className={styles.courseLink}>
                        Apply Now
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
                      </Link>
                    )}
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
