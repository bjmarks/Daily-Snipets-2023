let canvas = document.getElementById("canvas");
let cxt = canvas.getContext("2d");
cxt.beginPath();
cxt.arc(250, 250, 250, 0, 2 * Math.PI - 1.6, true);
cxt.stroke();
cxt.beginPath();
cxt.arc(250, 250, 250, 2 * Math.PI - 3.4, 2 * Math.PI - 4.5, true);
cxt.stroke();
