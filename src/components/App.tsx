import BackGround from "@/components/BackGround";
import CloseBtn from "@/components/CloseBtn";
import Spinner from "@/components/Spinner";
import Form from "@/components/Form";
import Arrow from "@/components/Arrow";
import {useEffect,useState} from "react";

import APIdummy from "../../_mock_";

import style from '@/styles/style.css'
import rotateRandomizer from "@/components/GameLogic/rotateRandomizer";
import checkWinner from "@/components/GameLogic/checkWinner";



export default ({gameID}:{gameID:string|null}) => {
    const [ mainState, setMainState ] = useState({ gameID, active: false, attempts: 3, prize: null, angle:0, gameWasStarted: false, loading: false, success:true, error:false })

    useEffect(() => {
        window.addEventListener('mouseout', (e) => {
            if( e.relatedTarget === null ) setMainState((prevState)=>({...prevState, active: true}))
        })
    },[]);

    //Send Impression after show spinner
    useEffect(()=>{
        if(mainState.active && gameID) {
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

    },[mainState.active])

    useEffect(() => {
        if(mainState.gameWasStarted && mainState.attempts > 0) {
            const randomAngle = rotateRandomizer( 1080, 1440 );
            setMainState((prevState)=>({...prevState, angle: randomAngle}));

            checkWinner( randomAngle, 300 )
            .then(( prize ) => {
                if ( typeof prize === 'string' ) {
                    //@ts-ignore
                    setMainState((prevState) => ({
                        ...prevState,
                        prize,
                        attempts: prevState.attempts -= 1,
                    }))
                }
            })


        }
    },[mainState.gameWasStarted])

    const closeAndReset = () => {
        setMainState({ gameID, active: false, attempts: 3, prize: null, angle:0, gameWasStarted: false, loading: false, success:true, error:false })
    }

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
        <section className={`${style.spinnerUPW}  ${ (!mainState.active) ? style.displayNONE : '' }`} >
            { (mainState.prize) ?  <BackGround /> : '' }
            <div className={style.spinnerUpwContainer}>
               <CloseBtn action={closeAndReset} />
               <Spinner rotate={mainState.angle} />
                {
                    ( !mainState.prize )
                        ? (<div className={style.spinnerUpwCenter}>
                            { ( mainState.error ) ?
                                <div className={style.errorMessageGroup}>{mainState.error}</div> :
                                <Form mainText={ 'spin to win' } inputPlaceholder={ `Enter your email` } btnText={ `Spin it!` } action={sendEmail} appState={mainState} />
                            }
                           </div>)
                        : (<div className={`${style.spinnerUpwCenter} ${style.spinnerUpwPrizeGroup}`} >
                             <div className={style.prizeTitle}>
                                 <span className={style.prizeTitlePre}>{`Congratulations !!!`}</span>
                                 <span className={style.prizeTitlePre}>{`You won: `}</span>
                                 <span className={style.prizeTitleMain}>{ mainState.prize }</span>
                             </div>
                             <div className={style.prizeAttempts}>
                                 {`You can try ${mainState.attempts} more times`}
                             </div>
                             <div className={style.prizeBtn}>
                                 <a href="#">get prize</a>
                                 <a href="#">try</a>
                             </div>
                          </div>)
                }
               <Arrow />
            </div>
        </section>
    );
}
