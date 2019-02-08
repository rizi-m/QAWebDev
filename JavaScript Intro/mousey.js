const onMouseMove = function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const mouseFollower = document.getElementById("mouse-follower");
    
    mouseFollower.style.top = y + 10;
    mouseFollower.style.left = x + 10;
}

const onKeyDown = function(event) {
    const key = event.keyCode;
    const title = document.getElementById("mouse-title");
    const fontSize = parseInt(title.style.fontSize);
    if (key == 17) { //Ctrl key
        title.style.fontSize = fontSize + 1;
    }
    if (key == 18 && fontSize > 0) { //Alt key
        title.style.fontSize = fontSize - 1;
    }
}

const mouseLeftInput = function() {
    const input = document.getElementById("user-input-mouse-text");
    const title = document.getElementById("mouse-title");
    title.innerHTML = input.value;
}

document.getElementById("mouse-title").style.fontSize = 24;
const body = document.getElementById("mousey-body");

body.addEventListener("mousemove", onMouseMove);
body.addEventListener("keydown", onKeyDown);