import React from 'react'
import Navbar from "../../components/Navbar"
import "./styles.css"

interface produtoProps {
    nome: string,
    preco: string,
    descricao: string,
    imagem: string
}

const PaginaProduto: React.FC<produtoProps> = ({ nome, preco, descricao, imagem }) => {

    return (
        <div >
            <Navbar />
            <main className="pagina-produto">

                <img src={imagem} alt={nome} />

                <div className="labels-produto">
                    <h1 className="nome-produto">Caneca</h1>
                    <h3 className="preco-produto">R$20,00</h3>
                    <p className="descricao">
                    Lorem ipsum habitant aliquam convallis nam odio integer, tellus dapibus at augue quisque cursus, sodales cras ligula orci rhoncus augue. dictum aptent interdum morbi auctor taciti pharetra suscipit semper dictumst, suspendisse maecenas ut proin nunc faucibus malesuada arcu interdum, quisque eleifend vivamus
                    </p>
                    <div className="botoes">
                        <button type="button" className="adicionar-carrinho">ADD</button>
                        <button type="button" className="comprar">Comprar</button>
                    </div>

                </div>

            </main>
        </div>
    )

}

export default PaginaProduto