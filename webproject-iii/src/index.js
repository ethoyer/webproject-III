import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import * as serviceWorker from './serviceWorker';
import App from './App'; //  importer componenten som heter App fra filen app.js  se app.js for flere notater
import Header from './components/Header.js';
import Footer from './components/Footer';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
        <Header />
        <main>
        <App />
        </main>
        <Footer />
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root') //renderer <app> i strictmode, og plasserer App komponenten i #root(root ligger inne i ../public/index.html)
);

serviceWorker.unregister();