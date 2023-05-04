// reconhece o elemento pelo data attribute
const btn = document.querySelectorAll('[data-button]')

// para cada botao apertado, remove ou adiciona a classe para mudar a cor do fundo
btn.forEach((button) => {
    button.addEventListener('click', () => {

        btn.forEach((button) => {
            button.classList.remove('button-tip-active');
        });

        button.classList.add('button-tip-active');
    });
});