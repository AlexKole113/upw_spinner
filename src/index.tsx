import ReactDOM from 'react-dom';
import App from './components/App'

declare const window: any;


window.SPINNER_MAP = {
    "settings": [
        {
            "text": '50% Discount',
            "coupon": '50% OFF'
        },
        {
            "text": '10% Discount',
            "coupon": '10% OFF'
        },
        {
            "text": 'No Luck',
            "coupon": ''
        },
        {
            "text": '$25 Cash',
            "coupon": '25CASH'
        },
        {
            "text": 'No Luck',
            "coupon": ''
        },
        {
            "text": '$10 Cash',
            "coupon": '10CASH'
        }
    ],
    "labelButton": true,
    "position": "right"
}





window.EMBED_SPINNER_PATH = 'https://cranky-bartik-376bfe.netlify.app';
// const EMBED_SRC =  window.EMBED_SPINNER_PATH + `/reel/assets/js/main.js?gameID=`;
const CSS_URL   =  window.EMBED_SPINNER_PATH + `/dist/assets/css/main.css`;

const root = document.createElement('div');
root.setAttribute('id','upw-spinner-root' );

const link = document.createElement('link');
link.setAttribute('rel','stylesheet');
link.setAttribute('href', CSS_URL  );

document.head.append( link )
document.body.append( root )

// const gameID = document.querySelector(`[src^="${EMBED_SRC}"]`)
//     ?.getAttribute('src')
//     ?.split( EMBED_SRC )[1];

const testGAMEID = '1';
//if( gameID && root  ) {
    ReactDOM.render(
        <App gameID={ testGAMEID } />,
        document.querySelector('#upw-spinner-root'),
    );
//}



