import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"
import { useState } from "react"

const Perfil = () => {
    // state global
    const {usuario, setUsuario} = useContext(UsuarioContext)
    //state local
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = () => {
        setUsuario(novoUsuario)
               
            localStorage.setItem("usuario", JSON.stringify(novoUsuario))
 setNovoUsuario("");
            
                


    }
    return (
        <>
        <h2>Meu Perfil</h2>
        <span>Nome: {usuario}</span>
        <p>
            <input type="text" placeholder="Novo usuario"value={novoUsuario} onChange={(e) => setNovoUsuario(e.target.value)} />
            <button onClick={() => {login()}}>Entrar</button>
        </p>
        </>
        
    )
}

export default Perfil