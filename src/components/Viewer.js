import React from 'react';
import './Viewer.css';

const devicePresets = {
  'iPhone 12': { width: 390, height: 844, borderRadius: 38 },
  'Google Pixel 5': { width: 393, height: 851, borderRadius: 30 },
  // Add more devices as needed
};

function Viewer({ url, device = 'iPhone 12', browser = 'Chrome', config = {} }) {
  const preset = devicePresets[device] || devicePresets['iPhone 12'];
  return (
    <div
      className={`viewer-frame ${config.darkMode ? 'dark' : ''}`}
      style={{
        width: preset.width,
        height: preset.height,
        borderRadius: preset.borderRadius,
      }}
    >
      <div className="viewer-header">
        <span className="device-label">{device}</span>
        <span className="browser-label">{browser}</span>
      </div>
      <iframe
        title={url}
        src={url}
        className="viewer-iframe"
        style={{
          width: '100%',
          height: `calc(100% - 32px)`,
          border: 'none',
          background: config.darkMode ? '#181a1b' : '#fff',
          borderRadius: preset.borderRadius,
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}

export default Viewer;
