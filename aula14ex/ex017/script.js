var numI = window.document.getElementById('num');
var botao = window.document.getElementById('botao');
var res = window.document.getElementById('res');

botao.addEventListener('click', tabuada);

function tabuada(){
    let num = Number(numI.value);

    res.value = "";

    for(let i = 0 ;i < 11; i++){
        res.value += `${num} * ${i} = ${num * i}\n`; 
    }
}