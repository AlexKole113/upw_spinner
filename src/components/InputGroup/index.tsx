import style from "@/styles/style.css";
import {ChangeEvent} from "react";

const InputGroup = ({ placeholder, btnText, formState, action, appState }:{placeholder:string, btnText:string, formState:string, action:(e:ChangeEvent)=> void, appState:{loading:boolean, [key:string]:any} }) => {

    return(
        <>
            <div className={style.spinnerUpwInputGroup}>
                <input onChange={(e)=>{action(e)}} className={style.spinnerUpwInput} type="text" placeholder={placeholder} value={formState} />

                <div className={style.spinnerUpwBtnSlot}>
                    { ( appState.loading) ? <img className={style.spinnerUpwInputGroupLoader} src='assets/preloader.gif' /> :  <input type="submit" className={style.spinnerUpwFormBtn} value={btnText} /> }
                </div>
            </div>
        </>
    )
}

export default InputGroup
