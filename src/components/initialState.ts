interface IMainState {
    gameID:string|null,
    active: boolean,
    attempts: number,
    prize: null|string,
    angle: number,
    results: number[],
    gameWasStarted: boolean,
    loading: boolean,
    success: boolean,
    error: boolean
}

const getInitialState = (gameID:string|null , numberAttempts:number) :IMainState => (
    {
        gameID,
        active: false,
        attempts: numberAttempts,
        prize: null,
        angle:0,
        results:[0],
        gameWasStarted: false,
        loading: false,
        success:true,
        error:false
    }
)


export default getInitialState;
