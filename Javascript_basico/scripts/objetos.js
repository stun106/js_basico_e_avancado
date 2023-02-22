const criapessoa = (nome,sobrenome,idade) =>{
    return{
        nome,
        sobrenome,
        idade,
        fala (){
            return `${this.nome} ${this.sobrenome} esta falando!`
        }
    };
};

const pessoa1 = criapessoa("José","Ântonio",29)
console.log(pessoa1)

const pessoa2 = criapessoa("kirk","Jhonson",25)
const pessoa3 = criapessoa("Hammellet", "kirk", 45)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)

console.log(pessoa2.fala())