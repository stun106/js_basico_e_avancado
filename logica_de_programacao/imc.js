const Nome = "José Antonio";
const idade = 29;
const peso = 80;
const altura = 1.75;
let imc = peso/(altura**2)
let anoNascimento = 2022-idade;

console.log(`O usuario ${Nome} tem ${idade} e nasceu em ${anoNascimento}`);
console.log(`seu imc é de ${imc.toFixed(2)}`);

if(imc > 26){
    console.log("Cuidado você esta fora de forma!");
}
