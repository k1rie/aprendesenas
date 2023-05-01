import Navbar from "./Components/Navbar"
import Aparatoimg from "./imgs/aparato.png"
import Homestyles from "./styles/home.module.css"
import Card from "./Components/Card"
import Colorsimg from "./imgs/colors.jpg"
import Colorsimgicon from "./imgs/colorsicon.svg"
import Abecedarioimg from "./imgs/abecedario.jpg"
import Abecedarioimgicon from "./imgs/abecedarioicon.svg"
import Verbosimg from "./imgs/verbos.jpg"
import Verbosimgicon from "./imgs/verbosicon.svg"


export default function Home() {

    return(
        <div>
<Navbar/>
            <div className={Homestyles.banercontainer}>
            <div className={Homestyles.banerinfo}>
<div>
    <p className={Homestyles.p1}>APRENDE</p>
    <p className={Homestyles.p2}>SEÑAS</p>
</div>
                <button className={Homestyles.startbutton}>Empezar</button>
            </div>
                <div className={Homestyles.line}>

                </div>

                    <img src={Aparatoimg} className={Homestyles.banerimg}/>

            </div>


            <div className={Homestyles.main}>
<div className={Homestyles.textcontainer}>
    <p className={Homestyles.maintext}>CURSOS GRATUITOS</p>
</div>
                <div className={Homestyles.cardscontainer}>
                    <Card  nombre="Colores"  img={Colorsimg} icon={Colorsimgicon} topic="COLORES" description1="Aprende los colores"
                    description2="Aprende a identificar colores" description3 ="Aprende a expresar colores"/>
                    <Card  nombre="Abecedario"  img={Abecedarioimg} icon={Abecedarioimgicon} topic="ABECEDARIO" description1="Aprende el abecedario"
                    description2={"Aprende a formar palabras"}  description3={"Aprende a expresarte"}/>
                    <Card  nombre="Verbos"  img={Verbosimg} icon={Verbosimgicon} topic="VERBOS" description1="Aprende los verbos de la vida diaria"
                    description2="Aprende a identificarlos" description3="Aprende a expresarlos"/>

                </div>
            </div>
        </div>
    )
}