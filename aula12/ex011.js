var idade = 67
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if(idade < 18 | idade > 65){ // forma simplificada
    // Esta implicito que a idade é maior ou igual a 16, segue abaixo a forma completa (com a mesma comparação)
    // if(idade >= 16 && idade < 18){
    console.log('Voto facultativo (opcional)') 
} else {
    console.log('Voto obrigatório')
}
