import style from './styles/index.css'
import InputGroup from "@/components/InputGroup";
import {ChangeEvent, useState} from "react";
import isCorrectValue from "@/utils/validators/isCorrectValue";
const Form = ({mainText, inputPlaceholder, btnText, action, appState }:{mainText:string, inputPlaceholder:string, btnText:string, action:(state:string)=>void, appState:{loading:boolean, [key:string]:any} } ) => {

    const [state, setState] = useState({value:'', error:false});
    const getTypedEmail = (e:ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value
        setState( (prevState) =>({...prevState, value }) )
    }

    const checkValue = ( action:(state:string)=>void, value:string ) => {
        if( !isCorrectValue( value ) ){
            setState((prevState) =>({...prevState, error: true}))
        } else {
            action(value)
        }
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault(); checkValue(action, state.value) }} className={style.form}>
            <span className={style.cta}>
                { mainText }
            </span>
            <InputGroup formState={state} action={getTypedEmail} placeholder={inputPlaceholder} btnText={btnText} appState={appState} />
        </form>
    )
}

export default Form;
