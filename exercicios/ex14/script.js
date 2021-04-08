function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    
    if (hora >=0 && hora < 12) {
        // Bom dia
        msg.innerHTML += `Bom dia!`
        img.src = './images/manha.png'
        document.body.style.background = '#4dabef'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        msg.innerHTML += `Boa tarde!`
        img.src = './images/tarde.png'
        document.body.style.background = '#feb504'
    } else {
        // Boa noite
        msg.innerHTML += `Boa noite!`
        img.src = './images/noite.png'
        document.body.style.background = '#2f414f'
    }
    msg.innerHTML += ` Agora são <strong>${hora}</strong> horas.`
}