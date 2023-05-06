// reconhece o botão pelo id e armazena em uma variável
const darkModeBtn = document.getElementById('change-theme')

// quando clicar no ícone de sol ou lua, muda o status do input e aplica todas as configurações abaixo
darkModeBtn.addEventListener('change', () => {

    document.body.classList.toggle('dark-body');
    document.querySelector('.container').classList.toggle('dark');
    document.querySelector('.accordion-body').classList.toggle('dark');
    document.querySelector('.accordion-button').classList.toggle('dark');
    document.querySelector('.bill-input').classList.toggle('dark');
    document.querySelector('.people-input').classList.toggle('dark');
    document.querySelector('.input-custom').classList.toggle('dark');
    document.querySelector('.button-custom').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelector('#moon').classList.toggle('show');
    document.querySelector('#sun').classList.toggle('hide');
})

