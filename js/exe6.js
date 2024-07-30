function calcular() {
  var txtv = window.document.querySelector("input#txtvel").value;
  var res = window.document.querySelector("div#res");
  var vel = Number(txtv);

  switch (true) {
    case vel >= 60:
      res.innerHTML = `<p>Você está acima do limite de velocidade da via ${vel}Km/h.</p>`;
      break;
    case vel < 60 && vel >= 30:
      res.innerHTML = `<p>Você está dentro do limite de velocidade da via ${vel}Km/h.</p>`;
      break;
    case vel < 30:
      res.innerHTML = `<p>Você está abaixo do limite de velocidade da via ${vel}Km/h.</p>`;
      break;
  }
}