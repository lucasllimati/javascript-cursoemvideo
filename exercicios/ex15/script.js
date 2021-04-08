function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = window.document.getElementsByName('radiosex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        // res.innerHTML = `Idade calculada: ${idade} anos.`

        if (formSex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './images/menino.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', './images/jovemm.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', './images/homem.png')
            } else {
                // Idoso
                img.setAttribute('src', './images/idosom.png')
            }
        } else if (formSex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './images/menina.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', './images/jovemf.png')
            } else if (idade < 50){
                // Adulta
                img.setAttribute('src', './images/mulher.png')
            } else {
                // Idosa
                img.setAttribute('src', './images/idosaf.png')
            }
            
        }
        // res.style.textAlign = 'center' centralizar texto (porém ja foi feito no CSS)
        res.innerHTML = `Detectamos o sexo <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.append(img)

    }
}