let num1 = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num1.value) && !inLista(num1.value, valores)){
        valores.push(Number(num1.value))
        var item = document.createElement('option')
        item.text = `Valor ${num1.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num1.value = ''
    num1.focus()
}

function finalizar() {
    if (valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    } else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var média = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
            
        }
        média = soma / valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}</p>`

    }
