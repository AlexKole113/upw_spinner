import style from "./styles/index.css";
import {useEffect, useState} from "react";

const Congratulate = ({ appState, delayToShow}:{appState:{[key:string]:any,loading: boolean},delayToShow:number}) => {
    const { prize } = appState;

    const[state,setState] = useState('')
    useEffect(() => {
        setTimeout(()=>{
            setState(()=> style.containerShowed)
        },delayToShow)
    },[])


    const onSendAction = (e:React.MouseEvent<Element, MouseEvent>) :void => {
        e.preventDefault()
    }


    return(
        <div className={`${style.container} ${state}`} >
            <div className={style.congratulateBlock}>
                <span className={style.congratulateBlockTitle} >{`Congratulations!`}</span>
                <div  className={style.contentBlock} >
                    <div className={style.prizeGroup}>
                        <span className={style.prizeGroupTitle}>{`You got a`}</span>
                        <span className={style.prizeGroupName}>{prize}</span>
                    </div>
                    <div className={style.codeGroup}>
                        <span className={style.codeGroupTitle}>{`You Discount Code`}</span>
                        <span className={style.codeGroupName}>{`CODE####`}</span>
                    </div>
                    <div className={style.btnGroup}>
                        <a onClick={(e)=> {onSendAction(e)}} className={style.btnGroupBtn} href="">{`shop now`}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Congratulate;
