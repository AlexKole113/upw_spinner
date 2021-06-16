import style from '@/styles/style.css'
import startShow from "@/components/BackGround/components/canvas";
import {useEffect} from "react";
const BackGround = () => {

    useEffect(()=>{
        startShow({selector:`#canvas-upw`})
    },[])


    return(
        <canvas id={`canvas-upw`} className={style.canvas} ></canvas>
    )
}

export default BackGround;
