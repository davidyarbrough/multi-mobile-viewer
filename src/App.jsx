import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import TitleBar from './components/TitleBar.jsx';
import Viewer from './components/Viewer.jsx';
import './App.css';

function parseConfigFromUrl() {
  const params = new URLSearchParams(window.location.search);
  let instances = [];
  let scale = 1;
  try {
    if (params.has('config')) {
      const decoded = decodeURIComponent(params.get('config'));
      const parsed = JSON.parse(atob(decoded));
      if (Array.isArray(parsed.instances)) instances = parsed.instances;
      if (typeof parsed.scale === 'number') scale = parsed.scale;
    }
  } catch {}
  return { instances, scale };
}

function updateUrl(instances, scale) {
  const configObj = { instances, scale };
  const encoded = btoa(JSON.stringify(configObj));
  const params = new URLSearchParams(window.location.search);
  params.set('config', encodeURIComponent(encoded));
  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}

function App() {
  const initial = parseConfigFromUrl();
  const [darkMode, setDarkMode] = useState(false);
  const [instances, setInstances] = useState(initial.instances);
  const [scale, setScale] = useState(initial.scale);

  // Update URL params on state change
  useEffect(() => {
    updateUrl(instances, scale);
  }, [instances, scale]);

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
