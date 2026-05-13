
import './App.css'
import Title from './componentes/title/title'
import Saudacao from "./componentes/exercicio1/saudacao"
import Produto from './componentes/exercicio2/produto'
import Perfil from "./componentes/exercicio3/perfil"
import Botao from "./componentes/exercicio4/botao"
import Filmes from "./componentes/exercicio5/filmes"
import Aluno from "./componentes/exercicio6/Aluno"
import foto from "../src/assets/Captura de tela 2026-03-04 163041.png"
function App() {
    
  return (
//     <>
// {/*     
//      <Title texto = "felipe" sobrenome = "torolho" idade = {16}/>
//       <Title texto = "torolho"/>
//        <Title texto = "viado"/>
//      */}

     
    
    
//     </>

// {/* <>
// <Saudacao nome = "Matheus"/>
// <Saudacao nome = "macos"/>
// <Saudacao nome = "gustavo"/>
// </>
//     */}


  // <>
  // <Produto nome = "batata" preco = {2.50} descricao= "batata frita" />
   // <Produto nome = "melancia" preco = {5.50} descricao= "" />
    // <Produto nome = "banana" preco = {3.50} descricao= "batata frita" />
  
  
  // </>

  // <>
  //  <Perfil nome = "matheus" idade = {17} profissao = "desenvolvedor backend"/>
  // </>

  // <>

  // <Botao texto = "cadastrar" cor = "green"/>
  // <Botao texto = "limpar" cor = "gray"/>
  // <Botao texto = "sair" cor = "red"/>
  // </>

  // <>
  // <Filmes titulo="macacas no pedaco" ano={2002} genero="comedia" nota={7.5}/>
  // </>

  <Aluno nome = "matheus" curso = "dev" imagem={foto}/>
  )
}

export default App
