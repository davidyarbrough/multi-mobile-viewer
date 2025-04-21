import React from 'react';
import './Viewer.css';

const devicePresets = {
  'iPhone 12': { width: 390, height: 844, borderRadius: 38 },
  'Google Pixel 5': { width: 393, height: 851, borderRadius: 30 },
  // Add more devices as needed
};

// User agent strings for each device/browser combo
const userAgents = {
  'iPhone 12:Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
  'Google Pixel 5:Chrome': 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
  // Add more as needed
};

function Viewer({ url, device = 'iPhone 12', browser = 'Chrome', config = {} }) {
  const preset = devicePresets[device] || devicePresets['iPhone 12'];
  const uaKey = `${device}:${browser}`;
  const userAgent = userAgents[uaKey] || '';
  const proxySrc = url
    ? `/proxy?url=${encodeURIComponent(url)}&ua=${encodeURIComponent(userAgent)}`
    : '';

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
        src={proxySrc}
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
