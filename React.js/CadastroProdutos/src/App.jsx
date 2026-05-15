
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFrutasPage from './Pages/CadastroFrutas/CadastroFrutas'
import CadastroProdutosPage from './Pages/CadastroProdutos/CadastroProdutos'
import HomePage from './Pages/Home/Home'
import QuemSomosPage from './Pages/QuemSomos/QuemSomos'
import Header from './Componentes/Header/Header'  



export default function App() {
  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<QuemSomos />} path="/quemsomos" />
        <Route element={<CadastroFrutas />} path="/frutas" />
        <Route element={<CadastroProdutos />} path="/produtos" />
      </Routes>
    </BrowserRouter>


  )
}

