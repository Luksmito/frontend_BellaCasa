import React, { useState } from "react"
import "./styles.css"
import Cart from "../../images/icons/carrinho-de-compras.svg"
import User from "../../images/icons/definicoes.svg"
import Sidebar from "../Sidebar"
import SidebarIcon from "../../images/icons/ferramentas-de-edicao.svg"
import Backdrop from "../Backdrop"

function Navbar() {

    var [open, setOpen] = useState(false)


    function openSidebar() {
        setOpen(!open)

    }

    return (

        <nav className="tudo">
            <Sidebar open={open} />
            <div onClick={e => { openSidebar() }}><Backdrop open={open} /></div>
            <header className="nav-bar">

                
                    <label htmlFor="check" className="icon-sidebar" onClick={e => { openSidebar() }}>
                        <img src={SidebarIcon} alt="Menu lateral" />
                    </label>
                    <input id="check" className="check" type="checkbox" />
                
                

                <div className="header-content">
                    <div className="logo-e-barra">
                        <div className="logo">
                            <a href="">BellaCasa</a>
                        </div >

                        <label className="barra-pesquisa" >Pesquise por itens<input id="barra" type="text" /></label>
                    </div>
                    <div className="icons">
                        <a href=""> <img src={Cart} alt="carrinho" /></a>
                        <a href=""> <img src={User} alt="login" /></a>

                    </div>

                </div>
            </header>
        </nav>
    )
}

export default Navbar