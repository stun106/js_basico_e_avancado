/*
Entre 5 - 12 - Bom Dia
Entre 13 - 18 - Boa Tarde
Entre 19 - 0 - Boa Noite
Entre 1 - 4 - Vai dormir que é Madrugada!
*/

const hora = 5; 
if(hora > 0 && hora < 5){
    console.log("Vai dormir que é Madrugada!");
}else
if(hora >=5 && hora <=12){
    console.log("bom dia!");
}else
if(hora > 12 && hora <= 18){
    console.log("boa tarde!");
}
else{
    console.log("boa noite!");
}
