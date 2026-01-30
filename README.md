<p align="center">
  <img src="public/favicon.png" alt="Kumbh Kavach Logo" width="120"/>
</p>

<h1 align="center">🛡️ Kumbh Kavach</h1>

<p align="center">
  <strong>A Family Connectivity Wristband for Safer Mass Gatherings</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#team">Team</a>
</p>

---

## 📖 About

**Kumbh Kavach** is a wearable health and safety ecosystem designed for large-scale gatherings like Kumbh Mela. When crowds rise, networks fail, and panic spreads — Kumbh Kavach keeps families connected and emergencies visible.

The system combines a **sensor-based wristband** with a **companion mobile dashboard** to monitor vital signs, detect falls, and trigger emergency alerts instantly.

---

## ✨ Features

| Feature | Description | Sensor/Tech |
|---------|-------------|-------------|
| ❤️ **Real-Time Heart Rate & SpO₂** | Continuous optical sensing for early warning signals | MAX30102 |
| 🌡️ **Body Temperature Tracking** | Detect fever spikes and abnormal patterns | DS18B20 |
| 🏃 **Fall & Motion Detection** | Recognize sudden impacts and trigger emergency workflows | MPU6050 |
| 🆘 **Instant SOS Trigger** | One-press high-priority alert with latest readings | Physical Button |
| 📶 **BLE Communication** | Reliable short-range data transfer, optimized for low power | ESP32 BLE |
| 💾 **Offline-first Reliability** | Data stays safe locally, syncs when connectivity returns | Room DB |
| 🔋 **Energy Efficient Design** | Optimized firmware for 8-10 hours runtime | ESP32 Deep Sleep |
| 👨‍👩‍👧‍👦 **Family Connectivity** | A system designed around people, not just data | Family Mode |

---

## 🛠️ Tech Stack

### Hardware
- **ESP32-WROOM-32** — Low-power microcontroller for wearable intelligence
- **MAX30102** — Heart rate and SpO₂ sensor
- **DS18B20** — Temperature sensor
- **MPU6050** — Accelerometer & Gyroscope for fall detection

### Website (This Repository)
- **React 19** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library
- **Recharts** — Data visualization
- **React Router DOM** — Client-side routing

### Mobile App
- **Android (Kotlin)** — Real-time dashboard with BLE integration
- **Room Database** — Offline data persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kundansury/Kumbh-Kavach.git

# Navigate to project directory
cd Kumbh-Kavach

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
kk/
├── public/              # Static assets
│   ├── favicon.png
│   └── team/            # Team member photos
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WristbandShowcase.jsx
│   │   ├── SOSModal.jsx
│   │   └── ...
│   ├── data/            # Content and configuration
│   │   ├── content.js   # Page content
│   │   ├── teamData.js  # Team information
│   │   └── vitalsData.js
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Architecture.jsx
│   │   ├── MobileApp.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SENSOR LAYER                             │
│  MAX30102 (HR/SpO₂)  •  DS18B20 (Temp)  •  MPU6050 (Motion)    │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     PROCESSING LAYER                            │
│                     ESP32-WROOM-32                              │
│         Signal Processing • Noise Filtering • Packaging         │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   COMMUNICATION LAYER                           │
│                 Bluetooth Low Energy (BLE)                      │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                            │
│           Android Dashboard  •  Real-time Alerts                │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     EMERGENCY LAYER                             │
│           SOS → Family Contacts → Response Teams                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Use Cases

- 👨‍👩‍👧‍👦 **Families at Kumbh Mela** — Stay connected when networks fail
- ❤️ **Elderly Safety Monitoring** — Passive tracking with early risk detection
- 👶 **Child Safety Support** — Reduce panic with better visibility
- 👥 **Event Crowd Assistance** — Future-ready base for crowd safety
- ⚠️ **Emergency Scenarios** — SOS workflows designed to act immediately

---

## 🔮 Future Scope

- 📍 GPS integration for location tracking
- 📡 LoRaWAN for long-range communication
- 🆔 Stronger identity systems (RFID/NFC)
- 🩺 Expanded health sensing capabilities
- ☁️ Cloud-based analytics dashboard

---

## 👥 Team

This project was built as part of an academic initiative to explore IoT-based safety solutions for mass gatherings.

---

## 📄 License

This project is for educational and research purposes.

---

<p align="center">
  <strong>Kumbh Kavach: Safety that stays with you. 🛡️</strong>
</p>

<p align="center">
  Designed for large gatherings • Built for families • Engineered for reliability
</p>
