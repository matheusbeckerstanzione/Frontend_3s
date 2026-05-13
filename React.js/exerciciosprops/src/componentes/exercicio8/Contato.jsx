import "./Contato.css"

function Contato(props) {
    return(
        <div className="contato">
            <h2>{props.nome}</h2>
            <p>Telefone: {props.telefone}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default Contato