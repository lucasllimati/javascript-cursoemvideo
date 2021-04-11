function parimpar(n) {
    if (n % 2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

// Exibir utilizando uma varíavel
let res = parimpar(4)
console.log(res)

// Exibir direto
console.log(parimpar(4))