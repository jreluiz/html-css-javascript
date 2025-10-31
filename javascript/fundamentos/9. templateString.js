const nome = 'Rebeca'
nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo)
const sobrenome = 'Silva'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome} ${sobrenome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)