import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'; //  importer componenten som heter App fra filen app.js  se app.js for flere notater

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //renderer <app> i strictmode, og plasserer App komponenten i #root(root ligger inne i ../public/index.html)
);

serviceWorker.unregister();