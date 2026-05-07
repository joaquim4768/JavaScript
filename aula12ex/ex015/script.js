function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var fano = window.document.getElementById('iano');
    var res = document.querySelector('div#res p');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!');
    }
    else{
        var sex = document.getElementsByName('sex');
        var idade = ano - Number(fano.value);
        res.textContent = `Idade calculada: ${idade}`;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/criancaMenino.jpg');
            }
            else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemMenino.jpg');
            }
            else if(idade < 50){
                img.setAttribute('src', 'imagens/adultoHomem.jpg');
            }
            else{
                img.setAttribute('src', 'imagens/idosoHomem.jpg');
            }
        }
        else if (sex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/criancaMenina.jpg');
            }
            else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemMenina.jpg');
            }
            else if(idade < 50){
                img.setAttribute('src', 'imagens/adultoMulher.jpg');
            }
            else{
                img.setAttribute('src', 'imagens/idosoMulher.jpg');
            }
        }
        res.textContent = `Detectamos ${genero} com ${idade} anos`;
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
}