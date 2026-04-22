async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    let resposta = await fetch("http://localhost:3000/contatos",{
        method: "POST",
      body: JSON.stringify(objetoContato),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

}


function validarFormulario() {



    let name = document.getElementById("name").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let email = document.getElementById("email").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let numero = document.getElementById("numero").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let rua = document.getElementById("rua").value.trim();
    // let numero_end = document.getElementById("numero_end").value.trim();
    // let complemento = document.getElementById("complemento").value.trim();
    // let bairro = document.getElementById("bairro").value.trim();
    // let cidade = document.getElementById("cidade").value.trim();
    // let estado = document.getElementById("estado").value.trim();
    // let anotacoes = document.getElementById("anotacoes").value.trim();

     let quantidadeDeErros = 0;


    // console.log(`Aluno: Nome: ${name} ${sobrenome}
    // Email: ${email}
    // `);

    alert(name.length);


    if (name.length == 0) {
        forErro("name");
        quantidadeDeErros++;

    }
    else {
        reiniciaBorda("name");

    }

    if (sobrenome.length == 0) {
        forErro("sobrenome");
        quantidadeDeErros++;

    }
    else {
        reiniciaBorda("sobrenome");

    }


    let objetoContato ={
        nome : name,
        sobrenome : sobrenome
       };

    let cadastro = cadastrarContato(objetoContato);
    return false;
















    // if (telefone.length == 0) {
    //     forErro("telefone");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("telefone");

    // }


    // if (ddd.length == 0) {
    //     forErro("ddd");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("ddd");

    // }

    // if (cidade.length == 0) {
    //     forErro("cidade");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("cidade");

    // }

    // if (estado.length == 0) {
    //     forErro("estado");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("estado");

    // }

    // if (anotacoes.length == 0) {
    //     forErro("anotacoes");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("anotacoes");

    // }

    // if (cep.length == 0) {
    //     forErro("cep");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("cep");

    // }

    // if (rua.length == 0) {
    //     forErro("rua");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("rua");

    // }

    // if (numero_end.length == 0) {
    //     forErro("numero_end");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("numero_end");

    // }

    // if (complemento.length == 0) {
    //     forErro("complemento");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("complemento");

    // }

    // if (cidade.length == 0) {
    //     forErro("cidade");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("cidade");

    // }

    // if (estado.length == 0) {
    //     forErro("estado");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("estado");

    // }

    // if (cep.length == 0) {
    //     forErro("cep");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("cep");

    // }

    // if (rua.length == 0) {
    //     forErro("rua");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("rua");

    // }

    // if (email.length == 0) {
    //     forErro("email");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("email");

    // }

    // if (bairro.length == 0) {
    //     forErro("bairro");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("bairro");

    // }

    // if (numero.length == 0) {
    //     forErro("numero");
    //     quantidadeDeErros++;

    // }
    // else {
    //     reiniciaBorda("numero");

    // }

    // if (quantidadeDeErros != 0) {
    //     alert("Existem " + quantidadeDeErros + " campo(s) obrigatório(s) que não foram preenchido(s).");
    //     quantidadeDeErros = 0;
    // }



}//fim da função


function forErro(fildId) {
    document.getElementById(fildId).style.border = "1px solid red";

}
async function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none";

}
async function EnderecoBuscado(cep) {
    if (cep.trim().length < 8) {
        alert("CEP inválido");
        return false;
    }

    try {

        aguardandoCampos();
        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let dados = await retorno.json();
        console.log(dados);

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
    }
    catch (error) {
        alert("Ocorreu um erro ao buscar o endereço: " + error.message);
    }
}




function aguardandoCampos() {
    document.getElementById("rua").value = "Aguardando...";
    document.getElementById("bairro").value = "Aguardando...";
    document.getElementById("cidade").value = "Aguardando...";
    document.getElementById("estado").value = "Aguardando...";
}