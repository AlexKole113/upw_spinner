let spinnerMap = [
    { title: '50% Discount only today', start:0, end: 60  },
    { title: '10$ Discount', start:60, end: 120 },
    { title: 'No Luck (green)', start:120, end: 180 },
    { title: '25% Cash', start:180, end: 240 },
    { title: 'No Luck (pink)', start:240, end: 300 },
    { title: '$10 Cash', start:300, end: 360 },
];

const setGameMap = ( {settings}:{settings:{text:string,coupon:string,chance:string,[key:string]:any}[]} ) => {

   let map = []
    for(let i = 0; i < settings.length; i++ ) {
        map.push({
            title: settings[i].text,
            start: ( 360 / settings.length ) * i,
            end:  (( 360 / settings.length ) * i ) + ( 360 / settings.length ) ,
        })
    }

    console.log(map)

}


const getSectorFromAngle = ( angle:number ) => {
    for ( let item of spinnerMap ) {
        const {title, start, end } =item;
        if ( angle > start && angle < end ) {
            return title;
        }
    }
}

export {getSectorFromAngle, setGameMap, spinnerMap};
