import { useState } from "react";

function Forms() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name)
        alert(`USUARIO CADASTRADO`)
    }
    const[name,setName] =useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="BOTA O NOME"
                    onChange={(e)=>setName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <input type="text" placeholder="BOTA O EMAIL"></input>
                </div>

                <div>
                    <input type="submit" value="CADASTRAR"></input>
                </div>
            </form>
        </div>
    )
}

export default Forms