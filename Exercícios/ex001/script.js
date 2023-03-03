var num1 = prompt('Digite um número: ');
var operacao = prompt('Digite soma ou sub: ');
var num2 = prompt('Digite um novo número: ');

function calc(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var res = 0;

    if (operacao == 'soma'){
        res = num1 + num2;
    }

    if(operacao == 'sub'){
        res = num1 - num2;
    }

    return res;
}
document.write(`O resultado da operação é: ${calc(num1, num2, operacao)}`);