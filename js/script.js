let input = document.querySelector('input[name=tarefa]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas() {

    lista.innerHTML = ''
    input.value = ''
    // for(x in tarefas) console.log(tarefas[x])
    for (tareValue of tarefas) {

        let itemLista = document.createElement('li')
        itemLista.setAttribute('class', 'list-group-item list-group-item-action')

        itemLista.onclick = function() {
            deletarTarefa(this)
        }

        let itemText = document.createTextNode(tareValue)
        itemLista.appendChild(itemText)
        lista.appendChild(itemLista)

    }
}

renderizarTarefas()

btn.onclick = function () {

    let novaTarefa = input.value
    if (novaTarefa !== '') {
        tarefas.push(novaTarefa)
        renderizarTarefas()
        removeSpans()
        salvarDadosNoStorage()


    } else {
        removeSpans()
        let card = document.querySelector('.card')
        let span = document.createElement('span')
        span.setAttribute('class', 'alert alert-warning')
        let msg = document.createTextNode('Você precisa informar a tarefa')
        span.appendChild(msg)
        card.appendChild(span)
    }

}

function removeSpans() {
    let spans = document.querySelectorAll('span')
    let card = document.querySelector('.card')
    for (let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i])
    }

}

function deletarTarefa(xuxa) {

    tarefas.splice(tarefas.indexOf(xuxa.textContent), 1)

    salvarDadosNoStorage()
    renderizarTarefas()

}

function salvarDadosNoStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}









