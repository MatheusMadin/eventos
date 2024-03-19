function Botao({props}){
    function Evento(){
        return(
           alert(`${props}`)
        )
    }
    return(
        <div>
            <button onClick={Evento}type="button">Aperte se vc for capaz</button>
        </div>
    )
}

export default Botao