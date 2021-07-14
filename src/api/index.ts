declare const window: any;
class API {

    static getGameData = ( gameId: string|null  = 'sampleId', method = 'GET' ) :Promise<{settings:any, [key:string]:any, labelButton: boolean; position: "right" | "left" | "bottom" | null;}> => {
        console.log(gameId,method)
        return new Promise((res)=>{
            setTimeout(()=>{
                res(window.SPINNER_MAP)
            },300)
        })
    }

    static sendImpression = ( gameId:string|null, method:string = 'POST' ) => {
        console.log(gameId,method)
        if( !gameId ) {
            throw new Error('no gameId for sendImpression')
        }
        return new Promise((res)=> {
            setTimeout(() => {
                res('ok');
            }, 200);
        });
    }

    static sendLead = ( gameId:string|null, email:string, method:string = 'POST' ) => {
        console.log(gameId,method,email)
        if( !gameId ) {
            throw new Error('no gameId for sendLead')
        }
        return new Promise((res)=>{
            setTimeout(()=>{
                res('ok')
            },450)
        })
    }

}

export default API;
