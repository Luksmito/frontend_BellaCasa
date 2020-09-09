import React, { FormEvent, useState } from 'react'
import "./styles.css"
import BotaoAfirmativo from '../../../components/BotaoAfirmativo'
import api from '../../../services/api'
import { useHistory } from 'react-router-dom'


function CadastrarProdutos() {
    const history = useHistory()
    const [nome,setNome] = useState("")
    const [preco,setPreco] = useState("")
    const [descricao,setDescricao] = useState("")
    const [imagem,setImagem] = useState("")
    

    function CadastrarProduto(e: FormEvent){
        e.preventDefault()
        api.post('produtos',{
            nome,
            preco,
            descricao,
            imagem
        }).then(() => {
            alert("Cadastrado com sucesso")
            history.push("/admin/cadastrar-produtos");
        }).catch((err) => {
            alert("Erro no cadastro" + err)
        })
    }
    
    return (
        <div className="body-form">
            <form onSubmit={CadastrarProduto} className="form-cadastro-produto" action="">
                <label htmlFor="nome">Nome: <input value={nome} onChange={(e) => {setNome(e.target.value)}}type="text" /></label>
                <label htmlFor="preco">Preco: <input value={preco} onChange={(e) => {setPreco(e.target.value)}} type="text" /></label>
                <label htmlFor="descricao">Descricao:</label><textarea value={descricao} onChange={(e) => {setDescricao(e.target.value)}} name="descricao" id="descricao"></textarea>
                <label htmlFor="imagem">Imagem(URL): <input onChange={(e) => {setImagem(e.target.value)}} value={imagem} type="text" /></label>
                <BotaoAfirmativo label="Cadastrar" type="submit"/>
            </form>e
        </div>
    )
}

export default CadastrarProdutos