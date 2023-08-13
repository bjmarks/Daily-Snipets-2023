const file = document.getElementById("fileUpload");
const audioContext = new AudioContext();
let audioSrc, analyser = audioContext.createAnalyser();
file.addEventListener("change", (e) => {
    const audio = document.getElementById("audio");
    console.log(file.files, audio);
    const files = file.files;
    audio.src = URL.createObjectURL(files[0]);
    console.log(URL.createObjectURL(files[0]));
    audio.load();
})