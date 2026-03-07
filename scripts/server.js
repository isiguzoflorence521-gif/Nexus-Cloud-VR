const WebSocket = require('ws');
const { spawn } = require('child_process');

const wss = new WebSocket.Server({ port: 8081 });

// Spawn FFmpeg process to capture HDMI and output raw frames
const ffmpeg = spawn('ffmpeg', [
    '-f', 'dshow',
    '-i', 'video=Your_HDMI_Device_Name',
    '-f', 'mjpeg',
    'pipe:1'
]);

wss.on('connection', ws => {
    ffmpeg.stdout.on('data', chunk => ws.send(chunk));
});
