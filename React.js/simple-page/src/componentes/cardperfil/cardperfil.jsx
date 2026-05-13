import "./cardperfil.css"
import MyPeople from "../../assets/Captura de tela 2026-03-04 163041.png"

function CardPerfil(){
    return (
         <div className="card-perfil">
       <img className="card-perfil__image" src={MyPeople} alt="imagem do usuario"/> 
    </div>
    
    )
}

export default CardPerfil