import style from './styles/index.css'

const ErrorMessage = ({text}:{text:string|boolean}) => {
    return(
        <div className={style.errorBlock}>
            <div className={style.error}>{text}</div>
        </div>
    )
}

export default ErrorMessage;
