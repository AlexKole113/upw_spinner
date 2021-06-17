import style from '@/styles/style.css'
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

    return( <img style={{transform: `rotate(${rotateState}deg)` }} className={style.spinnerUpwMain} src='assets/spinner.png' alt={"spinner"} />)
}
export default Spinner;
