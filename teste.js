const numerosprimos = (n) =>{
    for(x = 1; x < n+1; x++){
        cont = 0
        for(y = 1; y < x+1; y++){
            if(x % y == 0){
                cont += 1
            }
            
        }

    }
    if(cont == 2){
        return "é primo"
    }else{
        return "não é primo"
    }
}
         

let p = 47
console.log(numerosprimos(p))

