import { useState } from "react"

function CadFruta() {

    const [fruta, setFruta] = useState("")

    //array para o cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Laranja", quantidade: 5 },
        { id: 2, nome: "Banana", quantidade: 10 },
    ])

    function cadastrar(e) {
        e.preventDefault()//não deixa postar o formulario
        setArrFrutas([ ...arrFrutas, { id: Date.now(), nome: fruta }])  
    }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastrar</h2>

            {/* Formulario de Cadastro */}
            <form action="" onSubmit={cadastrar}>
            <fieldset className="cadastro">
                <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
            </fieldset>
            <input type="text" id="fruta" placeholder="ex: limao" className="cadastro__entrada" onChange={(e) => {
                setFruta(e.target.value)
            }} />
            <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
            </form>

            {/* Listagem de Dados */}
            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return <li key={f.id}>{f.nome} - Quantidade: {f.quantidade}</li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default CadFruta