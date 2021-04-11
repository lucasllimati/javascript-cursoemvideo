/*PRIMEIRO MÉTODO DE EXIBIÇÃO*/

let num = [5, 8, 2, 9, 3]
// Adicionando o número 1 no final do vetor.
num.push(1)
console.log('-- PRIMEIRO MÉTODO --')
console.log(`Nosso vetor é o ${num}.`)
console.log(`O vetor tem ${num.length} posições.`)
// Ordenando os elementos do vetor
num.sort()
console.log(`Nosso vetor ordenado é ${num}.`)
console.log(num)

// Buscando um valor no vetor
let valor = num.indexOf(8)
if (valor == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${valor}.`)
}

/*SEGUNDO MÉTODO DE EXIBIÇÃO*/

let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

console.log('-- SEGUNDO MÉTODO --')
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

/*TERCEIRO MÉTODO DE EXIBIÇÃO*/
console.log('-- TERCEIRO MÉTODO --')

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)    
}