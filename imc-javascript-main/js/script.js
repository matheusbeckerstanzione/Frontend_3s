function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);




    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
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



    const objImc = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        resultado: textoResultado
    }

    const retorno = cadastrarContato(objImc);


    if (retorno) {

        buscarImcs();

        // limpar os campos do formulário
        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        alert(
            `${nome}, foi cadastrado no banco:
        Nome: ${nome}
        Imc: ${imc.toFixed(2)}
        Resultado: ${textoResultado}`
        );

    } else {
        alert("Erro ao cadastrar contato!");
    }


}



async function cadastrarContato(objImc) {
    console.log(objImc);

    try {
        const resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objImc),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
}


function CalcularImc(altura, peso) {

    return peso / (altura * altura);

}

function exibirResultadoImc(imc) {
    if (imc < 16) {
        return "magreza grave";
    }
    else if (imc < 17) {
        return "magreza moderada";
    }
    if (imc < 18.5) {
        return "magreza leve";
    }
    else if (imc < 25) {
        return "saudável";
    }
    else if (imc < 30) {
        return "sobrepeso";
    }
    else if (imc < 35) {
        return "obesidade grau I";
    }
    else if (imc < 40) {
        return "obesidade grau II";
    }
    else {
        return "obesidade grau III";
    }




}




async function buscarImcs() {
    try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dadosRetornados = await retorno.json();

        //ordena pelo nome en ordem alfabética
        dadosRetornados.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });

        console.log(dadosRetornados);
        const tabela = document.getElementById("cadastro");
        let templete = "";

        for (let i = 0; i < dadosRetornados.length; i++) {
            templete +=
                `<tr>
                <td>${dadosRetornados[i].nome}</td>
                <td>${dadosRetornados[i].altura}</td>
                <td>${dadosRetornados[i].peso}</td>
                <td>${dadosRetornados[i].imc.toFixed(2)}</td>
                <td>${dadosRetornados[i].resultado}</td>
            </tr>`;

            tabela.innerHTML = templete;
        }

    } catch (error) {

    }
}