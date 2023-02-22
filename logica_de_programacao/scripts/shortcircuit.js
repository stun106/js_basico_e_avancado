// Avaliação de Curto - Circuito(Short - Circuit)
//em javscript tudo pode ser avaliado como verdadeiro e falso
//FALSY - falso literal: 0, '',"",``. null / underfined, NaN

// retorna o tipo de falso literal 
console.log('José Antonio' && null && 'maria');

//exemplo de Short - Circuit
const saudacao = ()=>{
    return 'Ola,seja bem vindo'
}
let nome = "Jose"
console.log(nome && saudacao())

// exemplo de Short - Circuit usando or (mais usado)
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao)


