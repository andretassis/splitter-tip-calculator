// armazena o botao em uma variavel
const resetButton = document.getElementById('button-reset')

// quando clicar no botão executará o que está dentro da função
resetButton.addEventListener('click', () => {

    // restaura os valores do input de conta e pessoa
    conta.value = ''
    pessoa.value = ''

    // remove a classe que coloca a borda vermelha em caso de erro
    conta.classList.remove('error')
    people.classList.remove('error')

    // retorna o botão "Outro" à condição inicial
    outro.classList.remove('display-none')
    outroInput.classList.remove('error')
    outroInput.classList.add('display-none')
    outroInput.value = ''

    // remove as classes que deixam o botão de gorjeta ativo
    btn.forEach((button) => {
        button.classList.remove('button-tip-active');
    });

    // retorna os valores mostrados na tela ao incial
    document.getElementById('tip-person').innerHTML = "0.00"
    document.getElementById('total-person').innerHTML = "0.00"
})