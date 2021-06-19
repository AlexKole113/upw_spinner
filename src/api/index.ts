class API {

    static HOST = `https://us-central1-gindoracapture.cloudfunctions.net/acc_api/api/`;
    static SUBMISSIONS = API.HOST + `submissions`;
    static EMBED       = API.HOST + `embed`;

    static getGameData = ( gameId: string|null  = 'sampleId', method = 'GET' ) => {
        return fetch( API.EMBED + `/${gameId}` , {
            method: method,
           // cache: 'no-cache',
           // credentials: 'include',
            headers: {
                "Content-Type" : "text/plain",
            }
        })
    }

    static sendImpression = ( gameId: string, method:string = 'POST' ) => {
        return fetch( API.SUBMISSIONS , {
            method: method,
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

    static sendLead = ( gameId:string, email:string, method:string = 'POST' ) => {
        return fetch( API.SUBMISSIONS , {
            method: method,
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

export default API;
