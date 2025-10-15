/*
 * EXERCÍCIO 2: Sistema de Classificação de Produtos
 * 
 * Você deve criar um sistema que classifica produtos por preço.
 * 
 * 1. Crie um array de objetos 'produtos' com as propriedades:
 *    - nome
 *    - preco
 *    - categoria
 * 
 * 2. Crie uma função 'classificarPorPreco' que recebe o preço e retorna
 *    uma classificação usando switch:
 *    - "Econômico" para preços até 50
 *    - "Médio" para preços de 51 até 200
 *    - "Premium" para preços de 201 até 500
 *    - "Luxo" para preços acima de 500
 * 
 * 3. Use um loop for para percorrer o array de produtos e adicionar
 *    a propriedade 'classificacao' em cada produto
 * 
 * 4. Use destructuring para extrair nome e classificacao de cada produto
 *    e imprima no console
 */

// Seu código aqui:

const produtos = [
    { nome: 'Mouse', preco: 45.90, categoria: 'Informática' },
    { nome: 'Teclado Mecânico', preco: 350.00, categoria: 'Informática' },
    { nome: 'Monitor 4K', preco: 1200.00, categoria: 'Informática' },
    { nome: 'Webcam', preco: 180.00, categoria: 'Periféricos' }
]

function classificarPorPreco(preco) {
    // Implemente aqui usando switch
}

// Complete o código para adicionar classificação e imprimir
