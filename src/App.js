import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TitleBar from './components/TitleBar';
import Viewer from './components/Viewer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [instances, setInstances] = useState([]);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        instances={instances}
        setInstances={setInstances}
      />
      <div className="main-content">
        <TitleBar />
        <div className="viewers-container">
          {instances.length === 0 && (
            <div className="placeholder">Add or select a viewer instance to begin.</div>
          )}
          {instances.map((inst, idx) => (
            <React.Fragment key={idx}>
              {/* Import Viewer at the top: import Viewer from './components/Viewer'; */}
              <Viewer
                url={inst.url || ''}
                device={inst.device || 'iPhone 12'}
                browser={inst.browser || 'Chrome'}
                config={{ darkMode }}
              />
            </React.Fragment>
          ))}
          <button
            className="main-add-btn"
            onClick={() => setInstances([...instances, { name: '', url: '', device: 'iPhone 12', browser: 'Chrome' }])}
          >
            + Add Viewer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
