const keypad = document.querySelectorAll(".keys");
let requestLetter, requestNumber;
console.log(keypad.length);
for (let i = 0; i < keypad.length; i++) {
    keypad[i].addEventListener("click", () => {
        let key = keypad[i].dataset.value;
        console.log(key + " clicked")
        if(isNaN(parseInt(key))) {
            requestLetter = key;
            console.log(requestLetter);
        }
        if(requestLetter && !(isNaN(parseInt(key)))) {
            requestNumber = key;
            console.log(requestLetter + "" + requestNumber);
            vend(requestLetter, requestNumber);
        }
    })
}

function vend(rL,rN) {
    alert("vending " + rL + rN);
    requestLetter = "";
    requestNumber = "";
}