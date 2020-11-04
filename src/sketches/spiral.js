export default function spiralSketch(p) {
    var canvasWidth = 0;
    var canvasHeight = 0;

    var x = 0;
    var y = 0;
    var stepStep = 3;
    var currentStep = 3;
    var angle = 70;
    var currentAngle = 70;

    p.setup = function() {
        x = canvasWidth / 2;
        y = canvasHeight / 2;
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

    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
        if (props.canvasWidth !== null) {
            canvasWidth = props.canvasWidth;
        }
        if (props.canvasHeight !== null) {
            canvasHeight = props.canvasHeight;
        }
        p.setup();
        p.draw();
    }
}