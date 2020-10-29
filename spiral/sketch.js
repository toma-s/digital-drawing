stepStep = currentStep = 3;

function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background('black');
    x = y = 200;
    angle = currentAngle = 70;
    for (var i = stepStep; i < 500; i += stepStep) {
        forward(i);
        rotateRight();
    }
}


function forward(step) {
    fromX = x;
    fromY = y;
    
    stepX = Math.round((step * Math.sin(Math.PI * 2 * currentAngle / 360)));
    toX =  fromX + stepX;
    stepY = Math.round((step * Math.cos(Math.PI * 2 * currentAngle / 360)));
    toY =  fromY + stepY;

    drawLines(fromX, fromY, toX, toY);

    x = toX;
    y = toY;
}

function drawLines(fromX, fromY, toX, toY) {
    stroke(random(125,150), random(100), random(125,250));
    line(fromX, fromY, toX, toY);
}

function rotateRight() {
    currentAngle += angle % 360;
}
