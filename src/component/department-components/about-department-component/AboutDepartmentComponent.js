// components/department-components/AboutDepartment/index.js
import styles from "./about-department.module.css";
import Image from "next/image";

export default function AboutDepartmentComponent({ data }) {
  // Dynamic data structure - can be fetched from API or props
  const dummyCoursesData = {
    title: "COMPUTER SCIENCE & ENGINEERING",
    subtitle: "ABOUT DEPARTMENT OF",
    description:
      "The CSE program equips students with a strong foundation in The CSE program equips students with a strong foundation in computer science principles, programming languages, algorithms, and data structures. Graduates are prepared for careers in software development, systems engineering, and various other IT fields.",
    stats: [
      {
        id: 1,
        value: "63+",
        label: "International journal papers",
        logo: "",
      },
      {
        id: 2,
        value: "3K+",
        label: "Alumni Network",
        logo: "",
      },
      {
        id: 3,
        value: "",
        label: "National Board of Accreditation (NBA)",
        logo: "https://project-demo.in/jss/assets/img/facts/1762853705_6913034925b8c.png",
      },
    ],
    vision: {
      title: "Vision",
      description:
        "To spark the imagination of the Computer Science Engineers with values, skills and creativity to solve the real world problems.",
    },
    mission: {
      title: "Mission",
      points: [
        "To inculcate creative thinking and problem solving skills through effective teaching, learning and research.",
        "To empower professionals with core competency in the field of Computer Science and Engineering.",
        "To foster independent and lifelong learning with ethical and social responsibilities.",
      ],
    },
    image:
      "https://project-demo.in/jss/assets/img/departments/1762856534_69130e56601ae.png",
  };

  const departmentData = data ? data : dummyCoursesData;

  return (
    <div className={`container-fluid ${styles.aboutDepartment}`}>
      <div className="container">
        {/* Header Section */}
        <div className={styles.header}>
          <p className={styles.subtitle}>{departmentData.subtitle}</p>
          <h1 className={`blue-text ${styles.title}`}>
            {departmentData.title}
          </h1>
          <p className={styles.description}>{departmentData.description}</p>
        </div>

        {/* Stats Section */}
        <div className={` ${styles.statsSection}`}>
          {departmentData.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`card h-100  ${styles.statCard} ${
                index === 0
                  ? styles.onecard
                  : index === 1
                  ? styles.twocard
                  : index === 2
                  ? styles.threecard
                  : ""
              }`}
            >
              <div className={styles.statCardBody}>
                {stat.logo && (
                  <Image
                    src={stat.logo}
                    alt="Image Placeholder"
                    width={120}
                    height={90}
                    priority
                  />
                )}
                <h2 className={styles.statValue}>{stat.value}</h2>

                <p className={styles.nbaLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision and Mission Section */}
        <div className={`row g-4 ${styles.contentSection}`}>
          {/* Image Placeholder */}
          <div className="col-md-6 px-0">
            <div className={`card border-0 h-100 ${styles.imagePlaceholder}`}>
              <Image
                src={departmentData.image}
                alt="Image Placeholder"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%" }}
                priority
              />
            </div>
          </div>

          {/* Vision and Mission */}
          <div className={`col-md-6 ps-0 pt-5 ${styles.visionMission}`}>
            <div className="h-100">
              {/* Vision */}
              <div className={styles.visionCard}>
                <h3 className={styles.visionTitle}>
                  {departmentData.vision.title}
                </h3>
                <p className={styles.visionDescription}>
                  {departmentData.vision.description}
                </p>
              </div>

              {/* Mission */}
              <div className={styles.missionSection}>
                <h3 className={styles.missionTitle}>
                  {departmentData.mission.title}
                </h3>
                <ul className={styles.missionList}>
                  {departmentData.mission.points.map((point, index) => (
                    <li key={index} className={styles.missionItem}>
                      <span className={styles.missionBullet}>•</span>
                      <span className={styles.missionText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
