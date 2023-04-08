const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

for (item of btn) {
    item.addEventListener("click",
        (e) => {
            btnText = e.target.innerText;
            if (btnText == "x") {
                btnText = "*"
            } else if (btnText == "÷") {
                btnText = "/"
            }
            screen.value += btnText;
        })
}
function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function e() {
    screen.value = 2.718;
}
function pi() {
    screen.value = 3.14159;
}
function log() {
    screen.value = Math.log(screen.value);
}
function fact() {
    if (screen.value == "" || screen.value < 0) {
        screen.value = "undefined";
    } else {
        var num = screen.value,
            f = 1;
        for (var i = 1; i <= num; i++) {
            f = f * i;
        }
        screen.value = f;
    }
}
function clearEntry() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

window.onload = () => {
    screen.value = "";
}