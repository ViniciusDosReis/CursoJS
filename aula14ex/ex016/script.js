function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    let emoji = '\u{1F449}'
    
    res.innerHTML = "Contando: <br>"
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Impossivel contar!"
    } else  {

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //Contagem crescente
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} ${emoji}`
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} ${emoji}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}   