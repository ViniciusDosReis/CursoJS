function verificar(){
    var year = new Date()
    var ano = year.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Alguma coisa tá errada')
    } else {
        var idade = ano - Number(fano.value)
        var sexradio = document.getElementsByName('radsex')
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexradio[0].checked) {
            gênero = "Homem"
            if (idade > 0 && idade <= 11) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sexradio[1].checked) {
            gênero = "Mulher"
            if (idade > 0 && idade <= 11) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}