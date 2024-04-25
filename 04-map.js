const produtos = [
  { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
  { id: 2, nome: 'Coca-Cola', estoque: 50, valor: 9.00 },
  { id: 3, nome: 'Pão', estoque: 150, valor: 1.00 },
];

const valorProduto = produtos.map((produto) => {
  return `<li>${produto.nome} - R$${produto.valor.toFixed(2).replace(".", ",")}, qtd: ${produto.estoque}</li>`
})

console.log(valorProduto)