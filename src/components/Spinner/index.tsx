import style from './styles/index.css'
import {useEffect, useState} from "react";
declare const window: any;
const Spinner = ({rotate}:{rotate:number}) => {

    const IMAGE_SRC = 'https://cranky-bartik-376bfe.netlify.app/assets/spinner.png'
    //const IMAGE_SRC = window.EMBED_SPINNER_PATH +'/reel/assets/spinner.png';

    const [rotateState, setRotateState ] = useState(0)
    useEffect(()=>{
        if(rotate === 0 ){
            setRotateState(0)
        } else {
            setRotateState(0)
            setRotateState((prevAngle) => prevAngle+=rotate )
        }
    },[rotate])

    return( <img style={{transform: `rotate(${rotateState}deg)` }} className={style.spinner} src={IMAGE_SRC} alt={"spinner"} />)
}
export default Spinner;
