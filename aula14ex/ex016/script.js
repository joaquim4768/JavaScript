var inicioI = window.document.getElementById('inicio');
var fimI = window.document.getElementById('fim');
var passoI = window.document.getElementById('passo');
var enviar = window.document.getElementById('enviar');
var resultado = window.document.querySelector('div#resultado p');

enviar.addEventListener('click', contar);

function contar(){
    if(inicioI.value == "" || fimI.value == "" || passoI.value == "" || passoI.value <= 0){
        resultado.textContent = "Preencha todos os campos corretamente!";
        return;
    }

    let inicio = Number(inicioI.value);
    let fim = Number(fimI.value);
    let passo = Number(passoI.value);

    resultado.textContent = "";
    
    for(i = inicio; i <= fim; i += passo){
        resultado.textContent += `${i} \u{1F449}`;
    }
    resultado.textContent += `\u{1F3C1} Fim`
}
