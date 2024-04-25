const diaSemana = [
  "domingo",
  "segunda-feira",
];

//função para inserir valor no array
diaSemana.push("terça-feira");
/**
 * Saída [ 'domingo', 'segunda-feira', 'terça-feira' ]
 */

//função para percorrer valores do array
diaSemana.map((dia) => { 
  console.log(dia);
})
/**
 * Saída
 * domingo
  segunda-feira
  terça-feira
 */
