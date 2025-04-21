import React, { useState, useEffect } from 'react';
import './Sidebar.css';

import { deviceOptions, browserOptions } from '../utils/DeviceUtils';

import { useRef } from 'react';

function InstanceConfigDropdown({ inst, idx, handleChange, autoFocus, onAutoFocus }) {
  const [urlInput, setUrlInput] = useState(inst.url || '');

  // Keep urlInput in sync with inst.url (e.g. when switching instances)
  useEffect(() => {
    setUrlInput(inst.url || '');
  }, [inst.url]);

  const handleUrlFetch = () => {
    let url = urlInput.trim();
    if (url && !/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    handleChange(idx, 'url', url);
    setUrlInput(url); // reflect the canonicalized url
  };

  return (
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
        <div style={{ display: 'flex', gap: 4 }}>
          <input
            type="text"
            value={urlInput}
            onChange={e => setUrlInput(e.target.value)}
            style={{ flex: 1, marginTop: 2 }}
            placeholder="https://example.com"
            ref={input => {
              if (autoFocus && input) {
                input.focus();
                if (onAutoFocus) onAutoFocus();
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') handleUrlFetch();
            }}
          />
          <button
            type="button"
            onClick={handleUrlFetch}
            aria-label="Refresh URL"
            style={{
              background: 'none',
              border: 'none',
              padding: '0 2px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#bbb',
              fontSize: 20
            }}
          >
            {/* SVG refresh icon for clarity */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10a6 6 0 1 1 2.1 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              <path d="M2.5 14.5v-4h4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
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
  );
}

function Sidebar({ darkMode, setDarkMode, instances, setInstances, scale, setScale }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [justAddedIdx, setJustAddedIdx] = useState(null);

  const handleChange = (idx, field, value) => {
    const updated = instances.map((inst, i) => i === idx ? { ...inst, [field]: value } : inst);
    setInstances(updated);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Viewers</h2>
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
              <InstanceConfigDropdown
                inst={inst}
                idx={idx}
                handleChange={handleChange}
                autoFocus={justAddedIdx === idx}
                onAutoFocus={() => setJustAddedIdx(null)}
              />
            )}
          </div>
        ))}
        <button className="add-btn" onClick={() => {
          setInstances(prev => {
            const next = [...prev, { name: '', url: '', device: deviceOptions[0], browser: browserOptions[0] }];
            setOpenIdx(next.length - 1);
            setJustAddedIdx(next.length - 1);
            return next;
          });
        }}>
          + Add Instance
        </button>
        <div style={{ margin: '1rem 0', padding: '0 1rem' }}>
          <label htmlFor="scaling-tool" style={{ display: 'block', marginBottom: 4 }}>Scale:</label>
          <select
            id="scaling-tool"
            value={String(scale)}
            onChange={e => setScale(Number(e.target.value))}
            style={{ width: '100%' }}
          >
            <option value="1.5">1.5x</option>
            <option value="1.25">1.25x</option>
            <option value="1">1x</option>
            <option value="0.75">0.75x</option>
            <option value="0.5">0.5x</option>
          </select>
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              id="dark-mode-toggle"
              checked={darkMode}
              onChange={e => setDarkMode(e.target.checked)}
              style={{ accentColor: '#555' }}
            />
            <label htmlFor="dark-mode-toggle" style={{ margin: 0, cursor: 'pointer' }}>Dark Mode</label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
