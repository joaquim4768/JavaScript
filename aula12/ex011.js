var idade = 21;

console.log(`Você tem ${idade} anos`);
if(idade < 16 && idade >= 0){
    console.log('Não vota');
}
else if(idade < 18 && idade >= 0 || idade > 70){
    console.log('Voto opcional');
} 
else if (idade >= 18){
    console.log('Voto obrigatório');
}
else{
    console.log('Não digitou número ou número inválido');
}