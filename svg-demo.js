console.log('loaded the script');

let draw = SVG('drawing').size(480, 480);
let rectWidth = 100;
let rectHeight= 100;
let rect = draw.rect(100, 100).fill('purple');

let x = 0;
let y = 0;
let rectDirection = 'right';

function moveRectangle(direction) {
    if (rectDirection == 'right') {
        (x > 480 - rectWidth) 
        x = x + 20;
        y = y + 20;
        rect.move(x, y);
       } else if (rectDirection == 'left') {
           x = x - 20;
       y = y - 20
       rect.move (x, y); }
}
document.getElementById('move-rectangle-button').onclick = function() {
    console.log('moving rectangle');
    if (x > 480 - rectWidth) {
        console.log('running off');
        rectDirection = 'left';
    }
    
    if (x < 0 ) {
        rectDirection = 'right';
    }
    
}
