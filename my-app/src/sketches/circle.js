export default function circleSketch(p) {
    let angle = 0;
    let degreesMode = true;
    let canvasWidth = 400;
    let canvasHeight = 400;

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
            p.stroke(p.random(210,250), p.random(30), p.random(50, 100));
        } else {
            p.angleMode(p.RADIANS);
            p.stroke('#292929');
        }
        p.translate(canvasWidth / 2, canvasHeight / 2);
        p.rotate(angle);

        p.triangle(-200, 200, 0, 0, 200, 200);

        angle += 1 % 360;
        if (angle > 360) {
            angle = 0;
            degreesMode = !degreesMode;
        }
    }
}