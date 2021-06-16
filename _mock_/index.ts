class APIdummy {

    // static HOST = `https://us-central1-gindoracapture.cloudfunctions.net/acc_api/api/`;
    // static SUBMISSIONS = API.HOST + `submissions`;

   static sendImpression = ( gameId: string ) => {
        const randomNetworkError = ( Math.random() > .99 ) ? true : false;

        return new Promise(( resolve, reject )=>{
            setTimeout(() => {
                if(!randomNetworkError ){
                    resolve('OK 200' + gameId)
                } else {
                    reject('ERROR 500')
                }
            },350 )
        })
        .then(()=>{
            return 'ok'
        })

    }

    static sendLead = ( gameId:string, email:string ) => {
        const randomNetworkError = ( Math.random() > .99 ) ? true : false;
        return new Promise(( resolve, reject )=>{
            setTimeout(() => {
                if(!randomNetworkError ){
                    resolve('OK 200' + gameId + email)
                } else {
                    reject('EROOR 500')
                }
            },350 )
        })
        .then(()=>{
            return 'ok'
        })

    }

    checkEmail = () => {

    }

}

export default APIdummy;
