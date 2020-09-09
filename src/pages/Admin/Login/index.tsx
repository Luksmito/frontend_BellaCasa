import React, {useState, FormEvent} from "react"
//import api from "../../../services/api"
import "./styles.css"
import BotaoAfirmativo from "../../../components/BotaoAfirmativo"
import api from "../../../services/api"

const Login: React.FC = () => {
  
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  function logarUsuario(e: FormEvent){
    e.preventDefault()
  } 
  
  return(
    <div className="login-box">
      <form className="formulario" onSubmit={logarUsuario}>
        <label htmlFor="email">E-mail: <input className="email" id="email"type="text" onChange={e => {setEmail(e.target.value)}}/></label>
        <div className="senha">
        <label  htmlFor="senha">Senha: <input  id="senha"type="password" onChange={e => {setSenha(e.target.value)}}/></label>
        </div>
        
        
        
        <BotaoAfirmativo label="Login" type="submit"/>
      </form>
    </div>
  )
}

export default Login