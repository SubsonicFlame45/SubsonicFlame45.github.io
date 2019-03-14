//var draw = SVG('drawing').size(150, 150);
//var rect = draw.circle(60).fill('purple').move(20, 20); 
//^^^ for drawing basic circles, edit draw.circle() to change size

function flower() {
    var draw = SVG('drawing').size(150, 150);
    var rect = draw.circle(100).fill('#f06').move(20, 20)
}

document.getElementById('start-button').onclick