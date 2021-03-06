export interface IMainState {
    gameID:string|null,
    startButtonPosition: 'right'| 'left' | 'bottom' | null,
    active: boolean,
    attempts: number,
    prize: null| { title:string, coupon: string, [key:string]:any },
    angle: number,
    results: number[],
    gameWasStarted: boolean,
    emailWasSent: boolean,
    loading: boolean,
    success: boolean,
    error: boolean|string
}

const getInitialState = (gameID:string|null , numberAttempts:number) :IMainState => (
    {
        gameID,
        startButtonPosition: null,
        active: false,
        attempts: numberAttempts,
        prize: null,
        angle:0,
        results:[0],
        gameWasStarted: false,
        emailWasSent: false,
        loading: false,
        success:true,
        error:false
    }
)


export default getInitialState;
