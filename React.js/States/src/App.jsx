import { useState } from 'react'
import './App.css'
import Contador from './componentes/contador/Contador'
import Formulario from './componentes/Formulario/formulario'
import CardFruta from './componentes/CardFruta/CardFruta'

function App() {
  const [titulo, setTitulo] = useState("Google")

  function MudarTexto(){
    setTitulo("Microsoft")
  }

  function MudarTexto2(){
    setTitulo("Adenicon")
  }
  return(
    <>
    {/* <h1>Minha Página de {titulo}</h1>
    <button onClick={MudarTexto}>Mudar Texto</button>
    <br/>
    <button onClick={MudarTexto2}>Adenicon</button>


    <Contador/>
    <Formulario/> */}
    <CardFruta/>
    </>
  )


}

export default App
