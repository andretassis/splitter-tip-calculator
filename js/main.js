// Pega os valores dos inputs do usuário
var conta = document.getElementById('bill')
var pessoa = document.getElementById('people')

// Reconhece o botão clicado e adiciona um evento de clique que chamará a função de cálculo do percentual
const btn5 = document.getElementById('button-tip-5')
const btn10 = document.getElementById('button-tip-10')
const btn15 = document.getElementById('button-tip-15')
const btn25 = document.getElementById('button-tip-25')
const btn50 = document.getElementById('button-tip-50')

btn5.addEventListener('click', calculatePercentage);
btn10.addEventListener('click', calculatePercentage);
btn15.addEventListener('click', calculatePercentage);
btn25.addEventListener('click', calculatePercentage);
btn50.addEventListener('click', calculatePercentage);

// Calcula o percentual de acordo com o botão clicado e mostrará o resultado na tela
function calculatePercentage(event) {
    var percentage = 0;

    if (conta.value <= 0 || pessoa.value <= 0) {
        return errorValidation()
    }

    switch (event.target.id) {
        case 'button-tip-5':
            percentage = 0.05
            break;

        case 'button-tip-10':
            percentage = 0.10
            break;

        case 'button-tip-15':
            percentage = 0.15
            break;

        case 'button-tip-25':
            percentage = 0.25
            break;

        case 'button-tip-50':
            percentage = 0.5
        default:
            break;
    }

    var tipPerson = conta.value * percentage
    var totalPerson = (conta.value / pessoa.value) + tipPerson

    document.getElementById('tip-person').innerHTML = tipPerson.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPerson.toFixed(2)
}

// validacao do if
function errorValidation() {
    conta.classList.add('error')
    people.classList.add('error')
}