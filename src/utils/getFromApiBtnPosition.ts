const getFromApiBtnPosition = ({labelButton, position}:{labelButton:boolean ,position: 'right'| 'left' | 'bottom' | null}) => {
    if (!labelButton || !position ) return { startButtonPosition: null }

    const positionsMap = [
        {position: 'right'},
        {position: 'left'},
        {position: 'bottom'},
    ]

    const response:{startButtonPosition: 'right'| 'left' | 'bottom' | null} = { startButtonPosition: 'bottom' }

    positionsMap.forEach((positionOption)=>{
       if( positionOption.position === position ) {
           response.startButtonPosition = positionOption.position;
       }
    })
    return response;
}


export default getFromApiBtnPosition;
