# Multi-Mobile Viewer

A web-based tool for simultaneously testing multiple webapps across different mobile device configurations.

## Overview

Multi-Mobile Viewer allows developers and QA teams to efficiently test web applications across multiple configurations at once. It creates mobile-sized viewers for each configured URL, enabling side-by-side testing and comparison.

## Features

- **Multiple URL Support**: Configure zero or more URLs to test simultaneously
- **Device Simulation**: Configure each viewer for different mobile devices and browsers
- **Responsive Layout**: All configured viewers displayed in a single dashboard
- **Notification Capture**: Intercepts browser notifications from each viewer and displays them as system notifications
- **Configuration Flexibility**: Easily adjust settings through a simple configuration file

## How It Works

The application creates a separate mobile-sized viewer for each URL specified in the configuration. Each viewer can be configured to simulate different device types and browsers. When a notification is triggered in any of the viewers, it's captured and displayed as a browser notification with the format: "Notification from page ${N}: ${wrapped_message}".

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/multi-mobile-viewer.git
cd multi-mobile-viewer

# Install dependencies
npm install

# Start the application
npm start
```

## Configuration

Create a `config.json` file in the root directory with the following structure:

```json
{
  "viewers": [
    {
      "name": "Viewer 1",
      "url": "https://example.com/app1",
      "device": "iPhone 12",
      "browser": "Safari"
    },
    {
      "name": "Viewer 2",
      "url": "https://example.com/app2",
      "device": "Google Pixel 5",
      "browser": "Chrome"
    }
  ]
}
```

### Configuration Options

- **name**: A friendly name for the viewer (used in notifications)
- **url**: The URL to load in this viewer
- **device**: The mobile device to simulate
- **browser**: The browser to simulate

## Usage

1. Start the application with `npm start`
2. Open your browser to `http://localhost:3000`
3. All configured viewers will appear in the dashboard
4. Interact with each viewer as needed
5. Any notifications from the applications will be captured and displayed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
