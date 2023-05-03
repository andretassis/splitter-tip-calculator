let conta = document.getElementById('bill')
let pessoa = document.getElementById('people')

//calculo de gorgeta para 5%
const btnTipFive = document.getElementById('button-tip-5')

btnTipFive.addEventListener('click', function () {
    btnTipFive.classList.add('button-tip2')

    const resultFive = (conta.value) * 0.05
    const tipPersonFive = resultFive / (pessoa.value)

    const totalPersonFive = (conta.value / pessoa.value) + tipPersonFive

    document.getElementById('tip-person').innerHTML = tipPersonFive.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonFive.toFixed(2)
})

//calculo de gorgeta para 10%
const btnTipTen = document.getElementById('button-tip-10')

btnTipTen.addEventListener('click', function () {
    btnTipFive.classList.remove('button-tip2')
    btnTipTen.classList.add('button-tip2')

    const resultTen = (conta.value) * 0.1
    const tipPersonTen = resultTen / (pessoa.value)

    const totalPersonTen = (conta.value / pessoa.value) + tipPersonTen

    document.getElementById('tip-person').innerHTML = tipPersonTen.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonTen.toFixed(2)
})

//calculo de gorgeta para 15%
const btnTipFft = document.getElementById('button-tip-15')

btnTipFft.addEventListener('click', function () {
    btnTipFive.classList.remove('button-tip2')
    btnTipTen.classList.remove('button-tip2')
    btnTipFft.classList.add('button-tip2')

    const resultFft = (conta.value) * 0.15
    const tipPersonFft = resultFft / (pessoa.value)

    const totalPersonFft = (conta.value / pessoa.value) + tipPersonFft

    document.getElementById('tip-person').innerHTML = tipPersonFft.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonFft.toFixed(2)
})

//calculo de gorgeta para 25%
const btnTipTtf = document.getElementById('button-tip-25')

btnTipTtf.addEventListener('click', function () {
    btnTipFive.classList.remove('button-tip2')
    btnTipTen.classList.remove('button-tip2')
    btnTipFft.classList.remove('button-tip2')
    btnTipTtf.classList.add('button-tip2')

    const resultTtf = (conta.value) * 0.25
    const tipPersonTtf = resultTtf / (pessoa.value)

    const totalPersonTtf = (conta.value / pessoa.value) + tipPersonTtf

    document.getElementById('tip-person').innerHTML = tipPersonTtf.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonTtf.toFixed(2)
})

//calculo de gorgeta para 50%
const btnTipFifty = document.getElementById('button-tip-50')

btnTipFifty.addEventListener('click', function () {
    btnTipFive.classList.remove('button-tip2')
    btnTipTen.classList.remove('button-tip2')
    btnTipFft.classList.remove('button-tip2')
    btnTipTtf.classList.remove('button-tip2')
    btnTipFifty.classList.add('button-tip2')

    const resultFifty = (conta.value) * 0.5
    const tipPersonFifty = resultFifty / (pessoa.value)

    const totalPersonFifty = (conta.value / pessoa.value) + tipPersonFifty

    document.getElementById('tip-person').innerHTML = tipPersonFifty.toFixed(2)
    document.getElementById('total-person').innerHTML = totalPersonFifty.toFixed(2)
})