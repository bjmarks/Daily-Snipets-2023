let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");
let startButton = document.getElementById("startButton");
let resetButton = document.getElementById("resetButton");
let progressBar = document.getElementById("progressBar");
let colonStyle = document.getElementById("colonStyle");
let progressBarMax;
let changeSeconds = 0; 
let changeMinutes = 0;
let stopper;
let setTime = function() {
    clearTimeout(stopper);
    let getMinutes = parseInt(minutesInput.value);
    let getSeconds = parseInt( secondsInput.value);
    console.log(`display ${getMinutes}:${getSeconds} time`);
    if(getSeconds <= 9) {
        let originalValue = secondsInput.value;
        secondsInput.value = ("0" + originalValue).slice(-2);
    } else if(getSeconds >= 60) {
        secondsInput.value = ("0" + 0).slice(-2);
        changeSeconds = 0;
    } else if(getSeconds >= 10) {
        secondsInput.value = getSeconds;
    } else if(secondsInput.value == "") {
        secondsInput.value = ("0" + 0).slice(-2);
    }
    if (minutesInput.value == "") {
        minutesInput.value = 0;
    }  
    changeMinutes = parseInt(minutesInput.value);
    minutesInput.value = changeMinutes;
    changeMinutes = changeMinutes * 60;
    changeSeconds = parseInt(secondsInput.value);
    let totalTime = changeSeconds + changeMinutes;
    progressBar.value = 0;
    progressBar.setAttribute("max", totalTime );
    progressBarMax = totalTime;
    console.log(`changing ${changeMinutes}:${changeSeconds} time`);
}
minutesInput.addEventListener("keyup", setTime); 
minutesInput.addEventListener("click", setTime); 
secondsInput.addEventListener("keyup", setTime);
secondsInput.addEventListener("click", setTime);
let progressCountdown = function() {
    secondsInput.classList.add("form_active");
    minutesInput.classList.add("form_active"); 
    colonStyle.classList.add("form_active");
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    stopper = setTimeout(progressCountdown, 1000);
    if(secondsInput.value == 0 && minutesInput.value > 0) {
        secondsInput.value = 60;
        minutesInput.value -= 1;
    }
    if(secondsInput.value > 0) {
        secondsInput.value -= 1;
        progressBar.value += 1;
    }
}
let stopCountdown = function() {
    console.log("reload");
    location.reload();
}
startButton.addEventListener("click", progressCountdown);
resetButton.addEventListener("click", stopCountdown);