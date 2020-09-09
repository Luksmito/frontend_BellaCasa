import React from "react" 
import "./styles.css"

interface produtoProps{
    nome: string,
    preco: string,
    imagem: string
}

const Produto: React.FC<produtoProps> = ({nome, preco, imagem}) => {
    
    const link = "/produto/" + nome

    return(
       <a href={link}>
            <div className="produto">
            <img className="imagemProduto" id="imagemProduto" src={imagem} alt={nome}/>
            <label className="nomeProduto" htmlFor="imagemProduto">{nome}</label>
            <label className="precoProduto" htmlFor="imagemProduto">{preco}</label>
        </div>
       </a>
    )
}

export default Produto