// SearchClient.js
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

async function fetchSearchResults(query) {
  try {
    const response = await fetch(
      `${BASE_URL}search?q=${encodeURIComponent(query)}`,
      { cache: "no-store" },
    );
    if (!response.ok) return [];
    const data = await response.json(); // ✅ was missing await
    return data.data || [];
  } catch (err) {
    console.error("Search fetch error:", err);
    return [];
  }
}

export default async function SearchClient({ query }) {
  const results = query ? await fetchSearchResults(query) : [];

  return (
    <main className="site_main">
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>Search</h2>
                <h3>
                  Shaping Excellence with
                  <span> Modern Learning Spaces</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="search_listing_section">
        <div className="container">
          {/* ✅ Dynamic heading with real query and count */}
          <h2 className="search-heading">
            Search Results for : {query} ({results.length})
          </h2>

          {results.length === 0 ? (
            <p className="no-results">
              {query
                ? `No results found for "${query}".`
                : "Enter a search term to get results."}
            </p>
          ) : (
            <ul className="results-list">
              {results.map(
                (
                  item,
                  idx, // ✅ dynamic results from API
                ) => (
                  <li key={idx} className="result-item">
                    <Link href={`${item.url}`} className="result_link">
                      <span className="result-title">{item.title}</span>
                      <div className="result-arrow">
                        <FaChevronRight />
                      </div>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
