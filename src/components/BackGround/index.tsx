import style from '@/styles/style.css'
import {useEffect} from "react";
import Fireworks from "@/components/BackGround/components/canvas";
const BackGround = () => {


    useEffect(()=>{
        let show:any = new Fireworks({selector:`#canvas-upw`});
        show.run();
        return () => {
            show.clear();
            show = null;
        }
    },[])


    return(
        <canvas id={`canvas-upw`} className={style.canvas} ></canvas>
    )
}

export default BackGround;
