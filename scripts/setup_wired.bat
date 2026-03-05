@echo off
echo [Nexus Cloud VR] Initializing USB Bridge...
:: Redirects the headset's port 8080 to the phone via USB cable
adb reverse tcp:8080 tcp:8080
if %errorlevel% neq 0 (
    echo [ERROR] No device found. Check USB Debugging.
    pause
    exit /b
)
echo [SUCCESS] USB Bridge active on port 8080.
echo [Nexus] Launching App...
adb shell am start -n com.nexus.cloudvr/.MainActivity
pause
