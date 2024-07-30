var p1 = window.document.getElementsByTagName('p')[0]
window.document.write(`Esta escrito assim: '` + p1.innerHTML + `'`)

var a = window.document.getElementById('area')
a.addEventListener('click', clicou)
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)

function clicou() {
  a.innerText = "Clicou!!!"
  a.style.background = "Orange"
}

function entrou() {
  a.innerText = 'Entrou!!'
  a.style.background = 'Green'
}

function saiu() {
  a.innerText = 'Saiu!!'
  a.style.background = 'Red'
}