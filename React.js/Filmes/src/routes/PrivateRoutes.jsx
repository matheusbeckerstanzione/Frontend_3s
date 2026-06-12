import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
    const {usuario} = useContext(UsuarioContext)

    return usuario ? children : <Navigate to={"/"} />
}

export default PrivateRoutes    