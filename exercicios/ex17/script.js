function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        tab.innerHTML = '<option>Digite um número acima</option>'
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${n}`
            tab.appendChild(item)
            c++
        }

    }
}

// res.innerHTML = 'Contando: <br>'
//         let i = Number(inicio.value)
//         let f = Number(fim.value)
//         let p = Number(passo.value)
        
//         if(p <= 0){
//             window.alert('Passo inválido! Considerando PASSO 1')
//             p = 1
//         }

//         if(i < f) {
//             // Contagem crescente
//             for(let cont = i; cont <= f; cont += p) {
//                 res.innerHTML += ` ${cont} \u{1F449}`
//             }