const keyboard = document.getElementById("keyboard");
const input = document.getElementById("text");
let virtualKey = []
let currentRow = 1;
let usLetters = [
        ["a","b","c","d","e","f","g","h","i","j"],
        ["k","l","m","n","o","p","q","r","s","t"],
        ["u","v","w","x","y","z"," "," "," "," "],
        ["1","2","3","4","5","6","7","8","9","0"]
];
let keys = ``;
for (let i = 0; i < 10; i++) {
    keys += `<div class="keys" data-id="${usLetters[currentRow][i]}">${(usLetters[currentRow][i]).toUpperCase()}</div>`;
}
keyboard.innerHTML = keys;
const allKeys = document.querySelectorAll(".keys");
for (let i = 0; i < allKeys.length; i++) {    
    allKeys[i].addEventListener("click", () => {
        console.log(i + " " + allKeys[i].getAttribute("data-id"));
        virtualKey += allKeys[i].getAttribute("data-id");
        input.value = virtualKey;
    })
}
input.addEventListener("keyup", ()=> {
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