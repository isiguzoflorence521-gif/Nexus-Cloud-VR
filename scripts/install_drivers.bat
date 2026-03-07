@echo off
title Nexus Cloud VR - Driver Downloader
echo Initializing download of PCVR Bridge drivers...

:: Use PowerShell to download the VRidge installer
powershell -Command "Invoke-WebRequest -Uri 'https://riftcat.com' -OutFile '%TEMP%\VRidgeSetup.exe'"
echo VRidge Downloaded. Launching installer...
start /wait %TEMP%\VRidgeSetup.exe

:: Use PowerShell to download the Trinus Server
powershell -Command "Invoke-WebRequest -Uri 'https://trinusvr.com' -OutFile '%TEMP%\TrinusServer.exe'"
echo Trinus Downloaded. Launching installer...
start /wait %TEMP%\TrinusServer.exe

echo All drivers downloaded and installers launched.
pause
