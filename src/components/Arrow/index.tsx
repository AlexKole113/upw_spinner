import style from './styles/index.css'
const Arrow = ({gameState}:{[key:string]:any}) => {
    return(
        <div className={style.arrow}>
            <img className={`${style.arrowImg} ${ ( gameState.gameWasStarted)? style.inGame : ''}`} src='https://cranky-bartik-376bfe.netlify.app/assets/arrow.png' alt="arrow for spinner"/>
        </div>
    )
}
export default Arrow;
