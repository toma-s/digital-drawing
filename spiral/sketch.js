function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background('black');
    x = y = 200;
    angle = currentAngle = random(30, 170);
    for (var i = 3; i < 500; i += 3) {
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

    strokeWeight(50);
    stroke('white');
    line(fromX, fromY, toX, toY);
    
    strokeWeight(25);
    stroke(random(125,150), random(100), random(125,250));
    line(fromX, fromY, toX, toY);

    x = toX;
    y = toY;
}

function rotateRight() {
    currentAngle += angle % 360;
}
