import {useEffect} from "react";
import {getNextResult, setFewRandomResults} from "@/components/GameLogic/getFewRandomResults";
import checkWinner from "@/components/GameLogic/checkWinner";
import API from "@/api";
import {ISpinnerMap, setGameMap} from "@/components/GameLogic/mapOfSpinnerSectors";
import {IMainState} from "@/components/initialState";
let getNextRandomValue:Generator;


const useSpinnerGameLogic = (mainState:IMainState, setMainState:CallableFunction, numberAttempts:number, spinnerMap:ISpinnerMap[]|null, gameID:string|null, setSpinnerMap:CallableFunction ) => {


    useEffect(() => {
        if( mainState.gameWasStarted && mainState.attempts > 0 ) {

            if( mainState.attempts === numberAttempts ){
                const results = setFewRandomResults( numberAttempts );
                getNextRandomValue = getNextResult( results );
                setMainState((prevState:IMainState)=>({...prevState, results }));
            }

            const {value:randomAngle} = getNextRandomValue.next();
            setMainState((prevState:IMainState)=>({...prevState, angle: randomAngle}));

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
                    .then( r => r )
                    .then( data => { setSpinnerMap(() => setGameMap( data )) })
                    .catch( ( error ) => {
                        setMainState((prevState:IMainState) => ({
                            ...prevState,
                            error: error.message
                        }))
                    })
            }
        }
    },[mainState.gameWasStarted]);



}

export default useSpinnerGameLogic;
