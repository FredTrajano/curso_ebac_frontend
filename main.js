const form = document.getElementById('formulario');

let numA = document.getElementById('valor-a');
let numB = document.getElementById('valor-b');

let mensagemFinal = '';
console.log(numA.value);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let mensagem = document.querySelector('.mensagem-resultado');

    mensagem.style.display = 'block';

    if (numB.value > numA.value) {
        mensagemFinal = `VALIDO! <br> O valor de 'B' (<b>${numB.value}</b>) é MAIOR do que o valor de 'A' (<b>${numA.value}</b>)`;
        mensagem.innerHTML = mensagemFinal;
        mensagem.classList.remove('erro');
    } else {
        mensagemFinal = `INVALIDO! <br> O valor de 'B' (<b>${numB.value}</b>) é MENOR OU IGUAL ao valor de 'A' (<b>${numA.value}</b>)`;
        mensagem.innerHTML = mensagemFinal;
        mensagem.classList.add('erro');
    }
    numA.value = '';
    numB.value = '';
});
