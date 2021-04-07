function consultar() {
    var nome = window.document.getElementById('nome').value.toUpperCase()
    var pais = window.document.getElementById('pais').value.toUpperCase()
    var res = window.document.querySelector('div#res')

    // .toUpperCase()
    if (pais == 'BRASIL') {
        res.innerHTML = (`<p>${nome} você é <strong>BRASILEIRO</strong></p>.`)
    } else {
        res.innerHTML = (`<p>${nome} você é <strong>ESTRANGEIRO</strong></p>.`)        
    }
}