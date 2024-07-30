function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.src =  '/img/imagem manha.png'
    document.body.style.background = 'rgb(68, 163, 226)'
  } else if (hora >= 12 && hora < 18) {
    img.src =  '/img/imagem tarde.png'
    document.body.style.background = 'rgb(236, 165, 71)'
  } else {
    img.src = '/img/imagem noite.png'
    document.body.style.background = 'rgb(15, 14, 44)'
  }

}


