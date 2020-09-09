import React from 'react'
import "./styles.css"

interface BackdropProps{
    open: boolean,
}

const Backdrop: React.FC<BackdropProps> = (props) => {
    

    if(props.open){
        return(
            <div className="backdrop"/>
        )
    }else{
        return(
            <div></div>
        )
    }
    
    
}

export default Backdrop