import "./Jogo.css"

function Jogo({ nome, plataforma, preco, imagem }) {
    return(
        <div className="jogo-card">
            <img src={imagem} alt={nome} className="jogo-img" />
            <h1>{nome}</h1>
            <h2>{plataforma}</h2>
            <p>Preco: {preco}</p>
        </div>
    );
}

export default Jogo
