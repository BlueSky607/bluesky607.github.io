import './App.scss';
import Navbar from "./components/navbar/navbar";
import LandingPage from './pages/landingpage';
import React, {useState} from 'react';

function App() {

  const [selectedSection, setselectedSection] = useState('profile');

  const handleSectionClick = (sectionId) => {
    setselectedSection(sectionId);
  }

  return (
    <>
      <div className="flex">
      <Navbar onSelectSection={handleSectionClick} />
      <div className="flex-1 ml-64 p-6"> 
        <LandingPage selectedSection={selectedSection} />
      </div>
    </div>
    </>
  );
}

export default App;
