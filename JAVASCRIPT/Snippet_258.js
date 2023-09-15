export const getStream = async (Constraints, Element, Start, Stop, Save, Type) => { 
    navigator.mediaDevices.getUserMedia(Constraints).then((stream) => {
        let element = document.getElementById(Element);
        "srcObject" in element ? element.srcObject = stream : element.src = window.URL.createObjectURL(stream);
        element.onloadedmetadata = (e) => { element.play() };
        let start = document.getElementById(Start);
        let stop = document.getElementById(Stop);
        let check = document.getElementById(Save);
        let Recorder = new MediaRecorder(stream);
        let chunks = [];
        start.addEventListener("click", () => { 
            element.play();
            Recorder.start();
        });
        stop.addEventListener("click", () => { 
            element.pause()
            Recorder.stop();
        });
        Recorder.ondataavailable = (ev) => { chunks.push(ev.data) };
        Recorder.onstop = () => {
            let blob = new Blob(chunks, {'type': Type});
            chunks = [];
            let URL = window.URL.createObjectURL(blob);
            check.src = URL;
        }
    })
    .catch((err) => {
         console.error(err.name, err.message);
    })
}