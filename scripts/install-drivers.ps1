Write-Host "Installing Nexus VR Drivers..."
Invoke-WebRequest -Uri "https://riftcat.com" -OutFile "$env:TEMP\vridge.exe"
Start-Process "$env:TEMP\vridge.exe" -Wait
