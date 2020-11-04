export default function welcomeSketch(p) {

    let canvasWidth = 0;
    let canvasHeight = 0;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background('#292929');
        p.textSize(canvasWidth / 5);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill('white');
        p.text('^', canvasHeight / 2, canvasHeight / 2 - canvasHeight / 8);
        p.text('¦', canvasHeight / 2, canvasHeight / 2);
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