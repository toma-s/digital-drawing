var currentSketch;
var canvasWidth = 20;
var canvasHeight = 20;

window.onload = function() {
    setCanvasSize();
}

function setCanvasSize() {
    containerElement = window.document.getElementById('container');
    size = Math.min(containerElement.offsetWidth, containerElement.offsetHeight) - 8;
    canvasWidth = canvasHeight = size;
    let canvasElement = window.document.getElementById('canvas');
    canvasElement.style.width = `${size}px`;
    canvasElement.style.height = `${size}px`;
    canvasElement.style.display = 'block';
}



function setSpiral() {
    if (document.getElementById('canvasSpiral')) {
        return;
    }

    clearUpCanvas();

    let element = document.createElement('div');
    element.id = 'canvasSpiral';
    window.document.getElementById('canvas').appendChild(element);
    currentSketch = new p5(spiralSketch, element);
}

function setTriangles() {
    if (document.getElementById('canvasTriangles')) {
        return;
    }

    clearUpCanvas();

    let element = document.createElement('div');
    element.id = 'canvasTriangles';
    window.document.getElementById('canvas').appendChild(element);
    currentSketch = new p5(triangleSketch, element);
}

function setCircle() {
    if (document.getElementById('canvasCircle')) {
        return;
    }

    clearUpCanvas();

    let element = document.createElement('div');
    element.id = 'canvasCircle';
    window.document.getElementById('canvas').appendChild(element);
    currentSketch = new p5(circleSketch, element);
}

function setX() {
    if (document.getElementById('canvasX')) {
        return;
    }

    clearUpCanvas();

    let element = document.createElement('div');
    element.id = 'canvasX';
    window.document.getElementById('canvas').appendChild(element);
    currentSketch = new p5(sketchX, element);
}



function clearUpCanvas() {
    if (currentSketch) {
        currentSketch.remove();
        let canvasNode = document.getElementById('canvas');
        if (canvasNode.firstElementChild) {
            canvasNode.firstElementChild.remove();
        }
    }
}



let spiralSketch = function(f) {
    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
    let stepStep = currentStep = 3;
    let angle = currentAngle = 70;

    f.setup = function() {
        f.createCanvas(canvasWidth, canvasHeight);
        f.background('#292929');
        f.frameRate(30);
    };

    f.draw = function() {
        f.forward(currentStep);
        f.rotateRight();

        currentStep += stepStep;
        if (currentStep > 500) {
            f.noLoop();
        }
    };

    f.forward = function() {
        fromX = x;
        fromY = y;
        
        stepX = Math.round((currentStep * Math.sin(Math.PI * 2 * currentAngle / 360)));
        toX =  fromX + stepX;
        stepY = Math.round((currentStep * Math.cos(Math.PI * 2 * currentAngle / 360)));
        toY =  fromY + stepY;

        f.stroke(f.random(125,150), f.random(100), f.random(125,250));
        f.line(fromX, fromY, toX, toY);

        x = toX;
        y = toY;
    };

    f.rotateRight = function() {
        currentAngle += angle % 360;
    };
}

let triangleSketch = function(f) {
    let angle = 0;
    let degreesMode = true;

    f.setup = function() {
        f.createCanvas(canvasWidth, canvasHeight);
        f.background('#292929');
        f.frameRate(30);
        f.noFill();
        f.angleMode(f.DEGREES);
    }

    f.draw = function() {
        if (degreesMode) {
            f.angleMode(f.DEGREES);
            f.stroke(f.random(200,230), f.random(200,250), f.random(0));
        } else {
            f.angleMode(f.RADIANS);
            f.stroke('#292929');
        }
        f.translate(canvasWidth / 2, canvasHeight / 2);
        f.rotate(angle);

        f.triangle(-160, 160, 0, -160, 160, 160);

        angle += 1 % 360;
        if (angle > 360) {
            angle = 0;
            degreesMode = !degreesMode;
        }
    }
}

let circleSketch = function(f) {
    let angle = 0;
    let degreesMode = true;

    f.setup = function() {
        f.createCanvas(canvasWidth, canvasHeight);
        f.background('#292929');
        f.frameRate(30);
        f.noFill();
        f.angleMode(f.DEGREES);
    }

    f.draw = function() {
        if (degreesMode) {
            f.angleMode(f.DEGREES);
            f.stroke(f.random(210,250), f.random(30), f.random(50, 100));
        } else {
            f.angleMode(f.RADIANS);
            f.stroke('#292929');
        }
        f.translate(canvasWidth / 2, canvasHeight / 2);
        f.rotate(angle);

        f.triangle(-200, 200, 0, 0, 200, 200);

        angle += 1 % 360;
        if (angle > 360) {
            angle = 0;
            degreesMode = !degreesMode;
        }
    }
}

let sketchX = function(f) {
    f.setup = function() {
        f.createCanvas(canvasWidth, canvasHeight);
        f.background('#292929');
        f.frameRate(30);
    };
    
    f.mousePressed = function() {
        f.point(f.mouseX, f.mouseY);
    }
}
