const video = document.getElementById("video");
const constraints = {
    audio: true,
    video: {
        width: {min: 1280, ideal: 1920, max: 2560},
        height: {min: 720, ideal: 1080, max: 1440}
    } 
}
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        window.stream = stream;
    }
    catch(e) {
        console.log(e);
    }
}
startCamera();