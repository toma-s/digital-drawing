export default function spiralSketch(p) {
    let canvasWidth = 400;
    let canvasHeight = 400;

    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
    let stepStep = 3;
    let currentStep = 3;
    let angle = 70;
    let currentAngle = 70;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background('#292929');
        p.frameRate(30);
    };

    p.draw = function() {
        p.forward(currentStep);
        p.rotateRight();

        currentStep += stepStep;
        if (currentStep > 500) {
            p.noLoop();
        }
    };

    p.forward = function() {
        let fromX = x;
        let fromY = y;
        
        let stepX = Math.round((currentStep * Math.sin(Math.PI * 2 * currentAngle / 360)));
        let toX =  fromX + stepX;
        let stepY = Math.round((currentStep * Math.cos(Math.PI * 2 * currentAngle / 360)));
        let toY =  fromY + stepY;

        p.stroke(p.random(125,150), p.random(100), p.random(125,250));
        p.line(fromX, fromY, toX, toY);

        x = toX;
        y = toY;
    };

    p.rotateRight = function() {
        currentAngle += angle % 360;
    };
}