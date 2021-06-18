import style from "./styles/index.css";
import {useEffect, useState} from "react";

const Congratulate = ({ appState, action, delayToShow}:{appState:{[key:string]:any,loading: boolean}, action:CallableFunction, delayToShow:number}) => {
    const { prize } = appState;

    const[state,setState] = useState('')
    useEffect(() => {
        setTimeout(()=>{
            setState(()=> style.containerShowed)
        },delayToShow)
    },[])


    const onShopAction = (e:React.MouseEvent<Element, MouseEvent>) :void => {
        e.preventDefault();
        action()
    }

    return(
        <div className={`${style.container} ${state}`} >
            <div className={style.congratulateBlock}>
                <span className={style.congratulateBlockTitle} >{`Congratulations!`}</span>
                <div  className={style.contentBlock} >
                    <div className={style.prizeGroup}>
                        <span className={style.prizeGroupTitle}>{`You got a`}</span>
                        <span className={style.prizeGroupName}>{prize.title}</span>
                    </div>
                    <div className={style.codeGroup}>
                        <span className={style.codeGroupTitle}>{`You Discount Code`}</span>
                        <span className={style.codeGroupName}>{ (prize.coupon) ? prize.coupon : `:(` }</span>
                    </div>
                    <div className={style.btnGroup}>
                        <a onClick={(e)=> {onShopAction(e)}} className={style.btnGroupBtn} href="">{`shop now`}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Congratulate;
