import React from 'react'
import "./styles.css"
import Navbar from "../../components/Navbar"
import Produto from "../../components/Produto"

import ArrayProdutos from '../../components/ArrayProdutos'

function HomePage(){

    var lista = [{nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"},
    {nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"},
    {nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"},
    {nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"},
    {nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"},
    {nome: "caneca", preco:"R$20,00", imagem:"https://socd.vteximg.com.br/arquivos/ids/173217-1310-1310/Caneca-Glitter-Prata.jpg?v=636689008982370000"}
]

    return(

        <main>
            <Navbar/>
            <ArrayProdutos itens={lista}/>
        </main>
    )

}

export default HomePage