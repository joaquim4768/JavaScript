var inputvel = document.getElementById('vel');
var button = document.getElementById('button');
var resultado = document.querySelector('#resultado p');

button.addEventListener('click', calcular);

function calcular() {
    var vel = Number(inputvel.value);
    resultado.innerHTML = `Sua velocidade atual é de ${vel} Km/h`;
    if(vel > 60){
        resultado.innerHTML +=  `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`;
    }
    resultado.innerHTML += `<p>Diriga sempre com cinto de segurança!</p>`;
}