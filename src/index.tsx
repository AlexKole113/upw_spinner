import ReactDOM from 'react-dom';
import App from './components/App'

const EMBED_SRC = 'https://www.google.com/';
const CSS_URL   = 'dist/assets/css/main.css';


// create root
const root = document.createElement('div');
root.setAttribute('id','upw-spinner-root' );

// styles
const link = document.createElement('link');
link.setAttribute('rel','stylesheet');
link.setAttribute('href', CSS_URL  );

document.head.append( link )
document.body.append( root )

const gameID = document.querySelector(`[src^="${EMBED_SRC}"]`)
    ?.getAttribute('src')
    ?.split( EMBED_SRC )[1];


if( gameID ) {
    ReactDOM.render(
        <App gameID={ gameID } />,
        document.querySelector('#upw-spinner-root'),
    );
}



