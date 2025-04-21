# Multi-Mobile Viewer

A web application for testing multiple web apps simultaneously in mobile-sized viewers. Built with Vite + React + Express.

## Features
- **Multiple Device Simulation:**
  - Choose from a wide selection of recent iPhone, Pixel, and Galaxy models (including folding and budget devices like iPhone SE 2, Pixel Fold, Galaxy Z Flip/Fold, A54, etc).
- **Browser Emulation:**
  - Switch between Chrome, Safari, Firefox, Samsung Internet, and Edge user agents for each viewer.
- **Dynamic Scaling:**
  - Scale all viewers (0.5x – 1.5x) via the sidebar for flexible dashboard layouts.
- **Configurable Instances:**
  - Add, remove, and configure any number of viewer instances.
- **URL Bookmarking:**
  - The full viewer configuration (devices, browsers, URLs, scale) is encoded in the URL. Bookmark or share to restore a specific layout instantly.
- **Notification Capture:**
  - Viewer frames can display notifications from loaded pages.
- **Quality-of-Life Enhancements:**
  - Adding an instance expands and focuses the URL input for fast entry.
  - Press Enter in the URL field to refresh the instance.
  - Device/browser/user agent management is centralized in `src/utils/DeviceUtils.js`.

## Development
- Run `npm install` in the project directory.
- Run `npm run dev` to start the Vite dev server (unminified, with source maps, for best debugging experience).

## Production / Debug Builds
- Run `npm run build` to generate the production build in `dist/` (unminified, with source maps for readable stacktraces).
- Start the Express server to serve the static files:
  ```sh
  node server.js
  ```

## Customization
- **Add/Edit Devices/Browsers/User Agents:** Edit `src/utils/DeviceUtils.js`.
- **UI/UX Tweaks:** Most logic is in `src/components/Sidebar.jsx` and `src/components/Viewer.jsx`.

## License
MIT
