import Cursostyles from "./styles/curso.module.css"
import Navbar from "./Components/Navbar"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Curso() {

    const [linkVideo,setLinkvideo] = useState()
    const [nameVideo,setNameVideo] = useState()
    const [description,setDescription] = useState()
    const {name} = useParams()

    useEffect(()=>{
        function obetenervideos(){
            fetch(`https://backendolanguajes-production.up.railway.app/curso/${name}`).then(response=>response.json()).then(data=> {setLinkvideo(data[0].url);setNameVideo(data[0].name);
            setDescription(data[0].description)
            })
        }
        obetenervideos()
    },[])

    console.log(<Navbar />)

    return(
        <div>
            <Navbar/>
        <div onScroll={(e)=>{console.log(e)}} className={Cursostyles.cursocontainer}>

    <iframe className={Cursostyles.video} src={linkVideo} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
<p>{nameVideo}</p>
            <p>{description}</p>
        </div>
        </div>
    )
}