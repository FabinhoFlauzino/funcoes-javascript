const dataAtual = new Date();

const hora = dataAtual.getHours();

let msg = "";

if(hora < 6 || hora >= 18){
  msg = "Boa noite"
} else if(hora >=6 && hora < 12) {
  msg = "Bom dia"
} else {
  msg = "Boa tarde"
}

console.log(msg)