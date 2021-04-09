function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        /* 
        Site de emojis
        https://unicode.org/emoji/charts/full-emoji-list.html

        Codigo site: U+1F929
        Codigo JavaScript: \u{codigo}    codigo apos o '+'
        Ex: \u{1F929}
        */

        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f) {
            // Contagem crescente
            for(let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }else {
            // Contagem descrescente
            for(let cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
   
}