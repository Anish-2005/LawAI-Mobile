// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
// metro.config.js
module.exports = {
    resolver: {
      assetExts: ['json', 'txt'],  // Ensure .json files are included in the bundle
    },
  };
  
module.exports = config;
