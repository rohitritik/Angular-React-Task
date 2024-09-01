import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Import the individual tab components
import PresentationTab from './components/PresentationTab';
import QATab from './components/QATab';
import CorporateParticipantsTab from './components/CorporateParticipantsTab';
import ConferenceCallParticipantsTab from './components/ConferenceCallParticipantsTab';

const App = () => {
  const [activeTab, setActiveTab] = useState('Presentation');
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    axios.get(`${process.env.PUBLIC_URL}/assets/data.json`)
        .then(response => {
        console.log('Fetched JSON Data:', response.data);
        setJsonData(response.data.data.items.transcript_data);
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'Presentation':
        return <PresentationTab data={jsonData?.presentation} />;
      case 'Q&A':
        return <QATab data={jsonData?.questions_and_answers} />;
      case 'Corporate Participants':
        return <CorporateParticipantsTab data={jsonData?.participants?.executives} />;
      case 'Conference Call Participants':
        return <ConferenceCallParticipantsTab data={jsonData?.participants?.analyst} />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="App">
      <h1>Company Transcript</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('Presentation')}>Presentation</button>
        <button onClick={() => setActiveTab('Q&A')}>Q&A</button>
        <button onClick={() => setActiveTab('Corporate Participants')}>Corporate Participants</button>
        <button onClick={() => setActiveTab('Conference Call Participants')}>Conference Call Participants</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;

