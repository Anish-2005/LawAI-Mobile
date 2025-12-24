# LawAI Mobile App

A comprehensive mobile application for law enforcement agencies, powered by AI technology.

## Features

- AI-Powered FIR Generation
- Legal Document Management
- Case Tracking & Analytics
- Officer Safety Tools
- Real-time Communication
- Evidence Management

## Build Instructions

### Prerequisites

- Node.js 20.19.4 or higher
- npm or yarn
- Expo CLI
- EAS CLI (for building)

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

### Building for Production

#### Android APK/AAB
```bash
npm run build:android
```

#### iOS App Store
```bash
npm run build:ios
```

#### Submit to Stores
```bash
npm run submit:android
npm run submit:ios
```

### App Icon Setup

The app uses custom icons located in the `assets/` folder:

1. **Main Icon**: `icon.png` (1024x1024)
2. **Adaptive Icon**: `adaptive-icon.png` (1024x1024) - foreground only
3. **Splash Icon**: `splash-icon.png`
4. **Favicon**: `favicon.png` (32x32)

To generate these icons from the provided SVG:

1. Open `assets/lawai-icon.svg` in a vector graphics editor (Inkscape, Adobe Illustrator, etc.)
2. Export as PNG at the required sizes:
   - 1024x1024 for icon.png and adaptive-icon.png
   - 512x512 for splash-icon.png
   - 32x32 for favicon.png

### Configuration

- **Bundle ID**: `com.lawai.com.lawai`
- **Package Name**: `com.lawai.com.lawai`
- **Version**: 1.0.0
- **Build**: 1

### Permissions

The app requires the following permissions:
- Internet access
- Network state access
- External storage (read/write) for document management

### Environment Setup

Make sure to configure your EAS build environment:

```bash
eas build:configure
```

## Tech Stack

- React Native 0.81.5
- Expo SDK 54
- TypeScript
- Navigation: React Navigation
- State Management: React Hooks
- UI: Custom components with Linear Gradients
- Icons: Ionicons

## Project Structure

```
├── assets/           # App icons and static assets
├── android/          # Android native code
├── ios/             # iOS native code
├── components/      # Reusable UI components
├── pages/           # App screens/pages
├── types.ts         # TypeScript type definitions
└── App.tsx          # Main app component
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the BSD 0-Clause License.