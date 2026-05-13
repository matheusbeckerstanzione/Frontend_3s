import "./perfil.css"

function Perfil({nome, idade, profissao}){

    return(
        
        <p className="pa">{nome} | {idade} | {profissao}</p>
    )
}

export default Perfil