import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import App from './App'; //  importer componenten som heter App fra filen app.js  se app.js for flere notater
import Header from './components/Header.js';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <React.StrictMode>
      <HashRouter>
        <Header />
        <main>
        <App />
        </main>
        <Footer />
        </HashRouter>
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root') //renderer <app> i strictmode, og plasserer App komponenten i #root(root ligger inne i ../public/index.html)
);