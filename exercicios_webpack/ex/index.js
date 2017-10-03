const produto = {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: 0.05
}


function clone(objeto){
    return { ...objeto}
}


novoProduto = clone(produto);
novoProduto.nome = 'Caneta BIC Azul';
console.log(produto, novoProduto);  