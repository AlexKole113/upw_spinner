import style from "./styles/index.css";
import Form from "@/components/Form";

const SpinnerCenterGroup = ({appState, action}:{appState:{[key:string]:any,loading: boolean}, action: (state: string) => void}) => {

    return(<div className={style.center}>
        { ( appState.error ) ?
            <div className={style.errorMessageGroup}>{appState.error}</div> :
            <Form mainText={ 'spin to win' } inputPlaceholder={ `Enter your email` } btnText={ `Spin it!` } action={action} appState={appState} />
        }
    </div>)

}

export default SpinnerCenterGroup;
