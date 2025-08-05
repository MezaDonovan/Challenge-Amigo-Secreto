// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let cont = 0;


function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo != ''){

        amigos.push(nombreAmigo);
        let listaHtml = '';
        for (let amigo of amigos) {
            listaHtml += `<li>${amigo}</li>`;
        }
        asignarAmigosHtml('#listaAmigos', listaHtml);
        limpiarCaja();

    }else{
        alert('Ingresa un nombre de amigo valido');
        limpiarCaja();
    }
    
    console.log(amigos);
}


function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function limpiarLista(){
    let listaHtml = document.querySelector('#listaAmigos');
    listaHtml.innerHTML = '';
}


function asignarAmigosHtml(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function sortearAmigo(){

    if(amigos.length != 0){

        let numeroGenerado = Math.floor(Math.random()*amigos.length);
        console.log(numeroGenerado);
        asignarAmigosHtml('#resultado',`El Amigo Secreto es : ${amigos[numeroGenerado]}` );
        limpiarLista();

    }

}