function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    
    res.innerHTML = "Contando:"
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    for (var c = i; c <= f; c = c + p) {
        res.innerHTML += `${c}`
    }
}   