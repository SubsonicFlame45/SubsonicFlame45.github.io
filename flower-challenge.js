
var draw = SVG('drawing').size(1500, 900);

function flower() {   
    drawFlower(110, 100);
    drawFlower(300, 100);
    drawFlower(500, 100);
    drawFlower(90, 250);
    drawFlower(350, 330);
    drawFlower(500, 300);
    drawFlower(550, 500);
    drawFlower(100, 390);
    drawFlower(240, 460);
    

}
function drawFlower(x, y) {
    let circle = draw.circle(60).fill('#ff9215').center(x, y)
    let ellipse = draw.ellipse(40, 20).fill('#c627bb').center(x - 20, y - 20)
    let ellipse2 = draw.ellipse(40, 20).fill('#c627bb').center(x - 25, y)
    let ellipse3 = draw.ellipse(40, 20).fill('#c627bb').center(x - 20, y + 20)
    let ellipse4 = draw.ellipse(20,40).fill('#c627bb').center(x, y + 25)
    let ellipse5 = draw.ellipse(20,40).fill('#c627bb').center(x, y - 25)
    let ellipse6 = draw.ellipse(40,20).fill('#c627bb').center(x + 20, y + 20)


}

document.getElementById('start-button').onclick = flower;