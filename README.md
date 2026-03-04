========================================================================
🌌 NEXUS CLOUD VR SDK - README
========================================================================

Project Name: Nexus Cloud VR
Version: 1.0.0
Description: High-performance, low-latency USB casting SDK for mobile 
             VR headsets (Feebz, Shinecon, Google Cardboard).

------------------------------------------------------------------------
1. OVERVIEW
------------------------------------------------------------------------
Nexus Cloud VR provides the framework to stream high-fidelity content 
from a smartphone to a VR headset using a physical USB cable. By 
eliminating Wi-Fi jitter, we achieve the sub-20ms latency required 
for a comfortable VR experience.

------------------------------------------------------------------------
2. CORE FEATURES
------------------------------------------------------------------------
* WIRED LINK: Low-latency streaming via ADB USB tunneling.
* LENS PROFILES: Pre-configured distortion maps for:
    - Feebz VR (Wide FOV)
    - Shinecon G04 (Adjustable IPD)
    - Google Cardboard (V1/V2)
* INPUT MAPPING: Native support for Feebz Bluetooth HID controllers.
* SHADER ENGINE: GLSL Barrel Distortion correction.

------------------------------------------------------------------------
3. REPOSITORY STRUCTURE
------------------------------------------------------------------------
/sdk        - Core Java/C++ logic for rendering and tracking.
/bridge     - Scripts for USB communication and ADB reverse.
/profiles   - JSON files containing lens/FOV data for headsets.
/samples    - Demo scenes for quick testing.
/scripts    - Automation tools for wired setup.

------------------------------------------------------------------------
4. QUICK START SETUP
------------------------------------------------------------------------
1. Enable 'USB Debugging' in your Android Developer Options.
2. Connect the phone to your source via a USB-C cable.
3. Run the bridge script:
   Windows: scripts/setup_wired.bat
   Linux/Mac: scripts/setup_wired.sh
4. Open the Nexus Cloud VR app and select your headset type.

------------------------------------------------------------------------
5. CONTROLLER MAPPING (FEEBZ)
------------------------------------------------------------------------
The SDK automatically detects Feebz-compatible Bluetooth remotes:
- Trigger: Button A
- Back: Button B
- Navigation: Left Joystick

------------------------------------------------------------------------
6. LICENSE
------------------------------------------------------------------------
Distributed under the MIT License. See LICENSE.txt for more info.

========================================================================
BUILD THE FUTURE. JOIN THE NEXUS.
========================================================================
