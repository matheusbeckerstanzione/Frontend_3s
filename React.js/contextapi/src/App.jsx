import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/MyPage'
import Header from './components/header/Header'
import Produtos from './components/produto/Produto'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/myPage" element={<PrivateRoutes><MyPage /></PrivateRoutes>} />
          <Route path="/produto" element={<PrivateRoutes><Produtos /></PrivateRoutes>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App