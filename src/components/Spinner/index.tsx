import style from './styles/index.css'
import {useEffect, useState} from "react";
const Spinner = ({rotate}:{rotate:number}) => {

    const [rotateState, setRotateState ] = useState(0)
    useEffect(()=>{
        if(rotate === 0 ){
            setRotateState(0)
        } else {
            setRotateState(0)
            setRotateState((prevAngle) => prevAngle+=rotate )
        }
    },[rotate])

    return( <img style={{transform: `rotate(${rotateState}deg)` }} className={style.spinner} src='https://cranky-bartik-376bfe.netlify.app/assets/spinner.png' alt={"spinner"} />)
}
export default Spinner;
