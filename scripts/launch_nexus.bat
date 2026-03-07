@echo off
title Nexus Cloud VR - Service Launcher
echo [⚡] Ensuring High Performance Mode...
powercfg -setactive e9a42b02-d5db-448d-aa00-03f14749eb61

echo [🌐] Starting ZeroTier Virtual LAN...
:: Path may vary based on installation location
start "" "C:\Program Files (x86)\ZeroTier\One\zerotier-one_x64.exe"

echo [🥽] Starting SteamVR and VRidge...
:: Launches SteamVR first, then the bridge driver
start steam://run/250820
timeout /t 5
start "" "C:\Program Files\RiftCat\VRidge.exe"

echo Nexus Cloud VR Service is now LIVE.
pause
