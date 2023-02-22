const numero = parseInt(prompt("informe um numero")); 
const exc = document.createElement('h2')
document.body.appendChild(exc)
exc.innerHTML = "Exercicios com numeros e Math"

const response = document.createElement('p');
document.body.appendChild(response);
response.innerHTML = numero;

const texto1 = document.createElement('p');
const texto2 = document.createElement('p');
const texto3 = document.createElement('p');
const texto4 = document.createElement('p');
const texto5 = document.createElement('p');
const texto6 = document.createElement('p');

document.body.appendChild(texto1);
document.body.appendChild(texto2);
document.body.appendChild(texto3);
document.body.appendChild(texto4);
document.body.appendChild(texto5);
document.body.appendChild(texto6);

texto1.innerHTML = `Raiz quadrada: ${(numero ** 0.5)}.`;
texto2.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)}.`;
texto3.innerHTML = `Arredondando pra baixo: ${Math.floor(numero)}.`;
texto4.innerHTML = `Arredondando pra cima: ${Math.ceil(numero)}.`;
texto5.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}.`;
texto6.innerHTML = `É NaN:${Number.isNaN(numero)}`