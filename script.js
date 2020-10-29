
var modes = ['Spiral'];

function setSpiral() {
    console.log('set spiral');

    let element = document.createElement('div');
    element.id = 'canvasSpiral';
    window.document.getElementById('canvas').appendChild(element);
    new p5(spiralSketch, element);
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
