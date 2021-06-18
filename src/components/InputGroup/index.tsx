import style from "./styles/index.css";
import {ChangeEvent} from "react";

const InputGroup = ({ placeholder, btnText, formState, action, appState }:{placeholder:string, btnText:string, formState:{value:string,error:boolean}, action:(e:ChangeEvent)=> void, appState:{loading:boolean, [key:string]:any} }) => {

    return(
        <>
            <div className={`${style.inputGroup} ${( formState.error && !formState.value )? style.invalid : ''}`}>
                <input onChange={(e)=>{action(e)}} className={style.input} type="text" placeholder={placeholder} value={formState.value} />
                <div className={style.slot}>
                    { ( appState.loading) ? <img className={style.loader} src='assets/preloader.gif' /> :  <input type="submit" className={style.btn} value={btnText} /> }
                </div>
            </div>
        </>
    )
}

export default InputGroup
