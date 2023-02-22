const validators = (p,a,r) =>{
    if (p ||a !== Number){
        r.style.backgroundColor = "#f53944";
        r.style.textAlign = "center";
        r.style.borderRadius = "5px";
        r.innerHTML = "valor invalido"
    }else
    if(p > 595 && a > 250){
        r.style.backgroundColor = "#f53944";
        r.style.textAlign = "center";
        r.style.borderRadius = "5px";
        r.innerHTML = "valor invalido"
    }
}


const calcImc = (p,a) =>{
    a = a / 100
    return p / (a * a)
}

const styleshetsResp = (p,a,r) =>{
    if (calcImc(p,a) < 18.5 ){
        r.style.backgroundColor = "#f53944";
        r.style.textAlign = "center";
        r.style.borderRadius = "5px";
    }else
    if(calcImc(p,a) >=25 && calcImc(p,a) < 29.9){
        r.style.backgroundColor = "#f48024";
        r.style.textAlign = "center";
        r.style.borderRadius = "5px";
    }else
    if(calcImc(p,a) >= 30 ){
        r.style.backgroundColor = "#f53944";
        r.style.textAlign = "center";
        r.style.borderRadius = "5px";
    }else{
        r.style.backgroundColor = "#5eba7d";
        r.style.textAlign = "center"
        r.style.borderRadius = "5px";
    }

}

const imc = () =>{
    const formulario = document.querySelector(".form");
    const resp = document.querySelector("#resp");
    formulario.addEventListener("submit", function(event){
        event.preventDefault()
        const peso = formulario.querySelector(".peso").value;
        const altura = formulario.querySelector(".altura").value; 
        validators(peso,altura,resp)
        
        if(calcImc(peso,altura) < 18.5){
            styleshetsResp(peso,altura,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, você esta abaixo do peso`;
        }else
        if(calcImc(peso,altura) >=18.5 && calcImc(peso,altura) <= 24.9){
            styleshetsResp(peso,altura,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, seu peso esta normal`;
        }else
        if(calcImc(peso,altura) >=25 && calcImc(peso,altura) <= 29.9){
            styleshetsResp(peso,altura,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, Sobrepeso`;
        }else
        if(calcImc(peso,altura) >=30 && calcImc(peso,altura) <= 34.9){
            styleshetsResp(peso,altura,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, Obesidade grau 1`;
        }else
        if(calcImc(peso,altura) >=35 && calcImc(peso,altura) <= 39.9){
            styleshetsResp(peso,altura,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, Obesidade grau 2`;
        }
        else{
            styleshetsResp(peso,resp)
            resp.innerHTML = `seu IMC É ${calcImc(peso,altura).toFixed(2)}, Obesidade grau 3`;
        }
    });
}
imc()