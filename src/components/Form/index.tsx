import style from './styles/index.css'
import InputGroup from "@/components/InputGroup";
import {ChangeEvent, useState} from "react";
const Form = ({mainText, inputPlaceholder, btnText, action, appState }:{mainText:string, inputPlaceholder:string, btnText:string, action:(state:string)=>void, appState:{loading:boolean, [key:string]:any} } ) => {

    const [state, setState] = useState('');
    const getTypedEmail = (e:ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setState( value )
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault();action(state)}} className={style.form}>
            <span className={style.cta}>
                { mainText }
            </span>
            <InputGroup formState={state} action={getTypedEmail} placeholder={inputPlaceholder} btnText={btnText} appState={appState} />
        </form>
    )
}

export default Form;
