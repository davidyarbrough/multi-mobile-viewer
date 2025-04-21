import React, { useState } from 'react';
import './Sidebar.css';

const deviceOptions = ['iPhone 12', 'Google Pixel 5'];
const browserOptions = ['Chrome', 'Safari'];

function Sidebar({ darkMode, setDarkMode, instances, setInstances }) {
  const [openIdx, setOpenIdx] = useState(null);

  const handleChange = (idx, field, value) => {
    const updated = instances.map((inst, i) => i === idx ? { ...inst, [field]: value } : inst);
    setInstances(updated);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Viewers</h2>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
      <div className="instance-list">
        {instances.length === 0 && <div className="empty">No instances</div>}
        {instances.map((inst, idx) => (
          <div className="instance-item" key={idx}>
            <div
              className="instance-summary"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{ cursor: 'pointer', fontWeight: openIdx === idx ? 'bold' : 'normal' }}
            >
              <span>{inst.name || `Instance ${idx + 1}`}</span>
              <span style={{ float: 'right' }}>{openIdx === idx ? '▲' : '▼'}</span>
            </div>
            {openIdx === idx && (
              <div className="instance-config" style={{ marginTop: 8, padding: 8, background: '#23272f', borderRadius: 4 }}>
                <label style={{ display: 'block', marginBottom: 4 }}>
                  Name:
                  <input
                    type="text"
                    value={inst.name || ''}
                    onChange={e => handleChange(idx, 'name', e.target.value)}
                    style={{ width: '100%', marginTop: 2 }}
                  />
                </label>
                <label style={{ display: 'block', marginBottom: 4 }}>
                  URL:
                  <input
                    type="text"
                    value={inst.url || ''}
                    onChange={e => handleChange(idx, 'url', e.target.value)}
                    style={{ width: '100%', marginTop: 2 }}
                  />
                </label>
                <label style={{ display: 'block', marginBottom: 4 }}>
                  Device:
                  <select
                    value={inst.device || deviceOptions[0]}
                    onChange={e => handleChange(idx, 'device', e.target.value)}
                    style={{ width: '100%', marginTop: 2 }}
                  >
                    {deviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </label>
                <label style={{ display: 'block', marginBottom: 4 }}>
                  Browser:
                  <select
                    value={inst.browser || browserOptions[0]}
                    onChange={e => handleChange(idx, 'browser', e.target.value)}
                    style={{ width: '100%', marginTop: 2 }}
                  >
                    {browserOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={() => setInstances([...instances, { name: '', url: '', device: deviceOptions[0], browser: browserOptions[0] }])}>
        + Add Instance
      </button>
    </aside>
  );
}

export default Sidebar;
