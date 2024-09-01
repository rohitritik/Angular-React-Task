import React from "react";

const ConferenceCallParticipantsTab = ({ data }) => {
  return (
    <div>
      <h2>Conference Call Participants</h2>
      {data ? (
        <div className="participant-grid">
          {data.map((analyst, index) => (
            <div key={index} className="participant-item">
              <strong className="participant-name">{analyst.name}</strong>
              <br />
              <div>
                <span className="designation">Analyst | {analyst.company} </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No conference call participants data available</p>
      )}
    </div>
  );
};

export default ConferenceCallParticipantsTab;
