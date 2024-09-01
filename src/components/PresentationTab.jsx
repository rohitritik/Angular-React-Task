import React from 'react';
import operatorIcon from '../icons/operator-icon.png'; // Add operator icon
import executiveIcon from '../icons/executive-icon.png'; // Add executive icon
import analystIcon from '../icons/analyst-icon.png'; // Add analyst icon


const PresentationTab = ({data}) => {
  return (
    <div>
      <h2>Presentation</h2>
      {data?.map((item, index) => (
  <div key={index} className="participant-card">
    {/* Display the icon based on participant type */}
    <img 
      src={
        item.participant_name === 'Operator'
          ? operatorIcon
          : item.designation === 'Analyst'
          ? analystIcon
          : executiveIcon
      }
      alt={
        item.participant_name === 'Operator'
          ? "Operator Icon"
          : item.designation === 'Analyst'
          ? "Analyst Icon"
          : "Executive Icon"
      }
      className="participant-icon"
    />

    <div className="participant-info">
      <strong className="participant-name">
        {item.participant_name  }
      </strong>
       

      {item.participant_company && (
        <div className="participant-company">
          {item.participant_designation} | {item.participant_company}
        </div>
      )}

      {/* Show the transcript */}
      <div className="transcript">
        {item.transcript_data?.length ? (
          item.transcript_data.map((text, idx) => (
            <p key={idx} className="transcript-item">
              {text}
            </p>
          ))
        ) : (
          <p>No transcript available</p>
        )}
      </div>
    </div>
  </div>
))}



    </div>
  );
};

export default PresentationTab;



