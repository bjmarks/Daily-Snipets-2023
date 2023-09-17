export const InitAudio = (source, parent) => {
    let audio = new Audio();
    audio.controls = true;
    audio.src = source;
    audio.preload = true;
    // audio.autoplay = true;
    let html = `<button id="recAudio">Record Audio</button> <button id="stopAudio">Stop Audio</button>`;
    parent.innerHTML = html;
    parent.appendChild(audio);
}