

const canvasWidth = 1000;
const canvasHeight = 1000;
const blockWidth = 40;
const blockHeight = 20;
const numBlocks = 15;
const numRows = 6;

let draw = SVG('drawing').size(canvasWidth, canvasHeight);

const WHITE = '#fff';
const BLACK = '#000';

for (let i = 0; i <numRows; i++ ){
    let rowY = i * blockHeight;

    for (let j = 0; j < numBlocks; j++) {
    let blockX = j * blockWidth;
    
    let rect = {
        element: draw.rect(blockWidth, blockHeight),
        color: WHITE
    };

    rect.element.move(blockX, rowY);
    rect.element.stroke(BLACK);
    rect.element.fill(WHITE);
    }
}
x = 10
y = 10
for (let a = 0; a < 10; a++) {

}