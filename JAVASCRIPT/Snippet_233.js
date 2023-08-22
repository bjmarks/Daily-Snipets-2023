const BASE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
const code = document.getElementById("input");
const img = document.getElementById("qrCode");
function generateQR() {
    if(code.value.length > 0) img.src = BASE_URL + code.ariaValueMax;
}