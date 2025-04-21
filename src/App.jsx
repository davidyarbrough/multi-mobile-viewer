import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import TitleBar from './components/TitleBar.jsx';
import Viewer from './components/Viewer.jsx';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [instances, setInstances] = useState([]);
  const [scale, setScale] = useState(1);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        instances={instances}
        setInstances={setInstances}
        scale={scale}
        setScale={setScale}
      />
      <div className="main-content">
        <TitleBar />
        <div className="viewers-container">
          {instances.length === 0 && (
            <div className="placeholder">Add or select a viewer instance to begin.</div>
          )}
          {instances.map((inst, idx) => (
            <React.Fragment key={idx}>
              <Viewer
                url={inst.url || ''}
                device={inst.device || 'iPhone 12'}
                browser={inst.browser || 'Chrome'}
                config={{ darkMode }}
                scale={scale}
              />
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
