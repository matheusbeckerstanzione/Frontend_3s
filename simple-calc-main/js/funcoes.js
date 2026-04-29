function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    const tabela = document.getElementById('cadastro');
    let resultado = null;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;


    const objSimple = {
        n1: n1,
        n2: n2,
        operacao: op,
        resultado: resultado
    }

    const retorno = cadastrarDados(objSimple);


    exibirDados(n1, n2, op, resultado);
}







async function cadastrarDados(objSimple) {
    console.log(objSimple);

    try {
        const resposta = await fetch("http://localhost:3000/simple", {
            method: "POST",
            body: JSON.stringify(objSimple),
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





/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}

function exibirDados(n1, n2, op, resultado) {

    document.getElementById('cadastro').innerHTML += `
        <article class="data__card-result">
            <p><strong>Primeiro Número:</strong> ${n1}</p>
            <p><strong>Segundo Número:</strong> ${n2}</p>
            <p><strong>Operação:</strong> ${op}</p>
            <p><strong>Resultado:</strong> ${resultado}</p>
        </article>
    `;
}


async function buscarSimple() {
    try {
        const retorno = await fetch("http://localhost:3000/simple");
        const dadosRetornados = await retorno.json();
        const tabela = document.getElementById('cadastro');

        let templete = "";
        console.log(dadosRetornados);

        for (let i = 0; i < dadosRetornados.length; i++) {
            templete +=
                `        <article class="data__card-result">
            <span id="primeiroResultado"><strong>Primeiro Número: </strong> ${dadosRetornados[i].n1}</span>
            <span id="segundoResultado"><strong>Segundo Número:</strong> ${dadosRetornados[i].n2}</span>
            <span id="operacaoResultado"><strong>Operação:</strong> ${dadosRetornados[i].operacao}</span>
            <span id="resultadoResultado"><strong>Resultado:</strong> ${dadosRetornados[i].resultado}</span>
        </article>`;

            tabela.innerHTML = templete;
        }

    } catch (error) {
        console.log(error);
    }


}


