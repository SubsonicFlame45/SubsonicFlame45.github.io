
var draw = SVG('drawing').size(1500, 900);

function flower() {   
    drawFlower(110, 100);
    drawFlower(300, 90);
    drawFlower(500, 100);
    drawFlower(90, 250);
    drawFlower(350, 330);
    drawFlower(500, 300);
    drawFlower(550, 500);
    drawFlower(100, 390);
    drawFlower(240, 460);
}
function drawFlower(x, y) {
    var line = draw.line(0, 75, 0, 0).move(x , y)
    line.stroke({ color: '#000000', width: 6, linecap: 'square' })
    let ellipse = draw.ellipse(40, 20).fill('#c627bb').center(x - 20, y - 20)
    ellipse.transform({rotation: 30});
    let ellipse2 = draw.ellipse(40, 20).fill('#c627bb').center(x - 25, y)
    let ellipse3 = draw.ellipse(40, 20).fill('#c627bb').center(x - 20, y + 20)
    ellipse3.transform({rotation: 330});
    let ellipse4 = draw.ellipse(20,40).fill('#c627bb').center(x, y + 25)
    let ellipse5 = draw.ellipse(20,40).fill('#c627bb').center(x, y - 25)
    let ellipse6 = draw.ellipse(40,20).fill('#c627bb').center(x + 20, y + 20)
    ellipse6.transform({rotation: 30});
    let ellispe7 = draw.ellipse(40,20).fill('#c627bb').center(x + 20, y)
    let ellispe8 = draw.ellipse(40,20).fill('#c627bb').center(x + 20, y - 20)
    ellispe8.transform({rotation: 150});
    let circle = draw.circle(60).fill('#ff9215').center(x, y)
}
function bee() {
    drawBee(680, 40);
}
function drawBee(x , y) {
    let ellipse = draw.ellipse(45 , 25).fill('#ecd100').center(x, y)
    var line = draw.line(0, 12, 0, 0).move(x , y)
    line.stroke({ color: '#000000', width: 2, linecap:'round'})
    var line = draw.line(0, 11, 0, 0).move(x - 7, y)
    line.stroke({ color: '#000000', width: 2, linecap:'round'})
    var line = draw.line(0, 11, 0, 0).move(x + 7, y)
    line.stroke({ color: '#000000', width: 2, linecap:'round'})
    var line = draw.line(0, 13, 0, 0).move(x + 15, y - 4)
    line.stroke({ color: '#000000', width: 2, linecap:'round'})
    let ellispe2 = draw.ellipse(40, 17).fill('#4dd2cf').center(x + 5, y - 10)
    ellispe2.transform({rotation: 350})
    let circle = draw.circle(18).fill('#000000').center(x - 20, y)
    var line = draw.line(0, 0, 8, 8).move(x - 35, y - 15)
    line.stroke({ color: '#000000', width: 3, linecap:'square'})
    let circle1 = draw.circle(5).fill('#ec0700').center(x - 22, y)
}
document.getElementById('start-button').onclick = flower;
document.getElementById('bee-button').onclick = bee;