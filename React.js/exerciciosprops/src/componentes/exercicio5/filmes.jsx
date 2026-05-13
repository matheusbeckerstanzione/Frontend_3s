import "./filmes.css"

function Filmes({ titulo, ano, genero, nota }) {
    return (
        <div>
            <h1>
                <span>Titulo: {titulo}</span>
                <span>Ano: {ano}</span>
                <span>Genero: {genero}</span>
                <span>Nota: {nota}</span>
            </h1>
        </div>



    )
}

export default Filmes