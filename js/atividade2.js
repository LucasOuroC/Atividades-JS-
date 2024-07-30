function calcula() {
  var ano = document.getElementById('ano').value;
  var msg = document.getElementById('msg');
  var sexo = document.getElementsByName('radsex');
  var img = document.getElementById('img');
  var data = new Date();
  var ano_atual = data.getFullYear();
  var idade = ano_atual - Number(ano);

  msg.innerHTML = '';

  if (verifica_ano(ano, ano_atual)) {
    calcula_idade(idade, sexo, img);
  }
}

function verifica_ano(ano, ano_atual) {
  if (ano.length == 0 || Number(ano) > ano_atual) {
    window.alert('[ERRO] Verificar os Dados');
    return false;
  } else {
    window.alert('Tudo OK');
    return true;
  }
}

function calcula_idade(idade, sexo, img) {
  var genero = '';
  for (var i = 0; i < sexo.length; i++) {
    if (sexo[i].checked) {
      genero = sexo[i].value;
      break;
    }
  }

  if (idade >= 0 && idade < 18) {
    if (genero === 'Homem') {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/criançaM.jpg';
    } else {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/criançaF.jpg';
    }
  } else if (idade >= 18 && idade < 60) {
    if (genero === 'Homem') {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/jovemM.jpg';
    } else {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/jovemF.jpg';
    }
  } else {
    if (genero === 'Homem') {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/idosoM.jpg';
    } else {
      msg.innerHTML = `${genero} de ${idade} anos`;
      img.src = '/img/idosoF.jpg';
    }
  }
}
