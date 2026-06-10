import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"

const Header = () => {
    const {usuario} = useContext(UsuarioContext)
    const {setUsuario} = useContext(UsuarioContext)
    const {setNovoProduto} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)
        setNovoProduto("")
        localStorage.removeItem("usuario")
    }

    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{""}
                <Link to="/perfil">Perfil</Link>{""}
                <Link to="/mypage">Minha Página</Link>{""}
                <Link to="/produto">Produto</Link>{""}
                <span>({usuario})</span>
                 <button onClick={() => {logout()}}>Sair</button>
        

            </nav>
        </header>
    )
}

export default Header;