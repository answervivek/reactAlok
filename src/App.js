import React, { useState } from 'react';
import Header from './component/Header';
import JobsPage from './component/JobsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="App">
      <Header />
      <div className="bg-light">
        <nav className="nav nav-tabs">
          <a
            className={`nav-item nav-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
            style={{ fontWeight: "bold", color: "#40423f" }}
          >
            Home
          </a>
          <a
            className={`nav-item nav-link ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
            style={{ fontWeight: "bold", color: "#40423f" }}
          >
            Jobs
          </a>
          <a
            className={`nav-item nav-link ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
            style={{ fontWeight: "bold", color: "#40423f" }}
          >
            S3 File Browser
          </a>
          <a
            className={`nav-item nav-link ${activeTab === 4 ? "active" : ""}`}
            onClick={() => handleTabClick(4)}
            style={{ fontWeight: "bold", color: "#40423f" }}
            >
           Application
          </a>
        </nav>
      </div>
      <main>
        {activeTab === 1 && <p>Welcome to Home Page</p>}
        {activeTab === 2 && <JobsPage />}
        {/* {activeTab === 3 && <p>S3 File Browser Page</p>}
        {activeTab === 4 && <p>Application Page</p>} */}
      </main>
      <footer>
        {/* your footer content goes here */}
      </footer>

    </div>
  );
}

export default App;