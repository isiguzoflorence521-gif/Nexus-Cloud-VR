Write-Host "--- Nexus Cloud VR: Shadow PC Optimizer ---" -ForegroundColor Cyan

# Ensure high-performance power plan for VR stability
powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c

# Launch the selected VR Bridge (Example: VRidge)
$vridgePath = "C:\Program Files\RiftCat\VRidge.exe"
if (Test-Path $vridgePath) {
    Start-Process $vridgePath
    Write-Host "VRidge Bridge Active." -ForegroundColor Green
} else {
    Write-Host "Driver not found. Please check docs/shadow-pc.md" -ForegroundColor Red
}
