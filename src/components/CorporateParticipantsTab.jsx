import React from "react";

const CorporateParticipantsTab = ({ data }) => {
  return (
    <div>
      <h2>Corporate Participants</h2>
      {data ? (
        <ul>
          
          {data.map((item, index) => (
            <div className="participant-info">
              <strong className="participant-name">
                {item.name}
              </strong>

              {item.name !== "Operator" && (
                <div className="designation-company">
                  {item.designation === "Analyst" ? (
                    <span className="designation">Analyst</span>
                  ) : (
                    <>
                      <span className="designation">{item.designation}</span>
                      {item.company && (
                        <span className="company"> | {item.company}</span>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <p>No corporate participants data available</p>
      )}
    </div>
  );
};

export default CorporateParticipantsTab;
