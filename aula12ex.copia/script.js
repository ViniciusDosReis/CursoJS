function verificar(){
    var year = new Date()
    var ano = year.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Alguma coisa tá errada')
    } else {
        var idade = ano - Number(fano.value)
        
    }
}