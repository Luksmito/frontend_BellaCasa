import React, { useState } from "react"
import "./styles.css"


interface SidebarProps {
    open: boolean,
}


const Sidebar: React.FC<SidebarProps> = ({ open }) => {

    

    let sideId = 'side-bar'

    if (open) {
        sideId = "side-bar open"
    }


    return (

        <nav className={sideId}>

            <div className="side-content">
                <div >
                    <ul className="lista-opcoes">
                        <li className="item-sidebar"><a href="" className="item">Home</a></li>
                        <li className="item-sidebar"><a href="" className="item">Novidades</a></li>
                        <li className="item-sidebar"><a href="" className="item">Contato</a></li>
                        <li className="item-sidebar"><a href="" className="item">Sobre</a></li>
                    </ul>
                </div>

            </div>
        </nav>


    )
}

export default Sidebar