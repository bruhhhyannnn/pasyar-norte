# Pasyar Norte Mobile

[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0-000020?logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.0-38BDF8?logo=tailwindcss)](https://www.nativewind.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Mobile Development Implementation for PasyarNorte Thesis Project**  
_Aspect-Based Sentiment Analysis for Ilocos Norte Tourism_

---

## 📋 About

This repository contains the **mobile application** implementation of [Pasyar Norte](https://aspect-based-sentiment-analysis-bm6.vercel.app), a thesis project that applies Aspect-Based Sentiment Analysis (ABSA) to tourism reviews using machine learning.

### Project Context

**Original Project**: Pasyar Norte (Official Thesis)  
**Owners**: [Christian Andrei Arzadon](https://www.arzadonchristian.dev), Carl Dominic Doño, Fritzjerald Domingo, Mhar Justine Torres
**Mobile Development**: [Bryan Jesus Mangapit](https://bruhhhyannnn.framer.website)

The original Pasyar Norte web application uses machine learning to analyze tourism reviews at an aspect level (scenery, food, accommodation, experience) rather than simple star ratings. This mobile app provides a native mobile experience for tourists to:

- Discover destinations in Northern Luzon
- View aspect-based sentiment analysis of reviews
- Explore locations with interactive maps
- Get context-aware, data-driven travel insights

### My Role

I developed this mobile application to complement the existing web platform, focusing on:

- Native mobile UI/UX aligned with the web app's design system
- Ready-to-integrate API endpoints for backend connection
- Responsive and performant user experience
- Cross-platform support (iOS & Android)

**Note**: This repository contains only the mobile frontend. The backend API, machine learning models, and data processing remain with the original project team.

---

## 🛠️ Tech Stack

| Category              | Technology                                        |
| --------------------- | ------------------------------------------------- |
| **Framework**         | React Native + Expo SDK 52                        |
| **Styling**           | NativeWind (Tailwind CSS)                         |
| **Navigation**        | Expo Router                                       |
| **State**             | Zustand & AsyncStorage                            |
| **Maps**              | Mapbox GL                                         |
| **Build**             | EAS Build                                         |
| **Monitoring**        | Sentry                                            |
| **Deployment**        | Expo (Development/Production)                     |
| **Development Tools** | EAS (Expo Application Services), ESLint, Prettier |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo Go** app (for testing on physical devices)
- **Xcode** (for iOS development - macOS only)
- **Android Studio** (for Android development)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/bruhhhyannnn/pasyar-norte.git
cd pasyar-norte
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Start the development server**

```bash
npx expo start
```

4. **Run on device/emulator**

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on physical device

### Environment Setup

Create a `.env` file in the root directory:

```env
# Mapbox
EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here

# Sentry
EXPO_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

---

## 🤝 Contributing

Since this is a companion project to the main Pasyar Norte thesis, contributions should align with the original project's goals and design system.

### For Backend Integration:

1. Coordinate with the backend team for API specifications
2. Follow the API structure outlined in this README
3. Test integration thoroughly before merging

### For Mobile Features:

1. Follow the existing component patterns
2. Maintain TypeScript type safety
3. Use NativeWind for styling consistency
4. Write clean, documented code

---

## 📄 License

MIT License

Copyright (c) 2025 [Original Pasyar Norte Team]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

### Original Project

This mobile app is built as a companion to **Pasyar Norte**, a thesis project by:

- [Christian Andrei Arzadon](https://www.arzadonchristian.dev)
- Carl Dominic Doño
- [Fritzjerald Domingo](https://www.facebook.com/KiriSakiKyoutaro)
- [Mhar Justine Torres](https://www.facebook.com/mharjustine.torres.1)

**Original Web App**: [Pasyar Norte](https://aspect-based-sentiment-analysis-bm6.vercel.app)

### Mobile Development

- **Developer**: [Bryan Jesus Mangapit](https://bruhhhyannnn.framer.website)
- **Role**: Mobile UI/UX Implementation

---

## 📄 License

MIT © 2026 [bruhhhyannnn](https://github.com/bruhhhyannnn) for PasyarNorte Thesis Team
