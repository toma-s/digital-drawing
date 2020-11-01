export default function welcomeSketch(p) {

    let canvasWidth = 400;
    let canvasHeight = 400;

    p.setup = function() {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background('#292929');
        p.textSize(canvasWidth / 5);
        p.textAlign(p.CENTER, p.CENTER);
        p.fill('white');
        p.text('^', canvasHeight / 2, canvasHeight / 2 - canvasHeight / 8);
        p.text('¦', canvasHeight / 2, canvasHeight / 2);
    }
}