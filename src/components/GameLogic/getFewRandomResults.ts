import rotateRandomizer from "@/components/GameLogic/rotateRandomizer";
const setFewRandomResults = (num:number ) :number[] => {
    const results = [];
    const turn = 360;
    for(let i = 1; i <= num; i++ ){
        const k = i * 2 + i;
        results.push( rotateRandomizer( turn * k, turn * k + turn) )
    }
    return results;
}


function* getNextResult( results:number[] ) {
    for(let i = 0; i < results.length; i++){
        yield results[i]
    }
}

export {setFewRandomResults,getNextResult};
