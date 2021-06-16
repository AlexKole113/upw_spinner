import style from '@/styles/style.css'
const Arrow = ({gameState}:{[key:string]:any}) => {
    return(
        <div className={style.spinnerUpwArrow}>
            <img className={`${style.spinnerUpwArrowImg} ${ ( gameState.gameWasStarted)? style.inGame : ''}`} src='assets/arrow.png' alt="arrow for spinner"/>
        </div>
    )
}
export default Arrow;
