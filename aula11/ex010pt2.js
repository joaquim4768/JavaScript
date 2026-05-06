var pais = window.document.getElementById('ipais');
var botao = window.document.getElementById('ibotao');
var resposta = window.document.querySelector('div#iresposta p')

botao.addEventListener('click', verificar);

function verificar(){
    let valorPais = pais.value.trim().toLowerCase();

    if(valorPais == "brasil" || valorPais == "brazil"){
        resposta.textContent = 'Você é brasileiro';
    }
    else{
        resposta.textContent= 'Você é estrangeiro';
    }
}