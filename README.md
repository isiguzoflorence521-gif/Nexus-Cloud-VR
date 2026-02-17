# 🌌 Nexus Cloud VR (NCVR) 
### *The Cloud-Native Virtual Console for Feebz VR*

Nexus Cloud VR (NCVR) is a DIY, automated cloud gaming ecosystem that bridges the gap between affordable smartphone VR and high-end PC VR. By orchestrating **Shadow PC** power through a **Google Apps Script** command center, NCVR transforms a standard Feebz headset into a high-performance gaming machine.

---

## 🎮 The "Nexus" Experience
Inspired by console-style tech demos like *The Playroom*, NCVR focuses on seamless automation. No more manual driver setup—just plug in and play.

- **Chromebook Command Center:** Manage your entire VR rig via Google Apps Script.
- **Protocol Hot-Swapping:** Real-time switching between iVRy, VRidge, and Trinus drivers.
- **Ultra-Link Stability:** Optimized for USB Tethering to eliminate Wi-Fi latency.
- **Telemetry Logging:** Live `session_log.txt` tracking for system health.

---

## 🛠️ The Tech Stack
- **Dashboard:** [Google Apps Script](https://developers.google.com) (Master Command Sheet)
- **Automation:** Windows Batch & `curl.exe`
- **Environment:** [VS Code](https://code.visualstudio.com) on [ChromeOS (Dell 3100)](https://www.google.com)
- **Infrastructure:** [Shadow PC](https://shadow.tech)
- **Hardware:** [Feebz VR 2.0 Headset](https://www.feebzstore.com) + Smartphone

---

## 📂 Repository Structure
```text
NCVR/
├── Automation/
│   ├── NCVR_Switch.bat    <-- The "Brain" (Manual switch logic)
│   └── curl.exe           <-- Network bridge binary
├── Resources/
│   └── phone_profiles.json <-- Lens & Bitrate configurations
├── Logs/
│   └── session_log.txt    <-- Live telemetry data
└── Code.gs                <-- Google Apps Script backend source
