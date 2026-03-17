"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tabsContent.css";

// ─── Tab → API + column config ───────────────────────────────────────────────
const TAB_CONFIG = {
  Patent: {
    endpoint: "patents",
    columns: [
      { label: "Patent Application No.", key: "patent_application_no" },
      { label: "Patent Status", key: "patent_status" },
      { label: "Inventor Name", key: "inventor_name" },
      { label: "Patent Title", key: "patent_title" },
      { label: "Applicant Name", key: "applicant_name" },
      { label: "Patent Filed Date", key: "patent_filed_date" },
      { label: "Patent Published Date", key: "patent_published_date" },
      { label: "Publication Number", key: "patent_publication_number" },
      { label: "Assignee Name", key: "assignee_name" },
      { label: "Source Proof", key: "source_proof" },
    ],
  },
  Publication: {
    endpoint: "journals", // adjust if Publication has its own endpoint
    columns: [
      { label: "Title", key: "title" },
      { label: "Authors", key: "authors" },
      { label: "Journal Name", key: "journal_name" },
      { label: "Volume", key: "volume" },
      { label: "Issue", key: "issue" },
      { label: "Year", key: "year" },
      { label: "DOI", key: "doi" },
    ],
  },
  Conferences: {
    endpoint: "conferences",
    columns: [
      { label: "Author Name", key: "author_name" },
      { label: "Paper Title", key: "paper_title" },
      { label: "Conference Name", key: "conference_name" },
      { label: "Conference Month", key: "conference_month" },
      { label: "Conference Venue", key: "conference_venue" },
      { label: "Impact Factor", key: "impact_factor" },
      { label: "WOS Indexed", key: "wos_indexed" },
      { label: "Scopus Indexed", key: "scopus_indexed" },
    ],
  },
  "Projects Submitted": {
    endpoint: "projects-submitted",
    columns: [
      { label: "Project Title", key: "project_title" },
      { label: "Investigator Names", key: "investigator_names" },
      { label: "Funding Agency", key: "funding_agency" },
      { label: "Amount (Rs.)", key: "amount_rs" },
    ],
  },
  Journals: {
    endpoint: "journals",
    columns: [
      { label: "Author Name", key: "author_name" },
      { label: "Paper Title", key: "paper_title" },
      { label: "Journal Name", key: "journal_name" },
      { label: "Publisher", key: "publisher" },
      { label: "ISSN Number", key: "issn_number" },
      { label: "Volume Issue Pages", key: "volume_issue_pages" },
      { label: "Publication Date", key: "publication_date_str" },
      { label: "Impact Factor", key: "impact_factor" },
      { label: "Sci/Scie Indexed", key: "sci_scie_indexed" },
      { label: "Scopus Indexed", key: "scopus_indexed" },
      { label: "WOS Indexed", key: "wos_indexed" },
      { label: "DOI", key: "doi" },
      { label: "URL", key: "url" },
    ],
  },
  "Projects Sanctioned": {
    endpoint: "projects-sanctioned",
    columns: [
      { label: "Scheme", key: "scheme" },
      { label: "Proposals Sanctioned", key: "proposals_sanctioned" },
      { label: "Submitted Date", key: "submitted_date" },
      { label: "Sanctioned Date", key: "sanctioned_date" },
      { label: "Investigator Names", key: "investigator_names" },
      { label: "Project Title", key: "project_title" },
      { label: "Funding Agency", key: "funding_agency" },
      { label: "Amount (Rs.)", key: "amount" },
    ],
  },
};

const BASE_URL = "https://project-demo.in/jss/api/research";

// ─── Component ────────────────────────────────────────────────────────────────
const TabsContent = ({ item }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const activeTabName = item?.tabsGroup?.[activeTab]?.tabName ?? "";
  const activeData = item?.tabsGroup?.[activeTab];
  const tabConfig = TAB_CONFIG[activeTabName];

  // Init AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // Reset to page 1 whenever the tab changes
  useEffect(() => {
    setCurrentPage(1);
    setTableData([]);
    setTotalPages(1);
  }, [activeTab]);

  // Fetch data whenever tab or page changes
  useEffect(() => {
    if (!tabConfig?.endpoint) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/${tabConfig.endpoint}?page=${currentPage}`,
        );
        const data = await res.json();
        setTableData(data);

        if (data?.total && data?.per_page) {
          setTotalPages(Math.ceil(data.total / data.per_page));
        } else if (data?.last_page) {
          setTotalPages(data.last_page);
        } else {
          setTotalPages(1);
        }
      } catch {
        setTableData([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, currentPage, tabConfig?.endpoint]);

  // ── Pagination helpers ──────────────────────────────────────────────────────
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (rangeStart > 2) pages.push("...");
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    document
      .querySelector(".table_section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTabChange = (idx) => {
    setActiveTab(idx);
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section className="tabs_content_section">
      <div className="container">
        {/* Tab Navigation */}
        <ul className="tabs_group">
          {item?.tabsGroup?.map((tabItem, tabIdx) => (
            <li
              key={tabIdx}
              className={`tabs_item ${activeTab === tabIdx ? "active" : ""}`}
              onClick={() => handleTabChange(tabIdx)}
            >
              {tabItem.tabName}
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        {activeData && (
          <div className="tabs_content">
            {activeData.title && (
              <h2 className="tabs_content_title">{activeData.title}</h2>
            )}
            {activeData.listGroup?.length > 0 && (
              <ul className="tabs_list">
                {activeData.listGroup.map((listItem, listIdx) => (
                  <li key={listIdx} className="tabs_list_item">
                    {listItem.list}
                  </li>
                ))}
              </ul>
            )}

            {/* Table (only when a config exists for this tab) */}
            {tabConfig && (
              <div className="table_section">
                <div className="table-responsive">
                  <table className="table-lab table table-bordered">
                    <thead>
                      <tr>
                        {tabConfig.columns.map((col) => (
                          <th key={col.key}>{col.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td
                            colSpan={tabConfig.columns.length}
                            style={{ textAlign: "center", padding: "20px" }}
                          >
                            Loading...
                          </td>
                        </tr>
                      ) : tableData?.data?.length > 0 ? (
                        tableData.data.map((row, rowIdx) => (
                          <tr key={rowIdx}>
                            {tabConfig.columns.map((col) => (
                              <td key={col.key}>{row[col.key] ?? "—"}</td>
                            ))}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={tabConfig.columns.length}
                            style={{ textAlign: "center", padding: "20px" }}
                          >
                            No records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination_wrapper">
                    <button
                      className={`pagination_btn pagination_prev ${currentPage === 1 ? "disabled" : ""}`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &lsaquo; Prev
                    </button>

                    <ul className="pagination_list">
                      {getPageNumbers().map((page, idx) =>
                        page === "..." ? (
                          <li
                            key={`ellipsis-${idx}`}
                            className="pagination_ellipsis"
                          >
                            &hellip;
                          </li>
                        ) : (
                          <li key={page}>
                            <button
                              className={`pagination_btn ${currentPage === page ? "active" : ""}`}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </button>
                          </li>
                        ),
                      )}
                    </ul>

                    <button
                      className={`pagination_btn pagination_next ${currentPage === totalPages ? "disabled" : ""}`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next &rsaquo;
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsContent;
