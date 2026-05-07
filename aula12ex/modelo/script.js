
window.addEventListener('load', carregar);

function carregar(){
    var msg = window.document.querySelector('div#msg p');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.textContent = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.backgroundColor = '#f3dbad'
    }
    else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/fototarde.jpg'
        document.body.style.backgroundColor = '#e0844a';
    }
    else{
        //Boa noite
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.backgroundColor = '#333533';
    }
}
