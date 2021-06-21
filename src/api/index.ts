class API {

    static HOST = `https://us-central1-gindoracapture.cloudfunctions.net/acc_api/api/`;
    static SUBMISSIONS = API.HOST + `submissions`;
    static EMBED       = API.HOST + `embed`;

    static getGameData = ( gameId: string|null  = 'sampleId', method = 'GET' ) => {
        console.log('start fetch')
        return fetch( API.EMBED + `/${gameId}` , {
            method: method,
           // cache: 'no-cache',
           credentials: 'omit',
            // headers: {
            //     "Content-Type" : "text/plain",
            // }
        })

        // console.log(gameId,method)
        // return Promise.resolve({
        //     "settings": [
        //         {
        //             "textFillStyle": "#ffffff",
        //             "chance": 2.5,
        //             "text": "50% Discount\nonly today",
        //             "fillStyle": "#237dc9",
        //             "coupon": "50%DISCOUNT"
        //         },
        //         {
        //             "coupon": "10$DISCOUNT",
        //             "text": "10$ Discount",
        //             "fillStyle": "#03b3ef",
        //             "chance": 20,
        //             "textFillStyle": "#ffffff"
        //         },
        //         {
        //             "chance": 125,
        //             "text": "No Luck",
        //             "coupon": "",
        //             "textFillStyle": "#ffffff",
        //             "fillStyle": "#95c172"
        //         },
        //         {
        //             "chance": 5,
        //             "text": "25$ Cash",
        //             "fillStyle": "#f1954c",
        //             "textFillStyle": "#ffffff",
        //             "coupon": "25$CASH"
        //         },
        //         {
        //             "text": "No Luck",
        //             "coupon": "",
        //             "chance": 125,
        //             "textFillStyle": "#ffffff",
        //             "fillStyle": "#f9636e"
        //         },
        //         {
        //             "coupon": "10$CASH",
        //             "textFillStyle": "#ffffff",
        //             "text": "10$ Cash",
        //             "fillStyle": "#9f4966",
        //             "chance": 10
        //         }
        //     ],
        //     "name": "Spin The Wheel",
        //     "id": "sampleId"
        // })
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
