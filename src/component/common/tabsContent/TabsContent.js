"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tabsContent.css";
import { BASE_URL } from "@/config/config";
import { usePathname } from "next/navigation";

const TAB_CONFIG = [
  {
    tabName: "Patents",
    endpoint: "patents",
    columns: [
      { label: "Serial No.", key: "serial_no" },
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
  {
    tabName: "Conferences",
    endpoint: "conferences",
    columns: [
      { label: "Serial No.", key: "serial_no" },
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
  {
    tabName: "Journals",
    endpoint: "journals",
    columns: [
      { label: "Serial No.", key: "serial_no" },
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
  {
    tabName: "Projects Submitted",
    endpoint: "projects-submitted",
    columns: [
      { label: "Serial No.", key: "serial_no" },
      { label: "Project Title", key: "project_title" },
      { label: "Investigator Names", key: "investigator_names" },
      { label: "Funding Agency", key: "funding_agency" },
      { label: "Amount (Rs.)", key: "amount_rs" },
    ],
  },
  {
    tabName: "Projects Sanctioned",
    endpoint: "projects-sanctioned",
    columns: [
      { label: "Serial No.", key: "serial_no" },
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
];

const TabsContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [departmentShortName, setDepartmentShortName] = useState(null);

  // Track whether ALL tabs are empty
  const [allTabsEmpty, setAllTabsEmpty] = useState(false);
  const [checkingAllTabs, setCheckingAllTabs] = useState(true);

  const pathname = usePathname();
  const path = pathname.split("/").filter(Boolean);

  const activeTabConfig = TAB_CONFIG[activeTab];

  const getDepartmentShortName = async () => {
    try {
      const response = await fetch(`${BASE_URL}department/${path[1]}`);
      if (!response.ok) throw new Error("Failed to fetch department");
      const data = await response.json();
      return data?.departments_short_name ?? null;
    } catch {
      return null;
    }
  };

  // On mount: check all tabs in parallel — if every one has 0 records, hide everything
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const checkAllTabs = async () => {
      setCheckingAllTabs(true);
      try {
        const deptShortName = await getDepartmentShortName();
        setDepartmentShortName(deptShortName);

        const results = await Promise.all(
          TAB_CONFIG.map((tab) =>
            fetch(
              `${BASE_URL}research/${tab.endpoint}?page=1&department=${deptShortName}`,
            )
              .then((r) => r.json())
              .then((d) => (Array.isArray(d?.data) ? d.data.length : 0))
              .catch(() => 0),
          ),
        );

        const isEmpty = results.every((count) => count === 0);
        setAllTabsEmpty(isEmpty);
      } catch {
        setAllTabsEmpty(false);
      } finally {
        setCheckingAllTabs(false);
      }
    };

    checkAllTabs();
  }, []);

  // Reset to page 1 whenever the tab changes
  useEffect(() => {
    setCurrentPage(1);
    setTableData([]);
    setTotalPages(1);
  }, [activeTab]);

  // Fetch data for the active tab
  useEffect(() => {
    if (!activeTabConfig?.endpoint || !departmentShortName) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}research/${activeTabConfig.endpoint}?page=${currentPage}&department=${departmentShortName}`,
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
  }, [activeTab, currentPage, departmentShortName]);

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

  // Still fetching all-tabs check — render nothing
  if (checkingAllTabs) return null;

  // Every tab is empty — hide the entire section
  if (allTabsEmpty) return null;

  return (
    <section className="tabs_content_section">
      <div className="container">
        <ul className="tabs_group">
          {TAB_CONFIG.map((tab, tabIdx) => (
            <li
              key={tabIdx}
              className={`tabs_item ${activeTab === tabIdx ? "active" : ""}`}
              onClick={() => handleTabChange(tabIdx)}
            >
              {tab.tabName}
            </li>
          ))}
        </ul>

        {activeTabConfig && (
          <div className="tabs_content">
            <div className="table_section">
              <div className="table-responsive ed_schol_list">
                <table className="table-lab table table-bordered">
                  <thead>
                    <tr>
                      {activeTabConfig.columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td
                          colSpan={activeTabConfig.columns.length}
                          style={{ textAlign: "center", padding: "20px" }}
                        >
                          Loading...
                        </td>
                      </tr>
                    ) : tableData?.data?.length > 0 ? (
                      tableData.data.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {activeTabConfig.columns.map((col) => (
                            <td key={col.key}>{row[col.key] ?? "—"}</td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={activeTabConfig.columns.length}
                          style={{ textAlign: "center", padding: "20px" }}
                        >
                          No records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

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
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsContent;
