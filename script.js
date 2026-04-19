let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let fontSize = 16;
let columns = canvas.width / fontSize;
let pixel_drop = [];

for (let i = 0; i < columns; i++) pixel_drop[i] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < pixel_drop.length; i++) {
        let text = [Math.floor(Math.random() * 2)]; //gives 0 and 1
        let pos_x = i * fontSize;
        let pos_y = pixel_drop[i] * fontSize;

        ctx.fillText(text, pos_x, pos_y);
        pixel_drop[i]++;

    }

    requestAnimationFrame(draw);
}

setTimeout(() => {
    document.body.classList.add("start-typing");
}, 1500);


draw();
