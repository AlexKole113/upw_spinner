import style from "./styles/index.css";
import {useEffect, useState} from "react";

const TryAgain = ({ appState, action, delayToShow}:{appState:{[key:string]:any,loading: boolean}, action:CallableFunction, delayToShow:number}) => {
    const { prize } = appState;

    const[state,setState] = useState('')
    useEffect(() => {
        setTimeout(()=>{
            setState(()=> style.containerShowed)
        }, delayToShow)
    },[])


    return(
        <div className={`${style.container} ${state}`} >
            <div className={style.congratulateBlock}>
                <span className={style.congratulateBlockTitle} >{`Oops! :(`}</span>
                <div  className={style.contentBlock} >
                    <div className={style.prizeGroup}>
                        <span className={style.prizeGroupTitle}>{`You got a`}</span>
                        <span className={style.prizeGroupName}>{prize.title}</span>
                    </div>
                    <div className={style.codeGroup}>
                        <span className={style.codeGroupTitle}>{`You have ${appState.attempts} attempts`}</span>
                    </div>
                    <div className={style.btnGroup}>
                        { appState.attempts > 0 ? <a onClick={(e)=> { e.preventDefault(); action() }} className={style.btnGroupBtn} href="">{`try again`}</a> : ''}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TryAgain;
