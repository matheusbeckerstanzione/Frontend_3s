import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"
const Mypage = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
       
       <>
       <h2>Minha Página</h2>
       <p>dados do usuário, {usuario}</p>
       </>
        
    )
}

export default Mypage