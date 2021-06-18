import {getSectorFromAngle, ISpinnerMap} from "@/components/GameLogic/mapOfSpinnerSectors";

const checkWinner = ( randomAngle:number, spinnerMap:ISpinnerMap[], delay:number ) => {
    
    const fullTurns = ( randomAngle - 90 )/360 ;
    const percentFrom360 = fullTurns % 1;
    const normalizeAngle = 360 * ( 1 - percentFrom360 );

    return new Promise(( resolve )=>{
        setTimeout(()=>{
            resolve( getSectorFromAngle( normalizeAngle, spinnerMap ))
        }, delay)
    });
}

export default checkWinner;
