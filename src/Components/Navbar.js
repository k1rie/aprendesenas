import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Navbarstyles from "../styles/navbar.module.css"
import Menuimg from "../imgs/menu.svg"

export default function Navbar(  ){

    const [navphone,setNavphone] = useState(false)
    const linkscontainerphone = useRef()
    const navbar = useRef()
    const backdiv = useRef()


    function shownavbarphone() {
        if(navphone === false){
            linkscontainerphone.current.style.display = "flex"
            setNavphone(true)
        }else{
            linkscontainerphone.current.style.display = "none"
            setNavphone(false)
        }
    }

    return(
        <div>

            <div className={Navbarstyles.navbarphone}>
                <img onClick={shownavbarphone} className={Navbarstyles.menuphone} src={Menuimg}/>

            </div>
            <div ref={linkscontainerphone} className={Navbarstyles.linkscontainerphone}>
                <div ref={backdiv} className={`${Navbarstyles.backlink} `}><Link to="/" className={Navbarstyles.link}>Inicio</Link></div>
                <div className={`${Navbarstyles.backlink} `}> <Link className={Navbarstyles.link}>Cursos</Link></div>
                <div className={`${Navbarstyles.backlink} `}><Link className={Navbarstyles.link}>Informacion</Link></div>
                <div className={`${Navbarstyles.backlink} `}><Link to="/sugerencias" className={Navbarstyles.link}>Sugerencias</Link></div>
            </div>
<div  ref={navbar} className={`${Navbarstyles.navbarcontainer}  `}>
    <div ref={backdiv} className={`${Navbarstyles.backlink} `}><Link to="/" className={Navbarstyles.link}>Inicio</Link></div>
    <div className={`${Navbarstyles.backlink} `}> <Link className={Navbarstyles.link}>Cursos</Link></div>
        <div className={`${Navbarstyles.backlink} `}><Link className={Navbarstyles.link}>Informacion</Link></div>
    <div className={`${Navbarstyles.backlink} $`}><Link to="/sugerencias" className={Navbarstyles.link}>Sugerencias</Link></div>
</div>
        </div>
    )
}