const keyboard = document.getElementById("keyboard");
const input = document.getElementById("text");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
let currentRow = 0;
let usLetters = [
        ["a","b","c","d","e","f","g","h","i","j"],
        ["k","l","m","n","o","p","q","r","s","t"],
        ["u","v","w","x","y","z"," "," "," "," "],
        ["1","2","3","4","5","6","7","8","9","0"]
];
    function renderKeys(currentRow) { 
    let keys = ``;
    console.log(currentRow);
    for (let i = 0; i < 10; i++) {
        keys += `<div class="keys" data-id="${usLetters[currentRow][i]}">${usLetters[currentRow][i]}</div>`;
    }
    keyboard.innerHTML = keys;
    const allKeys = document.querySelectorAll(".keys");
    for (let i = 0; i < allKeys.length; i++) {    
        allKeys[i].addEventListener("click", () => {
            virtual = allKeys[i].getAttribute("data-id");
            input.value = input.value + virtual;
        })
    }
}
renderKeys(0);
function row() {
    if(this.getAttribute("data-id") == "neg" && currentRow == 0){
        currentRow = usLetters.length - 1
    }
    else if(this.getAttribute("data-id") == "neg") {
        currentRow--;
    }
    else if(this.getAttribute("data-id") == "pos" && currentRow >= usLetters.length - 1) {
        currentRow = 0;
    }
    else {
        currentRow++;
    }
    renderKeys(currentRow);
}
input.addEventListener("keyup", () => {
    if((parseInt(input.value) > 0)){
        console.log("Search Pokemon By ID: " + input.value);
    }
    else if(input.value == "") {
        console.log("empty search");
    }
    else {
        console.log("Search Pokemon By Name: " + input.value)
    }
})
leftArrow.addEventListener("click", row);
rightArrow.addEventListener("click", row);