import React from "react";

export default function AccordionTable({ data, heading }) {
  return (
    <>
      {/* <h5 className="heading">{data?.[0]?.heading}</h5> */}
      <div className="faqList">
        <details className="faqItem">
          <summary className="faqQuestion">
            <span className="faq_heading">{data?.[0]?.heading}</span>
            <span className="icon"></span>
          </summary>
          <div className="faqAnswer">
            <div className={`table_section`}>
              <div className=" table-responsive">
                <table className={`table-lab table table-bordered`}>
                  <thead>
                    <tr>
                      {data?.[0]?.tableHeadings?.map((th, thIndex) => (
                        <th key={thIndex}>{th.tableHeading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data?.length > 0 &&
                      data.map((singleData, singleIdx) => {
                        return (
                          <React.Fragment key={singleIdx}>
                            {singleData?.tableDatas && (
                              <tr>
                                {singleData.tableDatas?.map(
                                  (tableItem, tableIdx) => (
                                    <td key={tableIdx}>
                                      {tableItem.tableData}
                                    </td>
                                  ),
                                )}
                              </tr>
                            )}
                          </React.Fragment>
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
