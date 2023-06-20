function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("white");
    drawRings(mouseX, mouseY);
    drawRings(100, 300);
}

function drawRings(x: number, y: number): void {
    noFill();
    for (let i = 0; i < 10; i++) {
        circle(x, y, random(10, 300));
    }
}

function mousePressed() {
    redraw();
}
