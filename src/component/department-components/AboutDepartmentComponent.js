export default function AboutDeartmentComponent() {
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
        bgColor: "#2c3e50",
      },
      {
        id: 2,
        value: "3K+",
        label: "Alumni Network",
        bgColor: "#ffffff",
      },
      {
        id: 3,
        value: "NBA",
        label: "National Board of Accreditation (NBA)",
        logo: true,
        bgColor: "#e8f4f8",
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
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <p
            className=" mb-2"
            style={{ fontSize: "14px", letterSpacing: "1px", color: "#16344e" }}
          >
            {departmentData.subtitle}
          </p>
          <h1
            className="display-4 fw-bold mb-4 blue-text"
            style={{ fontSize: "48px" }}
          >
            {departmentData.title}
          </h1>
          <p className="lead mx-auto fw-normal" style={{ color: "#212121", fontSize: "16px" }}>
            {departmentData.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          {departmentData.stats.map((stat) => (
            <div key={stat.id} className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  backgroundColor: stat.bgColor,
                  color: stat.bgColor === "#2c3e50" ? "#ffffff" : "#333",
                }}
              >
                <div className="card-body text-center py-5">
                  {stat.logo ? (
                    <>
                      <div className="mb-3">
                        <div
                          className="d-inline-block px-4 py-2"
                          style={{
                            border: "3px solid #3498db",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <div
                            style={{
                              color: "#3498db",
                              fontSize: "24px",
                              fontWeight: "bold",
                            }}
                          >
                            NBA
                          </div>
                          <div
                            style={{
                              fontSize: "10px",
                              color: "#666",
                              marginTop: "5px",
                            }}
                          >
                            NATIONAL BOARD
                            <br />
                            OF ACCREDITATION
                          </div>
                        </div>
                      </div>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#666" }}
                      >
                        {stat.label}
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="display-3 fw-bold mb-3">{stat.value}</h2>
                      <p className="mb-0" style={{ fontSize: "16px" }}>
                        {stat.label}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision and Mission Section */}
        <div className="row g-4 mt-4">
          {/* Image Placeholder */}
          <div className="col-md-6 px-0">
            <div
              className="card border-0 h-100"
              style={{ backgroundColor: "#c4c4c4" }}
            >
              <div
                className="card-body d-flex align-items-center justify-content-center"
                style={{ minHeight: "400px" }}
              >
                <div className="text-center" style={{ color: "#999" }}>
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
                  <p
                    className="mt-3 mb-0"
                    style={{ fontSize: "18px", fontWeight: "500" }}
                  >
                    IMAGE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="col-md-6 ps-0 pt-5">
            <div className="h-100">
              {/* Vision */}
              <div className="mb-4 bg-white ps-5 py-4">
                <h3
                  className="mb-3 yellow-text"
                  style={{  fontWeight: "600", fontSize: "24px" }}
                >
                  {departmentData.vision.title}
                </h3>
                <p className="w-75" style={{ lineHeight: "1.8", fontSize: "16px", color: "#16344e", fontWeight: "600" }}>
                  {departmentData.vision.description}
                </p>
              </div>

              {/* Mission */}
              <div className="mt-5 ms-5">
                <h3
                  className="mb-3 yellow-text"
                  style={{ fontWeight: "600", fontSize: "24px" }}
                >
                  {departmentData.mission.title}
                </h3>
                <ul className="list-unstyled">
                  {departmentData.mission.points.map((point, index) => (
                    <li key={index} className="mb-3 d-flex">
                      <span className="me-2" style={{ color: "#f39c12" }}>
                        •
                      </span>
                      <span
                        className="text-muted"
                        style={{ lineHeight: "1.8" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </div>
  );
}
