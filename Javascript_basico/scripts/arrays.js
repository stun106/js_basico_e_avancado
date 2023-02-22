const alunos = ['luiz','maria','joão']
// index  =>      0       1       2

console.log(alunos)
//resgatando o segundo nome do array
console.log(alunos[1])
//medindo comprimento do array
console.log(alunos.length)
//adicionando no começo um nome o array
alunos.push("josé")
console.log(alunos)
//adicionando no final
alunos.unshift("fernanda")
console.log(alunos)
//removendo nomes com pop e retornando nome removido
let nome_removido = alunos.pop("luiz")
console.log(nome_removido)
//removendo o primeiro elemento
let remove_primeiro = alunos.shift()
console.log(remove_primeiro)
//removendo sem alterar indices
delete alunos[3]
//fatiando um array
console.log(alunos.slice(0, 1))
// verificando instancias 
console.log(alunos instanceof Array)
