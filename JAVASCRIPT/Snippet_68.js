const input = document.getElementById("text");
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
