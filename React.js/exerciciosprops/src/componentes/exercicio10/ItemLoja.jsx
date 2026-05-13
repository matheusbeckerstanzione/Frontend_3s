import "./ItemLoja.css"

function ItemLoja(props) {
    let mensagem = ""
    
    if (props.estoque > 0) {
        mensagem = "Produto Disponivel!"
    }
    else{
        mensagem = "Produto Indisponivel!"
    }

    return (
        <div className="item-card">
            <h1>{props.nome}</h1>
            <p><strong>Preco:</strong> R$ {props.preco}</p>
            <p><strong>Categoria:</strong> {props.categoria}</p>
            <p><strong>Status:</strong> {mensagem}</p>
        </div>
    )
}

export default ItemLoja