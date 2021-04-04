// var s = 'JavaScript'
// s.length
// s.toUpperCase()
// s.toLowerCase()

var nome = window.prompt('Qual é o seu nome? ')
document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculo é <strong>${nome.toUpperCase()}</strong>.<br>`)
document.write(`Seu nome em minúsculo é <strong>${nome.toLowerCase()}</strong>.<br>`)

// var n1 = 1545.5
// undefined
// n1
// 1545.5
// n1.toFixed(2)
// '1545.50'

// Substituição de caracteres
// n1.toFixed(2).replace('.', ',')
// '1545,50'

// FORMATAÇÃO DE MOEDAS

// Moeda REAL BRASILEIRO
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// 'R$ 1.545,50'
// Moeda DOLAR AMERICANO
// n1.toLocaleString('pt-BR', {style: 'currency', currency:'USD'})
// 'US$ 1.545,50'
// Moeda EURO
// n1.toLocaleString('pt-BR', {style: 'currency', currency:'EUR'})
// '€ 1.545,50'