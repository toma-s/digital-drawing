

heads90 = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];
headIndex90 = 0;

function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    // run90();
    run2();
}

function run90() {

    background('black');
    x = y = 100;
    for (var i = 3; i < 300; i += 3) {
        forward90(i);
        stroke(random(255), random(255), random(255));
        rotate90();
        console.log();
    }
}

function forward90(step) {
    console.log('forward, step:', step);
    fromX = x;
    fromY = y;
    if (heads90[headIndex90][0] !== 0) {
        toX = fromX + step * heads90[headIndex90][0];
    } else {
        toX = x;
    }
    if (heads90[headIndex90][1] !== 0) {
        toY = fromY + step * heads90[headIndex90][1];
    } else {
        toY = y;
    }

    line(fromX, fromY, toX, toY);

    x = toX;
    y = toY;

    console.log('(', x, '; ', y, ')');
}

function rotateRight90() {
    console.log('rotate');
    headIndex90 = (headIndex90 + 1) % heads90.length;
    console.log(headIndex90);
}




function run2() {
    background('black');
    x = y = 200;
    angle = currentAngle = random(30, 170);
    for (var i = 3; i < 500; i += 3) {
        forward(i);
        rotate2();
    }
}

function forward(step) {
    console.log('forward, step:', step, 'angle:', currentAngle);
    fromX = x;
    fromY = y;
    
    math1 = Math.round((step * Math.sin(Math.PI * 2 * currentAngle / 360)));
    toX =  fromX + math1;
    math2 = Math.round((step * Math.cos(Math.PI * 2 * currentAngle / 360)));
    toY =  fromY + math2;

    strokeWeight(50);
    stroke('white');
    line(fromX, fromY, toX, toY);
    strokeWeight(25);
    stroke(random(125,150), random(100), random(125,250));
    line(fromX, fromY, toX, toY);

    x = toX;
    y = toY;

    console.log('(', x, '; ', y, ')');
}

function rotate2() {
    currentAngle += angle % 360;
}
