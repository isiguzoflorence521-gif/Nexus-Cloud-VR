@echo off
title Nexus Cloud VR - Initial Setup
echo [1/3] Activating Ultimate Performance Power Plan...
:: Unlocks and activates the hidden high-performance scheme
powercfg -duplicatescheme e9a42b02-d5db-448d-aa00-03f14749eb61
powercfg -setactive e9a42b02-d5db-448d-aa00-03f14749eb61

echo [2/3] Configuring Firewall for VR Streaming...
:: Opens ports for iVRy, VRidge, and Trinus communication
netsh advfirewall firewall add rule name="Nexus VR Stream" dir=in action=allow protocol=TCP localport=5555,9999,8081
netsh advfirewall firewall add rule name="Nexus VR Stream" dir=in action=allow protocol=UDP localport=5555,9999,8081

echo [3/3] Setting Monitor Timeout to 'Never'...
powercfg -change -monitor-timeout-ac 0
powercfg -change -standby-timeout-ac 0

echo Setup Complete! Reboot Shadow PC for best results.
pause
