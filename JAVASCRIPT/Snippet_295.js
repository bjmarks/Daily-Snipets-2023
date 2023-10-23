const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.998;
class Sprite {
    constructor({character, position, velocity}) {
        this.character = character;
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
    }
    draw() {
        ctx.fillStyle = this.character;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
        }
        else {
            this.velocity.y += gravity;
        }
    }
}
const player1 = new Sprite({
    character: "red",
    position: {
        x: 50,
        y: 50
    },
    velocity: {
        x: 0,
        y: 1
    }
});
const player2 = new Sprite({
    character: "blue",
    position: {
        x: 700,
        y: 50
    },
    velocity: {
        x: 0,
        y: 1
    }
})
function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    player1.update();
    player2.update();
}
animate()