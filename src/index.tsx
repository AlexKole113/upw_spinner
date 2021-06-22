import ReactDOM from 'react-dom';
import App from './components/App'

const embedSrc = 'https://someEmbed/script/there/';
const cssUrl   = 'dist/assets/css/main.css';

// root
const root = document.createElement('div');
root.setAttribute('id','upw-spinner-root' );
// styles
const link = document.createElement('link');
link.setAttribute('rel','stylesheet');
link.setAttribute('href', cssUrl  );

document.head.append(link)
document.body.append(root)

const gameID = document.querySelector(`[src^="${embedSrc}"]`)
    ?.getAttribute('src')
    ?.split(embedSrc)

console.log(gameID)



const initialScript = document.querySelector('[data-gameID]');


ReactDOM.render(
    <App gameID={initialScript?.getAttribute('data-gameID') ?? null } />,
    document.querySelector('#upw-spinner-root'),
);
