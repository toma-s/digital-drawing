import { BACKGROUND_COLOR } from './constants';

export default function welcomeSketch(p) {

    let canvasWidth = 0;
    let canvasHeight = 0;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(BACKGROUND_COLOR);
        p.textSize(canvasWidth / 5);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill('white');
        p.text('^', canvasHeight / 2, canvasHeight / 2 - canvasHeight / 8);
        p.text('¦', canvasHeight / 2, canvasHeight / 2);
        p.noLoop();
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
        if (props.canvasWidth !== null) {
            canvasWidth = props.canvasWidth;
        }
        if (props.canvasHeight !== null) {
            canvasHeight = props.canvasHeight;
        }
        p.setup();
    }
}