function calcular(){
const nome = document.getElementById("nome").value;
const altura = parseFloat(document.getElementById("altura").value);
const peso = parseFloat(document.getElementById("peso").value);

console.log(nome, altura, peso);

if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){
    alert("Preencha todos os campos!");
    return false;
}

const imc = CalcularImc(altura, peso);
const textoResultado = exibirResultadoImc(imc);

console.log(nome);
console.log(altura);
console.log(peso);
console.log(imc);
console.log(textoResultado);
}

function CalcularImc(altura, peso){

return peso / (altura * altura);

}

function exibirResultadoImc(imc){
    if(imc < 16){
        return "magreza grave";
    }
    else if( imc < 17){
        return "magreza moderada";
    }
    if(imc < 18.5){
        return "magreza leve";
    }   
    else if(imc < 25){
        return "saudável";
    }
    else if(imc < 30){
        return "sobrepeso";
    }
    else if(imc < 35){
        return "obesidade grau I";
    }
    else if(imc < 40){
        return "obesidade grau II";
    }
    else{
        return "obesidade grau III";
    }
    
}