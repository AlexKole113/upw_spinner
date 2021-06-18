import BackGround from "@/components/BackGround";
import CloseBtn from "@/components/CloseBtn";
import Spinner from "@/components/Spinner";
import SpinnerCenterGroup from "@/components/SpinnerCenterGroup";
import Arrow from "@/components/Arrow";
import Congratulate from "@/components/Congratulate";
import {useEffect,useState} from "react";
import checkWinner from "@/components/GameLogic/checkWinner";
import {setFewRandomResults,getNextResult} from "@/components/GameLogic/getFewRandomResults";
import getInitialState from "@/components/initialState";
let getNextRandomValue:Generator;

import APIdummy from "../../_mock_";
import style from '@/styles/style.css'
import API from "@/api";
import {ISpinnerMap, setGameMap} from "@/components/GameLogic/mapOfSpinnerSectors";


export default ({gameID}:{gameID:string|null}) => {

    const numberAttempts = 1;
    const [ mainState, setMainState ]   = useState( getInitialState( gameID , numberAttempts ) );
    const [ spinnerMap, setSpinnerMap ] = useState<ISpinnerMap[]|null>(null);

    // add EventListener which start Game AND get spinnerMap
    useEffect(() => {
        window.addEventListener('mouseout', (e) => {
            if( e.relatedTarget === null ) setMainState((prevState)=>({...prevState, active: true}))
        })
        API.getGameData( gameID )
        .then( r => r.json() )
        .then( data => { setSpinnerMap(() => setGameMap( data )) });
    },[]);

    //Send Impression after show spinner
    useEffect(() => {
        if( mainState.active && gameID ) {
            APIdummy.sendImpression( gameID )
                .then(( response )=>{
                    console.log(response)
                })
                .catch((e)=>{
                    setMainState((prevState)=>({
                        ...prevState,
                        error: e,
                    }))
                })
        }

    },[mainState.active]);

    useEffect(() => {
        if(mainState.gameWasStarted && mainState.attempts > 0) {

            if( mainState.attempts === numberAttempts ){
                const results = setFewRandomResults( numberAttempts );
                getNextRandomValue = getNextResult( results );
                setMainState((prevState)=>({...prevState, results }));
            }

            const {value:randomAngle} = getNextRandomValue.next();
            setMainState((prevState)=>({...prevState, angle: randomAngle}));

            if ( spinnerMap !== null ) {
                checkWinner( randomAngle, spinnerMap,300 )
                    .then(( prize ) => {
                        // @ts-ignore
                        setMainState((prevState) => ({
                            ...prevState,
                            prize,
                            gameWasStarted: false,
                            attempts: prevState.attempts -= 1,
                        }))
                    })
            } else {
                API.getGameData( gameID )
                    .then( r => r.json() )
                    .then( data => {
                        setSpinnerMap(() => setGameMap( data ))
                    })
                    .catch((e)=>{
                        console.log(e)
                        setMainState((prevState) => ({
                            ...prevState,
                            error: true
                        }))
                    })
            }



        }
    },[mainState.gameWasStarted])

    //Reset Game and Close PopUp
    const closeAndReset = () => {
        setMainState(() => ({...getInitialState(gameID,numberAttempts)}))
    }

    //Send Email
    const sendEmail = ( value:string ) => {
        if(!mainState.gameID || !value ) return;

        setMainState((prevState)=>({...prevState, success: false, error:false, loading: true }))

        APIdummy.sendLead( mainState.gameID, value )
            .then(()=>{
                setMainState((prevState)=>({
                    ...prevState,
                    error: false,
                    loading: false,
                    success: true,
                    gameWasStarted: true,
                }))
            })
            .catch((e)=>{
                setMainState((prevState)=>({
                    ...prevState,
                    error: e,
                }))
            })
    }

    return (
        <section className={`${style.spinner}  ${ ( !mainState.active ) ? style.displayNONE : '' }`} >
            { (mainState.prize) ?  <BackGround /> : '' }
            <div className={style.container}>
                <CloseBtn action={closeAndReset} />
                <Spinner rotate={mainState.angle} />
                { ( !mainState.prize ) ? <SpinnerCenterGroup appState={mainState} action={sendEmail} /> : <Congratulate appState={mainState} delayToShow={500} /> }
                <Arrow gameState={mainState} />
            </div>
        </section>
    );
}
