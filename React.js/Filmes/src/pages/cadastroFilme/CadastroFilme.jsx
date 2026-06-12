import Header from "../../components/header/Header";
import "./CadastroFilme.css";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useState, useEffect } from "react";
import Lista from "../../components/lista/Lista";
import api from "../../services/services";

const CadastroFilme = () => {
  //states e variáveis

  const [valor, setValor] = useState("");

  const [idGenero, setIdGenero] = useState("");

  const [idFilme, setIdFilme] = useState("");

  const [editar, setEditar] = useState(false);

  const [listaFilmes, setListaFilmes] = useState([]);

  const [imagem, setImagem] = useState(null);

  const [listaGeneros, setListaGenero] = useState([]);

  //funcoes

  //get de generos para colocar no select do form
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero"); //chama a api

      setListaGenero(retornoAPI.data); //preencher os arrays listaGeneros
    } catch (error) {
      alert("Problema ao carregar dados da API");
    }
  };

  //get
  const listarFilmes = async () => {
    try {
      const retornoAPI = await api.get("/Filme");

      setListaFilmes(retornoAPI.data);
    } catch (error) {
      alert("Problema ao carregar dados da API");
    }
  };

  //ciclos de vida
  useEffect(() => {
    getGeneros();
    listarFilmes();
  }, []);

  //post
  const cadastrarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha o nome do filme!",
        icon: "warning",
      });
      return;
    }

    if (!idGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, selecione um gênero!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("titulo", valor);
    formData.append("idGenero", idGenero);
    formData.append("imagem", imagem);

    try {
      await api.post("/Filme", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alerta({
        title: "Sucesso!",
        text: "Filme cadastrado com sucesso!",
        icon: "success",
      });

      limparForm();
      await listarFilmes();
    } catch (error) {
      console.log(error);
      Alerta({
        title: "Erro!",
        text: "Erro ao cadastrar o filme. Tente novamente!",
        icon: "error",
      });
    }
  };

  //put
  // Altera os estados para preencher o formulário com os dados do filme selecionado
  const preEditar = (filme) => {
    setEditar(true);
    setIdFilme(filme.idFilme);
    setValor(filme.titulo);
    setImagem(filme.imagem);

    const idGen =
      filme.idGenero ??
      filme.genero?.idGenero ??
      filme.idGeneroNavigation?.idGenero;
    setIdGenero(idGen || "");
  };

  // PUT - Atualiza o filme na API
  const editarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0 || !idGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha todos os campos!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("idFilme", idFilme);
    formData.append("titulo", valor);
    formData.append("idGenero", idGenero);
    formData.append("imagem", imagem);

    try {
      await api.put(`/Filme/${idFilme}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alerta({
        title: "Sucesso!",
        text: "Filme atualizado com sucesso!",
        icon: "success",
      });

      limparForm();
      await listarFilmes();
    } catch (error) {
      console.log(error);
      Alerta({
        title: "Erro!",
        text: "Erro ao atualizar o filme. Tente novamente!",
        icon: "error",
      });
    }
  };

  // DELETE - Exclui o filme após a confirmação do usuário
  const excluirFilme = async (filme) => {
    const resultado = await Alerta({
      title: "Tem certeza?",
      text: `Deseja excluir o filme "${filme.titulo}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    });

    if (resultado.isConfirmed) {
      try {
        await api.delete(`/Filme/${filme.idFilme}`);

        Alerta({
          title: "Sucesso!",
          text: "Filme excluído com sucesso!",
          icon: "success",
        });

        await listarFilmes();
      } catch (error) {
        console.log(error);
        Alerta({
          title: "Erro!",
          text: "Erro ao excluir o filme. Tente novamente!",
          icon: "error",
        });
      }
    }
  };

  const limparForm = () => {
    setValor("");
    setIdGenero("");
    setEditar(false);
    setIdFilme("");
    setImagem(null);
  };

  return (
    <>
      <Header />
      <main>
        <Cadastro
          //Define o título que será exibido no formulário
          tituloCadastro="Cadastro de Filmes"
          // esconde o select de genero
          //visibilidade="none"
          // Define o texto que aparece dentro do campo de input
          placeholder="Filme"
          // ----------------------------------------------------
          // Propriedades voltada ao cadastro:

          //Função que será chamada ao enviar o formulário (onSubmit)
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          // Valor atual do campo de texto
          valor={valor}
          // Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
          setValor={setValor}
          valorGenero={idGenero}
          setValorGenero={setIdGenero}
          setImagem={setImagem}
          btnEditar={editar}
          cancelarEdicao={limparForm}
          listaGeneros={listaGeneros}
        />

        <Lista
          tituloLista="Lista de Filmes"
          //visibilidade="none"
          //Chama o método para validar:
          lista={listaFilmes}
          listaGeneros={listaGeneros}
          //Identifica o tipo de lista:
          tipoLista="filme"
          funcExcluir={excluirFilme}
          funcEditar={preEditar}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroFilme;