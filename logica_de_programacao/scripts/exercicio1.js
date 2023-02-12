let dados = prompt("digite seu nome completo");

document.body.innerHTML += `<h3>Exercicio 1</h3><br />`
document.body.innerHTML += `O seu nome é; ${dados} <br />`;

document.body.innerHTML += `Seu nome tem ${dados.length} letras <br />`;

document.body.innerHTML += `A segunda letra do seu nome é: ${dados[1]}<br />`

let repl = dados.replace(" ","")
document.body.innerHTML += `Qaual o primeiro indice da letra O seu nome? ${repl.indexOf("o")}<br />`

document.body.innerHTML += `Qual o ultimo indice da letra O do seu nome? ${dados.lastIndexOf("o" ) - dados.indexOf(' ')-1 }<br />`

document.body.innerHTML += `As ultimas tres letras do seu nome são: ${dados.slice(-3,dados.length)}<br />`

document.body.innerHTML += `As palavras do seu nome são: ${dados.split(' ')}<br />`
document.body.innerHTML += `seu nome com letras maiusculas: ${dados.toUpperCase()}<br />`
document.body.innerHTML += ` seu nome com letras minusculas: ${dados.toLowerCase()}<br />`