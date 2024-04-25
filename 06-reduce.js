const carros = [
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
  { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

const nomeCarros = carros.reduce((nomes, carro)=> {
  return nomes + carro.modelo + ', '
}, '')

console.log(nomeCarros.slice(0, -2))

const itensCarrinho = [
  { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
  { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

const valorAPagar = itensCarrinho.reduce((total, itemCarrinho) => {
  const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  return total + valorTotal;
}, 0)

console.log(valorAPagar)