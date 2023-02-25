document.onmousemove = mouse;
function mouse(e) {
    let parts = document.querySelectorAll(".particle");
    let fire = document.getElementById("fire");
    let x = e.clientX;
    let y = e.clientY;
    fire.style.left = `${x - 55}px`;
    fire.style.top = `${y - 20}px`;
    for(let i = 0; i < parts.length; i++){
        parts[i].style.animationDelay = `${i * 150}ms`;
    }
  }