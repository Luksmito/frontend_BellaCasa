import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import PaginaProduto from "./pages/PaginaProduto"
import Login from "./pages/Admin/Login"
import CadastrarProdutos from './pages/Admin/CadastrarProdutos'
import CadastrarUsuario from './pages/CadastrarUsuario'

function Routes(){
    return(
    <BrowserRouter>
        <Route path="/" exact component={HomePage}/>
        <Route path="/produto" component={PaginaProduto}/>
        <Route path="/admin" exact component={Login}/>
        <Route path="/admin/cadastrar-produtos" component={CadastrarProdutos}/>
        <Route path="/cadastrar-usuario" component={CadastrarUsuario}/>
    </BrowserRouter>
    )
}

export default Routes
