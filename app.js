alert('Boas vinda ao jogo do número secreto!');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// console.log('Valor do chute: ' + chute);
// console.log('Resultado do comparação: ', chute == numeroSecreto);
//console.log('Valor do número secreto: ', numeroSecreto);


while(chute != numeroSecreto){
    chute = prompt (`Digite um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if(chute == numeroSecreto){
    break;
    }
    // caso contrário
    else {
        if(chute > numeroSecreto){
            alert(`O valor é menor que ${chute}`);
        }else{
                alert(`O valor é maior que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas ++;   

    }
}  

//operador ternário

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// if(tentativas > 1){
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }
