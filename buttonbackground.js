function randcolor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
buttons = document.querySelectorAll('button')
for (let btn of buttons) {
    btn.addEventListener('click',colorize)
}
function colorize() {
    this.style.backgroundColor = randcolor();
    this.style.color = randcolor()
}
// this here refers to the something that the eventhandler acted upon