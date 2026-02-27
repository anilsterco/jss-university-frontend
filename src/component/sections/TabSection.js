"use client";

export default function TabSection({ title, subtitle, uniqueCategories, pageType, activeTab, setActiveTab }) {

  return (
    <section className={`inner-title ${pageType === 'faculty' ? 'faculty_tabs' : ''}`}>
      <div className="container">
        <div className="innnr_head text-center">
          {subtitle && <h2>{subtitle}</h2>}
          {title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>}

          {uniqueCategories.length > 1 && (
            <ul>
              {uniqueCategories.map((category, i) => (
                <li
                  key={i}
                  className={category === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}