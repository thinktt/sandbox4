let el = document.querySelector('.red')
let colors = ['indigo','red','green','yellow','cyan','hotpink']
window.el = el


let count = 2 
let countUp = () => {
  el.innerText = count
  el.style.color = colors[count % colors.length]
  el.style.fontSize = `${count}px`
  count = count + 1
}

setInterval(countUp, 125)
