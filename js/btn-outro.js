const outro = document.getElementById('button-custom')
const outroInput = document.getElementById('input-custom')

outro.addEventListener('click', inputNumber);

// trocar o button pelo input
function inputNumber() {
    outro.classList.add('display-none');
    outroInput.classList.remove('display-none')
}

// calcular conforme o valor que o usuário inserir
outroInput.addEventListener('change', () => {

    if (outroInput.value <= 0) {
        return inputErrorValidation()
    }

    var inputPercentage = parseInt(outroInput.value) / 100

    var tipPersonCustom = conta.value * inputPercentage
    var totalPersonCustom = (conta.value / pessoa.value) + tipPersonCustom

    document.getElementById('tip-person').innerHTML = tipPersonCustom.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonCustom.toFixed(2)

})

// validação do if
function inputErrorValidation() {
    outroInput.classList.add('error')
}