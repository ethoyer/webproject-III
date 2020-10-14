import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage.js'; //importer komponenten Homepage fra Homepage.js

function App() {
  return (
    // en return() kan kun ha ett barn! du kan løse dette ved å putte alt i en <div> eller bruke den tomme <>
    <>
    {/* alt som er felles over alle sider(header og footer) kan plasseres på dette nivået(utenfor <Router>) */}
    <Router>
      {/* when URL is the same as the path="" the component on the same line is loaded */}
      {/* eksempel: hvis url er https://localhost/ så vil den loade component {Homepage} */}
      {/* Eksempel 2: se på <Route path="/student_application" component={StudentApplication} />. 
        hvis url er https://localhost/student_application så vil den nå loade en component som heter StudentApplication 
        istedenfor App */}
      {/* for å loade en component fra en annen fil så må den eksporteres fra filen(se nederst App.js og Homepage.js for eksempel) og importeres inn hit (se linje 6) */}
      <Route exact path="/" component={Homepage} />
      </Router>
    </>
  );
}


export default App; //exporter alt som står i function App() som en component med navnet App
