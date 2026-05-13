import "./produto.css"

function Produto({nome, preco, descricao}){
    return(
        <h1>{nome} - {preco} - {descricao}</h1>
    )
}


export default Produto