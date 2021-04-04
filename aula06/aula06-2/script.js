var n1 = Number.parseFloat(window.prompt('Digite um número: '))
var n2 = Number.parseFloat(window.prompt('Digite outro número: '))

// O navegador decide se irá tratar a variável como Inteiro ou Float
// var n1 = Number(window.prompt('Digite um número: '))
// var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2
window.alert('A soma dos valores é ' + String(s))
window.alert(`A soma de ${n1} + ${n2} = ${s}`)
// window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)

// (number + number) para adição
// (string + string) para concatenação


// Tipos de variáveis
// Number.parseInt(n)
// Number.parseFloat(n)
// String(n)
// n.toString()

// Templete string
// `Eu estou aprendendo ${n}`

// var s = 'JavaScript'
// s.length()
// s.toUpperCase()
// s.toLowerCase()
