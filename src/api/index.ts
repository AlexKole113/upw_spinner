class API {

    static HOST = `https://us-central1-gindoracapture.cloudfunctions.net/acc_api/api/`;
    static SUBMISSIONS = API.HOST + `submissions`;

    static sendImpression = ( gameId: string ) => {
        return fetch( API.SUBMISSIONS , {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gameId,
                type: "impression"
            })
        })
    }

    static sendLead = ( gameId:string, email:string ) => {
        return fetch( API.SUBMISSIONS , {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gameId,
                type: "lead",
                email
            })
        })
    }

    checkEmail = () => {

    }


}
