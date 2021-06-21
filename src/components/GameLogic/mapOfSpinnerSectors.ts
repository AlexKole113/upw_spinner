interface ISpinnerMap {
    title:string,
    start:number,
    end:number,
    [key:string]: any
}

const setGameMap = ( {settings}:{settings:{text:string,coupon:string,chance:string|number,[key:string]:any}[]} ) :ISpinnerMap[] => {

   let map = []
    for(let i = 0; i < settings.length; i++ ) {
        map.push({
            title: settings[i].text,
            chance: settings[i].chance,
            coupon:  settings[i].coupon,
            start: ( 360 / settings.length ) * i,
            end:  (( 360 / settings.length ) * i ) + ( 360 / settings.length ) ,
        })
    }

   return map;
}


const getSectorFromAngle = ( angle:number , spinnerMap:ISpinnerMap[] ) => {
    for ( let item of spinnerMap ) {
        const { start, end } = item;
        if ( angle >= start && angle <= end ) return item;
    }
}

export {getSectorFromAngle, setGameMap, ISpinnerMap };
