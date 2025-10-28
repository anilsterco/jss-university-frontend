// components/department-components/AboutDepartment/index.js
import styles from "./about-department.module.css";

export default function AboutDepartmentComponent() {
  // Dynamic data structure - can be fetched from API or props
  const departmentData = {
    title: "COMPUTER SCIENCE & ENGINEERING",
    subtitle: "ABOUT DEPARTMENT OF",
    description:
      "The CSE program equips students with a strong foundation in The CSE program equips students with a strong foundation in computer science principles, programming languages, algorithms, and data structures. Graduates are prepared for careers in software development, systems engineering, and various other IT fields.",
    stats: [
      {
        id: 1,
        value: "63+",
        label: "International journal papers",
      },
      {
        id: 2,
        value: "3K+",
        label: "Alumni Network",
      },
      {
        id: 3,
        value: "NBA",
        label: "National Board of Accreditation (NBA)",
        logo: true,
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
    imagePlaceholder: true,
  };

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
        <div className={`row g-4 ${styles.statsSection}`}>
          {departmentData.stats.map((stat, index) => (
            <div key={stat.id} className="col-md-4">
              <div
                className={`card h-100 border-0 ${styles.statCard} ${
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
                  {stat.logo ? (
                    <>
                      <div className={styles.nbaBadge}>
                        <div className={styles.nbaTitle}>NBA</div>
                        <div className={styles.nbaSubtitle}>
                          NATIONAL BOARD
                          <br />
                          OF ACCREDITATION
                        </div>
                      </div>
                      <p className={styles.nbaLabel}>{stat.label}</p>
                    </>
                  ) : (
                    <>
                      <h2 className={styles.statValue}>{stat.value}</h2>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision and Mission Section */}
        <div className={`row g-4 ${styles.contentSection}`}>
          {/* Image Placeholder */}
          <div className="col-md-6 px-0">
            <div className={`card border-0 h-100 ${styles.imagePlaceholder}`}>
              <div className={styles.placeholderIcon}>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className={styles.placeholderText}>IMAGE</p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className={`col-md-6 ${styles.visionMission}`}>
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
