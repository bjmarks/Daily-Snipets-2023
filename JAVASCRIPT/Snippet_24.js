const confirm = document.getElementById("confirm");
const avatar = document.getElementById("avatar");
let text = document.getElementById("text");
let fore = document.getElementById("foreground");
let back = document.getElementById("background");
let avatarShape = document.getElementById("shape");
 function generateAvatar(text, foregroundColor, backgroundColor) {
     const canvas = document.createElement("canvas");
     const context = canvas.getContext("2d");
     canvas.width = 200;
     canvas.height = 200;
     context.fillStyle = backgroundColor;
     if(avatarShape.value == "Rect"){
        context.fillRect(0, 0, canvas.width, canvas.height);
     }
     else if(avatarShape.value == "Arc") {
        context.beginPath();
        context.arc(100, 100, 95, 0, 2*Math.PI);
        context.fill();
     }
     else if(avatarShape.value == "Corn") {
        context.beginPath();
        context.roundRect(0, 0, canvas.width, canvas.height, [20]);
        context.fill();
     }
     else {
        // no Background
     }
     context.font = "bold 10em Assistant";
     context.fillStyle = foregroundColor;
     context.textAlign = "center";
     context.textBaseline = "middle";
     context.fillText(text, canvas.width / 2, canvas.height / 2);
     avatar.style.display = "block";
     return canvas.toDataURL("image/png");
 }
 confirm.addEventListener("click", () => {
        let cap = text.value;
        cap = cap.toUpperCase();
     let pic = document.getElementById("avatar").src = generateAvatar(cap, fore.value, back.value);
     document.getElementById("download").href = pic;
     console.log(pic);
 })