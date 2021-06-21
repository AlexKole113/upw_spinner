import BackGround from "@/components/BackGround";
import CloseBtn from "@/components/CloseBtn";
import Spinner from "@/components/Spinner";
import SpinnerCenterGroup from "@/components/SpinnerCenterGroup";
import Arrow from "@/components/Arrow";
import Congratulate from "@/components/Congratulate";
import {useEffect,useState} from "react";
import getInitialState from "@/components/initialState";

import style from '@/styles/style.css'
import API from "@/api";
import {ISpinnerMap, setGameMap} from "@/components/GameLogic/mapOfSpinnerSectors";
import ErrorMessage from "@/components/ErrorMessage";
import useSpinnerGameLogic from "@/hooks/useSpinnerGameLogic";


export default ({gameID}:{gameID:string|null}) => {

    const numberAttempts = 1;
    const [ mainState, setMainState ]   = useState( getInitialState( gameID , numberAttempts ) );
    const [ spinnerMap, setSpinnerMap ] = useState<ISpinnerMap[]|null>(null);

    const spinnerPopUpStarter = ( e:MouseEvent ) => {
        if ( e.relatedTarget === null ) setMainState((prevState)=>({...prevState, active: true}))
    }

    // add EventListener which start Game AND get spinnerMap
    useEffect(() => {
        API.getGameData( gameID )
        .then( r => r.json() )
        .then( data => {
            setSpinnerMap(() => setGameMap( data ));
            window.addEventListener('mouseout', spinnerPopUpStarter )
        })
        .catch( ( error ) => {

                setMainState((prevState) => ({
                    ...prevState,
                    error: error.message
                }))
            })
        return(
            () => {
                window.removeEventListener('mouseout', spinnerPopUpStarter );
            }
        )
    },[]);

    //Send Impression after show spinner
    useEffect(() => {
        if( !mainState.emailWasSent && mainState.active && gameID ) {
            //TODO: API sendImpression
        }

    },[mainState.active]);

    useSpinnerGameLogic( mainState, setMainState, numberAttempts, spinnerMap, gameID, setSpinnerMap )

    //Reset Game and Close PopUp
    const closeAndReset = () => {
        setMainState(() => ({...getInitialState(gameID,numberAttempts)}))
    }

    const setEmailWasSend = () => {
        setMainState(() => ({
                ...getInitialState(gameID,numberAttempts),
                emailWasSent: true
        }))
    }

    //Send Email
    const sendEmail = ( value:string ) => {
        if(!mainState.gameID || !value ) return;
        //TODO: API sendLead AND CHANGE ---->
            setMainState((prevState)=>({
                ...prevState,
                error: false,
                loading: false,
                success: true,
                gameWasStarted: true,
            }))
        // --------------------------------->
        setMainState((prevState)=>({...prevState, success: false, error:false, loading: true }))
    }

    if( mainState.emailWasSent ) return null;
    return (
        <section className={`${style.spinner}  ${ ( !mainState.active ) ? style.displayNONE : '' }`} >
            { (mainState.prize) ?  <BackGround /> : '' }
            <div className={style.container}>
                <CloseBtn action={closeAndReset} />
                {  mainState.error ? <ErrorMessage text={mainState.error} /> :
                    (
                        <>
                            <Spinner rotate={mainState.angle} />
                            {
                                ( !mainState.gameWasStarted ) ? ( ( !mainState.prize ) ? <SpinnerCenterGroup appState={mainState} action={sendEmail} /> : <Congratulate action={setEmailWasSend} appState={mainState} delayToShow={800} /> ) : ''
                            }

                            <Arrow gameState={mainState} />
                        </>
                    )
                }
            </div>
        </section>
    );
}
