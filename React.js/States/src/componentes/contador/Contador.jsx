import { useState } from "react"
function Contador() {

//variaveis e states
//funções

const [contador, setContador] = useState(0)

function incrementar(){
    setContador(contador + 1)

    if(contador >= 10){
        setContador(0)

    }

    
}

function decrementar(){
    setContador(contador - 1)

    if(contador <= 0){
        setContador(0)
    }

}

    return (
      
            <div className="contador">
                <h1 className="contador_title">contador 
                    {contador} 
                    </h1>

                    <button onClick={incrementar}>
                        contar (++)
                    </button>
                    <br />

                  <button onClick={decrementar}>
                        contar (--)
                    </button>        

        </div>
        
    

                
    )
}

export default Contador