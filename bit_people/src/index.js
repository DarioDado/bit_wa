import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
