function trial(object) {
    object.innerHTML = `<canvas id="canvas"></canvas>`;
    let canvas = document.getElementById("canvas");
    let audio = document.createElement("audio");
    audio.controls = true;
    object.appendChild(audio);
    (function() {
        canvas.width = 900;
        canvas.height = 1200;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "cadetblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    })();
}
trial(document.getElementById("app"));