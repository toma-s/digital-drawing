import { BACKGROUND_COLOR } from './constants';

export default function trianglesSketch(p) {
    var angle = 0;
    var degreesMode = true;
    var canvasWidth = 0;
    var canvasHeight = 0;
    var initColorsRgb = [41, 0, 41];
    var first = true;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(BACKGROUND_COLOR);
        p.frameRate(60);
        p.noFill();
        p.angleMode(p.DEGREES);
    }

    p.draw = function() {
        if (degreesMode) {
            p.angleMode(p.DEGREES);
            p.stroke(initColorsRgb[0], initColorsRgb[1], initColorsRgb[2]);
            
        } else {
            p.angleMode(p.RADIANS);
            p.stroke(BACKGROUND_COLOR);
        }
        p.translate(canvasWidth / 2, canvasHeight / 2);
        p.rotate(angle);

        var point = 130;
        p.triangle(-point, point, 0, -point, point, point);

        if (initColorsRgb[0] < 250 || initColorsRgb[1] < 250) {
            initColorsRgb = [initColorsRgb[0] + 2, initColorsRgb[1] + 2.15, initColorsRgb[2] + 0.15];
        }
        angle += 1 % 360;
        if (angle > 360) {
            first = false;
            console.log(initColorsRgb)
            angle = 0;
            degreesMode = !degreesMode;
            initColorsRgb = [250, 250, 60];
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