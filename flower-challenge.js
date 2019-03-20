
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

document.getElementById('start-button').onclick = flower;