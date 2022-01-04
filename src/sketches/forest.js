import { BACKGROUND_COLOR } from './constants';

export default function forestSketch(p) {
    var canvas;
    var canvasWidth = 0;
    var canvasHeight = 0;
    let a = 70;
    var theta = p.radians(a);
    var sizeChange = 0.76;

    p.setup = function() {
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        p.background(BACKGROUND_COLOR);
        p.frameRate(30);
        p.noLoop();
    };

    p.draw = function() {
        p.push();
        p.translate(canvasWidth/2,canvasHeight*0.70);

        p.stroke('rgb(45,45,45)')
        p.drawPine(250);
        
        p.stroke('rgb(65,85,135)')
        p.drawPine(120);
        p.pop();

        p.push();
        p.stroke('#5F8A64')
        p.translate(canvasWidth * 0.62, canvasHeight * 0.66); // (less is right, more is left; less is higher, more is lower)
        p.horizontal_BigToSmall(180);
        p.pop();

        p.push();
        p.stroke('#5F8A64')
        p.translate(canvasWidth * 0.38, canvasHeight * 0.66); // (less is left, more is right; less is lower, more is higher)
        p.horizontal_BigToSmall_Left(180);
        p.pop();

        // p.save(canvas, 'forest.jpg');

        p.noLoop();
    };

    p.drawPine = function(h) {
        p.branch(h);
        p.branch2(h);
    }

    p.branch = function(h) {
        h *= sizeChange;

        if (h > 2) {
            p.push();
            // p.rotate(theta);
            p.line(0, 0, 0, -h);  
            p.translate(0, -h); 
            p.branch(h);       
            p.pop(); 

            p.push();
            p.rotate(-theta);
            p.line(0, 0, 0, -h);
            // p.translate(0, -h);
            p.branch(h);
            p.pop();
        }
    }

    p.branch2 = function(h) {
        h *= sizeChange;

        if (h > 2) {
            p.push();
            p.rotate(theta);
            p.line(0, 0, 0, -h);  
            // p.translate(0, -h); 
            p.branch2(h);       
            p.pop(); 

            p.push();
            // p.rotate(theta);
            p.line(0, 0, 0, -h);
            p.translate(0, -h);
            p.branch2(h);
            p.pop();
        }
    }

    p.horizontal_BigToSmall = function(h) {
        h *= 0.66;

        if (h > 2) {
            p.push();
            p.rotate(theta);
            p.line(0, 0, 0, h);  
            p.translate(0, h); 
            p.branch(h);       
            p.pop(); 

            p.push();
            // p.rotate(theta);
            // p.line(0, 0, 0, h);
            // p.translate(0, h);
            // p.branch(h);
            p.pop();
        }
    }

    p.horizontal_BigToSmall_Left = function(h) {
        h *= 0.66;

        if (h > 2) {
            p.push();
            p.rotate(-theta);
            p.line(0, 0, 0, h);  
            p.translate(0, h); 
            p.branch2(h);       
            p.pop(); 

            p.push();
            // p.rotate(theta);
            // p.line(0, 0, 0, h);
            // p.translate(0, h);
            // p.branch(h);
            p.pop();
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