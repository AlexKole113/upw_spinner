import ReactDOM from 'react-dom';
import App from './components/App'
import API from "@/api";
//import {setGameMap} from "@/components/GameLogic/mapOfSpinnerSectors";

const root = document.createElement('div');
root.setAttribute('id','upw-spinner-root' );
document.body.append(root)
const initialScript = document.querySelector('[data-gameID]');

API.getGameData('sampleId' )
    .then(r=>r.json())
    .then(r=>console.log(r))
    // .then( ( data ) => {
    //     setGameMap(data)
    // })

fetch('https://pavlov-project-management.com/wp-json')
    .then(r=>r.json())
    .then(r=>console.log(r))

ReactDOM.render(
    <App gameID={initialScript?.getAttribute('data-gameID') ?? null } />,
    document.querySelector('#upw-spinner-root'),
);
