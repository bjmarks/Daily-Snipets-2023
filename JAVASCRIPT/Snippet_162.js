const button = document.querySelector("button");
const container = document.querySelector('div');
const input = document.querySelector("input");
button.addEventListener('click', () => {
    const html = `<h1>USER Input: </h1> ${input.value}`
    container.setHTML(html); // sanitizes html from JS input
})