import BackGround from "@/components/BackGround";
import CloseBtn from "@/components/CloseBtn";
import Spinner from "@/components/Spinner";
import SpinnerCenterGroup from "@/components/SpinnerCenterGroup";
import Arrow from "@/components/Arrow";
import {useEffect,useState} from "react";
import checkWinner from "@/components/GameLogic/checkWinner";
import {setFewRandomResults,getNextResult} from "@/components/GameLogic/getFewRandomResults";
import getInitialState from "@/components/initialState";
let getNextRandomValue:Generator;

import APIdummy from "../../_mock_";
import style from '@/styles/style.css'
import Congratulate from "@/components/Congratulate";

export default ({gameID}:{gameID:string|null}) => {

    const numberAttempts = 3;
    const [ mainState, setMainState ] = useState( getInitialState( gameID , numberAttempts ) );

    // add EventListener which start Game
    useEffect(() => {
        window.addEventListener('mouseout', (e) => {
            if( e.relatedTarget === null ) setMainState((prevState)=>({...prevState, active: true}))
        })
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

            console.log(mainState.results)

            const {value:randomAngle} = getNextRandomValue.next();
            console.log(randomAngle)
            setMainState((prevState)=>({...prevState, angle: randomAngle}));

            console.log(randomAngle);

            checkWinner( randomAngle, 300 )
                .then(( prize ) => {
                    if ( typeof prize === 'string' ) {
                        //@ts-ignore
                        setMainState((prevState) => ({
                            ...prevState,
                            prize,
                            gameWasStarted: false,
                            attempts: prevState.attempts -= 1,
                        }))
                    }
                })


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
