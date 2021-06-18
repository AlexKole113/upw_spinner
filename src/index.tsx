import ReactDOM from 'react-dom';
import App from './components/App'

const root = document.createElement('div');
root.setAttribute('id','upw-spinner-root' );
document.body.append(root)
const initialScript = document.querySelector('[data-gameID]');


ReactDOM.render(
    <App gameID={initialScript?.getAttribute('data-gameID') ?? null } />,
    document.querySelector('#upw-spinner-root'),
);
