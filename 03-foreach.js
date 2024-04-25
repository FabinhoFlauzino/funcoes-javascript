const produtos = [
  { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
  { id: 2, nome: 'Coca-Cola', estoque: 50, valor: 9.00 },
  { id: 3, nome: 'Pão', estoque: 150, valor: 1.00 },
];

produtos.forEach((item) => {
  console.log(item.nome)
})

const loop = (item) => console.log(`${item.id} - ${item.nome} R$${item.valor}`)

produtos.forEach(loop)