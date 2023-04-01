function contar() {
    var txtini = document.getElementById('ini')
    var txtfim = document.getElementById('fim')
    var txtpas = document.getElementById('pas')
    var res = document.getElementById('res')
    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pas = Number(txtpas.value)
    if (ini == 0) {
        res.innerText = 'Digite um número válido diferente de 0!'    
    } else if (pas == 0) {
        res.innerText = 'Eu ainda não consigo advinhar o número de passos que você deseja!'
    } else  {
        res.innerHTML = 'Contando: <br>'
        if (ini < fim) {
           for (let c = ini; c <= fim; c+= pas){
            res.innerHTML += `${c} 👉 `
            } 
        } else{
           for (let c = ini; c >= fim; c -= pas){
            res.innerHTML += `${c} 👉 `    
           }    
        }
        res.innerHTML += '🏁'
    }

}
