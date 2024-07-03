const btn = document.querySelector('.clrChange')
const h1 = document.querySelector('h1')
h1.style.textAlign = 'center'
btn.addEventListener('click', () => {
    let r = Math.floor( Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})