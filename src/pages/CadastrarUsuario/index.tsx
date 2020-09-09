import React, { useState ,FormEvent } from "react"
import "./styles.css"
import Input from "../../components/Input"
import BotaoAfirmativo from "../../components/BotaoAfirmativo"
import api from "../../services/api"
import { useHistory } from "react-router-dom"

function CadastrarUsuario(){
    
    const history = useHistory()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senhaRecebida, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    function cadastrarUsuario(e: FormEvent){
        e.preventDefault()
        api.post("cadastrar-usuario", {
            nome,
            email,
            senhaRecebida,
            confirmarSenha
        }).then(() => {
            alert("Cadastrado com sucesso")
            history.push("/cadastrar-usuario");
        }).catch((err) => {
            alert("Erro no cadastro" + err)
        })
    }

    return(
        <main className="geral">
            <form className="formulario-cadastro-usuario" onSubmit={cadastrarUsuario}>
                <Input name="nome" label="Nome: " type="text" onChange={(e) =>{setNome(e.target.value)}}/>
                <Input name="email" label="Email: " type="text" onChange={(e) =>{setEmail(e.target.value)}}/>
                <Input name="senha" label="Senha: " type="password"onChange={(e) =>{setSenha(e.target.value)}}/>
                <Input name="confirmar-senha" label="Confirmar-senha: " type="password" onChange={(e) =>{setConfirmarSenha(e.target.value)}}/>
                <BotaoAfirmativo label="Cadastrar"/>
            </form>
        </main>
    )
}

export default CadastrarUsuario