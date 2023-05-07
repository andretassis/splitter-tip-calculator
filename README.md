# Splitter - Calculadora de Gorjeta

Projeto responsivo mobile e desktop para uma calculadora de gorjetas. 
O desafio foi retirado do Front-End Mentor e pode ser acessado em: https://www.frontendmentor.io/challenges

O objetivo não foi recriar o projeto exatamente como estava no Front-End Mentor, mas sim utilizá-lo como base.
Dessa forma, mantive os mesmos elementos visuais (cores e fontes).
Entretanto, inseri funcionalidades que não existiam no original, como Dark Mode e menu de intruções em Bootstrap.
 
## Visão Geral

O projeto possui layout responsivo de acordo com a resolução da tela para mobile e desktop, e foi desenvolvido seguindo a metodologia mobile first.
Existem percentuais pré-determinados para a gorjeta ou o usuário poderá escolher um valor clicando no botão "Outro".

## Funcionalidades

O usuário colocará o valor total da conta no campo correspondente e selecionará o percentual de gorjeta que deseja aplicar.
O sistema verificará se os campos obrigatórios (valor total da compra, percentual de gorjeta e número de pessoas) estão preenchidos ou selecionados.
Será feita a conta retornando o valor da gorjeta por pessoa e também o valor total por pessoa.

Há um botão de reset para limpar todos os campos.

Clicando no ícone de sol ou lua, é possível alternar entre light mode e dark mode.

### Validações

O sistema não funcionará se:
 
 - Os campos "Valor total da conta" ou "Número de pessoas" forem zero ou negativos;
 - O campo "Outro" for preenchido com valor 0 ou negativo.

## Conhecimentos aplicados

- HTML
- CSS
- Bootstrap
- Javascript
