import React ,{ButtonHTMLAttributes} from 'react'
import "./styles.css"

interface botaoAfirmativoProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
}

const BotaoAfirmativo: React.FC<botaoAfirmativoProps> = ({label, ...rest}) => {
    return(
        <button className="botaoAfirmativo" type="submit" {...rest}>{label}</button>
    )
}

export default BotaoAfirmativo