import React from "react";

export default function AccordionTable({ data, heading }) {
  const sortedData = data
    ? [...data].sort((a, b) => {
        const aVal = Number(a?.tableDatas?.[0]?.tableData);
        const bVal = Number(b?.tableDatas?.[0]?.tableData);
        if (isNaN(aVal) || isNaN(bVal)) return 0;
        return aVal - bVal;
      })
    : [];

  return (
    <>
      <div className="faqList">
        <details className="faqItem">
          <summary className="faqQuestion">
            <span className="faq_heading">{data?.[0]?.heading}</span>
            <span className="icon"></span>
          </summary>
          <div className="faqAnswer">
            <div className="table_section">
              <div className="table-responsive">
                <table className="table-lab table table-bordered">
                  <thead>
                    <tr>
                      {data?.[0]?.tableHeadings?.map((th, thIndex) => (
                        <th key={thIndex}>{th.tableHeading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((singleData, singleIdx) => {
                      if (!singleData?.tableDatas?.length) return null;

                      return (
                        <tr key={singleIdx}>
                          {singleData.tableDatas.map((tableItem, tableIdx) => (
                            <td key={tableIdx}>{tableItem.tableData} </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
