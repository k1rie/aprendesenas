import Cardstyles from "../styles/card.module.css"
import {Link} from "react-router-dom";

export default function Card(props) {
    return(
<Link to={`curso/${props.nombre}`} id={props.nombre} data-toggle="tab" >
    <div className={Cardstyles.cardcontainer}>
        <img className={Cardstyles.cardimg} src={props.img}/>
        <img className={Cardstyles.cardicon} src={props.icon}/>

        <div className={Cardstyles.cardtexts}>
            <p className={Cardstyles.cardtext1}>{props.topic}</p>
            <ul>
                <li><p className={Cardstyles.cardtext}> {props.description1}</p>  </li>
                <li><p className={Cardstyles.cardtext}> {props.description2}</p></li>
                <li><p className={Cardstyles.cardtext}> {props.description3}</p>  </li>
            </ul>
        </div>
    </div>
</Link>
    )
}