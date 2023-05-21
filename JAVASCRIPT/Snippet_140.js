const gameBtn = document.getElementsByClassName("gameBtn");
    for(let i = 0; i < gameBtn.length; i++) {
        gameBtn[i].addEventListener("click", () => {
            console.log(gameBtn[i].getAttribute("data-value"));
        })
    }