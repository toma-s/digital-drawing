import { BACKGROUND_COLOR } from './constants';

export default function sketchDrag (p) {
    var pointsBuffer = [];
    let canvasWidth = 400;
    let canvasHeight = 400;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(BACKGROUND_COLOR);
        p.frameRate(30);
        p.noLoop();
    };

    p.draw = function() {
        p.textSize(canvasWidth / 10);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill('white');
        p.text('drag to draw', canvasHeight / 2, canvasHeight / 2);
        p.noLoop();
    }
    
    p.mouseDragged = function() {
        p.background(BACKGROUND_COLOR);

        p.stroke('#fff');
        p.point(p.mouseX, p.mouseY);

        pointsBuffer.push([p.mouseX, p.mouseY]);
        if (pointsBuffer.length > 300) {
            pointsBuffer.shift();
        }

        for (let i = 0; i < pointsBuffer.length; i++) {
            pointsBuffer[i][0] += 1;
            p.strokeWeight(p.random(1,10));
            p.stroke(1*i, 1*i, 1*i);
            p.point(pointsBuffer[i][0], pointsBuffer[i][1]);
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