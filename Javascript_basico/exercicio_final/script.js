const registerUser = ()=>{
    const formulario = document.querySelector(".form");
    const resp = document.querySelector("#resp");
    //adicionando evento no formulario onde mudamos a forma que o submit atualiza a pagina.
    //em seguida pegamos os valores dos inputs.
    formulario.addEventListener('submit',function (evento){
        evento.preventDefault()
        const nome = formulario.querySelector(".nome").value
        const sobrenome = formulario.querySelector(".sobrenome").value
        const peso = formulario.querySelector(".peso").value
        const altura = formulario.querySelector(".altura").value

        //função factory onde se cria registros usando como parametros os valores dos inputs.
        const criaRegistro = (nome,sobrenome,peso,altura) =>{
           return{
            nome, 
            sobrenome,
            peso,
            altura,
            print(){
                return `Nome: ${this.nome},
                Sobrenome: ${this.sobrenome},
                Peso: ${this.peso},
                Altura: ${this.altura} <br>`
                }
            }
        }
        //objeto
        const registro = criaRegistro(nome,sobrenome,peso,altura)
        resp.innerHTML += registro.print()
        console.log(registro.print())
        
    })
   
}
registerUser()