import Navbar from "./Components/Navbar";
import Sugerenciasstyles from "./styles/sugerencias.module.css"
import {useRef, useState} from "react";
import Checkimg from "./imgs/check.svg"

export default function Sugerencias(){
    const [nombre,setNombre] = useState()
    const [sugerencia, setSugerencia] = useState()
    const check = useRef()
    function sendsugerencia() {
        console.log(nombre)
        console.log(sugerencia)
        fetch("https://backendolanguajes-production.up.railway.app/sendsugerencia",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: nombre,
                sugerencia: sugerencia
            })
        }).then((response)=>{if(response.ok === true){check.current.style.display = "block"}})
    }
    return(
      <div>
       <Navbar/>
          <div className={Sugerenciasstyles.main}>


              <div className={Sugerenciasstyles.formcontainer}>
            <input onChange={(e)=>{setNombre(e.target.value)}} className={Sugerenciasstyles.formnombre} type="text" placeholder="Nombre/Correo"/>
                  <textarea onChange={(e)=>{setSugerencia(e.target.value)}} className={Sugerenciasstyles.formmensaje} type="text" placeholder="Mensaje"/>
                  <button onClick={sendsugerencia} className={Sugerenciasstyles.button}>Enviar</button>
                  <button onClick={sendsugerencia} className={Sugerenciasstyles.button}>Copia del mensaje</button>

              </div>
<img ref={check} className={Sugerenciasstyles.checkimg} src={Checkimg}/>
          </div>
      </div>
    )
}