/*
Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let hodor = document.querySelector("#hodor")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let hodorOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
hodor.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaHodor() {
    let txtHodor = document.querySelector('#txtHodor')

    if(hodor.value.indexOf("h") == 1 || hodor.value.indexOf("o") == 1) {
        txtHodor.innerHTML = 'Hodor'
        txtHodor.style.color = 'green'
        hodorOk = true
    }else{
        txtHodor.innerHTML = 'Hodor'
        txtHodor.style.color = 'red'
    }
    
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true & emailOk == true & hodorOk == true & assuntoOk == true) {
        alert('Formulário enviado com sucesso')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}