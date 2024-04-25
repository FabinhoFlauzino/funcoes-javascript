const diasDaSemana = [
  "domingo", 
  "segunda-feira", 
  "terça-feira",
  "quarta-feira", 
  "quinta-feira", 
  "sexta-feira"
];

diasDaSemana.push("sábado");
diasDaSemana.splice(1, 2); //[ 'domingo', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado' ]
const totalElementos = diasDaSemana.length; 
diasDaSemana.splice(0, totalElementos)

console.log(diasDaSemana)