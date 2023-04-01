function gerarTabuada() {
    var txtnum = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    if (txtnum.value.length == 0 ) {
        window.alert('Por favor, digite um número válido e tente novamente.')
    } else{
        var num = Number(txtnum.value)
        var c =1
        tabuada.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }

    }
}