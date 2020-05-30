const flowerFall = document.getElementById("flowerFall");
let ww = window.innerWidth;
let wh = window.innerHeight;
let fType = ["&#127801;", "&#10047;", "&#127808;", "&#127804;", "&#127802;", "&#127800;"];
let flowers = [];
let count = 0;

setInterval(fall, 40);

function fall() {
    flowerFall.innerHTML = '<h1 id="counter"></h1>';
    document.getElementById("counter").innerHTML = flowers.length;
    for (i = 0; i < flowers.length; i++) {
        let flower = flowers[i];
        if (flower.yPos < wh) {
            flower.move();
            flower.show("f" + i);
        } else flowers.splice(i, 1);
    }
    if (count++ % 15 == 0) flowers.push(new Flower());
}

function Flower() {
    this.type = rand(0, fType.length - 1);
    this.size = rand(20, 40) / 10;
    this.speed = rand(3, 6);
    this.xPos = rand(0, ww - 18 * this.size);
    this.yPos = -16 * this.size;
    this.move = function () {
        this.yPos += this.speed;
        this.xPos += Math.sin(this.yPos / 80) * 2;
    };
    this.show = function (id) {
        let div = document.createElement("div");
        div.setAttribute("id", id);
        flowerFall.appendChild(div);
        this.elem = document.getElementById(id);
        this.elem.innerHTML = fType[this.type];
        this.elem.style.fontSize = this.size + "em";
        this.elem.style.left = this.xPos + "px";
        this.elem.style.top = this.yPos + "px";
    };
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}