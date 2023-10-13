// video by: https://youtu.be/T33NN_pPeNI?si=s8kJLAOXUEUvqGkT
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show"); // opacity 1
        }
        else {
            entry.target.classList.remove("show");
        }
    })
})
const hiddenElement = document.querySelectorAll(".hidden"); // opacity 0, transition all 1s