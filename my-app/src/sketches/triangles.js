export default function trianglesSketch(p) {
    var angle = 0;
    var degreesMode = true;
    var canvasWidth = 0;
    var canvasHeight = 0;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background('#292929');
        p.frameRate(30);
        p.noFill();
        p.angleMode(p.DEGREES);
    }

    p.draw = function() {
        if (degreesMode) {
            p.angleMode(p.DEGREES);
            p.stroke(p.random(200,230), p.random(200,250), p.random(0));
        } else {
            p.angleMode(p.RADIANS);
            p.stroke('#292929');
        }
        p.translate(canvasWidth / 2, canvasHeight / 2);
        p.rotate(angle);

        p.triangle(-160, 160, 0, -160, 160, 160);

        angle += 1 % 360;
        if (angle > 360) {
            angle = 0;
            degreesMode = !degreesMode;
        }
    }

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