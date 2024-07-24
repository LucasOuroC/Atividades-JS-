let amigo = {nome: 'Jose', 
  sexo: 'M',
  peso: 90,
  engordar(p){
    console.log('Engordou!!')
    this.peso += p 
  }
}
amigo.engordar(2)

console.log(`Seu nome é ${amigo.nome} e seu peso atual é de ${amigo.peso}Kg`)