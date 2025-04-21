import React from 'react';
import './Viewer.css';
import { devicePresets, getUserAgent } from '../utils/DeviceUtils';

function Viewer({ url, device = 'iPhone 12', browser = 'Chrome', config = {}, scale = 1 }) {
  const preset = devicePresets[device] || devicePresets['iPhone 12'];
  const uaKey = `${device}:${browser}`;
  const userAgent = getUserAgent(uaKey) || '';
  const proxySrc = url
    ? `/proxy?url=${encodeURIComponent(url)}&ua=${encodeURIComponent(userAgent)}`
    : '';
  return (
    <div
      className={`viewer-frame ${config.darkMode ? 'dark' : ''}`}
      style={{
        width: preset.width * scale,
        height: preset.height * scale,
        borderRadius: preset.borderRadius,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="viewer-header" style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: preset.width }}>
        <span className="device-label">{device}</span>
        <span className="browser-label">{browser}</span>
      </div>
      <div
        style={{
          width: preset.width * scale,
          height: (preset.height - 32) * scale,
          overflow: 'hidden',
        }}
      >
        <iframe
          title={url}
          src={proxySrc}
          className="viewer-iframe"
          style={{
            width: preset.width,
            height: preset.height - 32,
            border: 'none',
            background: config.darkMode ? '#181a1b' : '#fff',
            borderRadius: preset.borderRadius,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'auto',
            position: 'relative',
            display: 'block',
          }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
}

export default Viewer;
