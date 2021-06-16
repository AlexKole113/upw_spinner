import { getSectorFromAngle } from "@/components/GameLogic/mapOfSpinnerSectors";

const checkWinner = ( randomAngle:number, delay:number ) => {

    const fullTurns = ( randomAngle - 90 )/360 ;
    const percentFrom360 = fullTurns % 1;
    const normalizeAngle = 360 * ( 1 - percentFrom360 );

    console.log('normangle', normalizeAngle)

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve( getSectorFromAngle( normalizeAngle ))
        }, delay)
    });
}

export default checkWinner;
