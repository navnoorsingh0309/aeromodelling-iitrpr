var card = document.getElementsByClassName("card");
var bounds;
function BubblyFunc(e, n) {
    bounds = card[n].getBoundingClientRect();
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var leftX = mouseX - bounds.left;
    var leftY = mouseY - bounds.top;
    var centerX = leftX - bounds.width/2;
    var centerY = leftY - bounds.height/2;
    var distance = Math.sqrt(centerX**2 + centerY**2);
    card[n].style.transform = "scale3d(1.07, 1.07, 1.07) rotate3d("+centerX/10+","+centerY/10+", 0, "+(Math.log(distance)*2)+"deg)";
}
function BubblyOut(n) {
    card[n].style.transform = "";
}
