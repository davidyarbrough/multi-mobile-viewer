// src/utils/DeviceUtils.js

// Device presets
export const devicePresets = {
  // iPhones
  'iPhone SE (2nd Gen)': { width: 375, height: 667, borderRadius: 20 },
  'iPhone 12': { width: 390, height: 844, borderRadius: 38 },
  'iPhone 13': { width: 390, height: 844, borderRadius: 38 },
  'iPhone 13 Mini': { width: 375, height: 812, borderRadius: 38 },
  'iPhone 13 Pro Max': { width: 428, height: 926, borderRadius: 45 },
  'iPhone 14': { width: 390, height: 844, borderRadius: 38 },
  'iPhone 14 Plus': { width: 428, height: 926, borderRadius: 45 },
  'iPhone 14 Pro': { width: 393, height: 852, borderRadius: 40 },
  'iPhone 14 Pro Max': { width: 430, height: 932, borderRadius: 47 },
  'iPhone 15': { width: 393, height: 852, borderRadius: 40 },
  'iPhone 15 Pro': { width: 393, height: 852, borderRadius: 40 },
  'iPhone 15 Pro Max': { width: 430, height: 932, borderRadius: 47 },
  // Google Pixel
  'Google Pixel 5': { width: 393, height: 851, borderRadius: 30 },
  'Google Pixel 6': { width: 411, height: 915, borderRadius: 30 },
  'Google Pixel 6 Pro': { width: 412, height: 915, borderRadius: 30 },
  'Google Pixel 7': { width: 412, height: 915, borderRadius: 30 },
  'Google Pixel 7 Pro': { width: 412, height: 915, borderRadius: 30 },
  'Google Pixel 8': { width: 428, height: 926, borderRadius: 30 },
  'Google Pixel 8 Pro': { width: 428, height: 926, borderRadius: 30 },
  'Google Pixel Fold': { width: 493, height: 774, borderRadius: 30 },
  // Samsung Galaxy
  'Galaxy S21': { width: 360, height: 800, borderRadius: 30 },
  'Galaxy S22': { width: 360, height: 780, borderRadius: 30 },
  'Galaxy S23': { width: 393, height: 873, borderRadius: 30 },
  'Galaxy S24': { width: 393, height: 873, borderRadius: 30 },
  'Galaxy S24 Ultra': { width: 412, height: 915, borderRadius: 30 },
  'Galaxy Z Fold 3': { width: 373, height: 820, borderRadius: 30 },
  'Galaxy Z Fold 4': { width: 373, height: 820, borderRadius: 30 },
  'Galaxy Z Fold 5': { width: 432, height: 916, borderRadius: 30 },
  'Galaxy Z Flip 3': { width: 340, height: 780, borderRadius: 30 },
  'Galaxy Z Flip 4': { width: 340, height: 780, borderRadius: 30 },
  'Galaxy Z Flip 5': { width: 360, height: 748, borderRadius: 30 },
  'Galaxy A54': { width: 393, height: 873, borderRadius: 30 },
};

export const deviceOptions = Object.keys(devicePresets);

export const browserOptions = ['Chrome', 'Safari', 'Firefox', 'Samsung Internet', 'Edge'];

// User agent strings for each device/browser combo
const userAgents = {
  // iPhones
  'iPhone SE (2nd Gen):Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
  'iPhone 12:Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
  'iPhone 13:Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
  'iPhone 14:Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  'iPhone 15:Safari': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  // Chrome on iPhone
  'iPhone 12:Chrome': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/90.0.4430.78 Mobile/15E148 Safari/604.1',
  'iPhone 13:Chrome': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1',
  // Google Pixel
  'Google Pixel 5:Chrome': 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
  'Google Pixel 6:Chrome': 'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36',
  'Google Pixel 8:Chrome': 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36',
  // Samsung Galaxy
  'Galaxy S21:Chrome': 'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
  'Galaxy S24:Chrome': 'Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.129 Mobile Safari/537.36',
  'Galaxy Z Fold 5:Chrome': 'Mozilla/5.0 (Linux; Android 13; SM-F946B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.170 Mobile Safari/537.36',
  // Samsung Internet
  'Galaxy S24:Samsung Internet': 'Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/120.0.6099.129 Mobile Safari/537.36',
  // Firefox
  'Google Pixel 8:Firefox': 'Mozilla/5.0 (Android 14; Mobile; rv:119.0) Gecko/119.0 Firefox/119.0',
  // Edge
  'Galaxy S24:Edge': 'Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.129 Mobile Safari/537.36 EdgA/120.0.2210.144',
};

export function getUserAgent(device, browser) {
  return userAgents[`${device}:${browser}`] || '';
}
