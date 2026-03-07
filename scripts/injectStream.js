(function() {
    // Create an image element for MJPEG streaming
    const img = document.createElement('img');
    img.id = 'hdmiStream';
    img.alt = 'HDMI Stream Preview';
    img.style.width = '100%';
    img.style.maxWidth = '1280px';
    document.body.appendChild(img);

    // Connect to WebSocket feed
    const ws = new WebSocket('ws://localhost:8081');
    ws.binaryType = 'arraybuffer';

    ws.onmessage = event => {
        const blob = new Blob([event.data], { type: 'image/jpeg' });
        img.src = URL.createObjectURL(blob);
    };

    // Optional: Integrate VR stream from Nexus Cloud VR via WebRTC
    const vrContainer = document.createElement('div');
    vrContainer.id = 'vrStream';
    document.body.appendChild(vrContainer);

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            video.style.width = '100%';
            vrContainer.appendChild(video);
        }).catch(console.error);
})();
