import React from 'react'
import "./styles.css"
import Produto from "../Produto"

interface produto{
    nome: string,
    preco: string,
    imagem: string
}

interface arrayProdutosProps{
    itens: Array<produto>,
}

const ArrayProdutos: React.FC<arrayProdutosProps> = ({itens}) => {
    return(
        <div className="array">
            {itens.map((item) => {
                return <Produto nome={item.nome} preco={item.preco} imagem={item.imagem}/>
            })}
        </div>
    )
}

export default ArrayProdutos