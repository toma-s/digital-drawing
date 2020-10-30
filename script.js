
var modes = ['Spiral'];
var currentSketch;

function init() {
    // setTriangles();
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
    currentSketch.draw();
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

function clearUpCanvas() {
    if (currentSketch) {
        currentSketch.remove();
        let canvasNode = document.getElementById('canvas');
        if (canvasNode.firstElementChild) {
            canvasNode.firstElementChild.remove();
        }
    }
}

let triangleSketch = function(f) {

}

let spiralSketch = function(f) {
    let x = y = 200;
    let stepStep = currentStep = 3;
    let angle = currentAngle = 70;

    f.setup = function() {
        f.createCanvas(400, 400);
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
};
