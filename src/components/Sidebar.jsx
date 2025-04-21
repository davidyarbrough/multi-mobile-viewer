import React from 'react';
import './Sidebar.css';

function Sidebar({ darkMode, setDarkMode, instances, setInstances }) {
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
            <span>{inst.name || `Instance ${idx + 1}`}</span>
            {/* Future: Edit/Delete buttons */}
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={() => setInstances([...instances, { name: '' }])}>
        + Add Instance
      </button>
    </aside>
  );
}

export default Sidebar;
