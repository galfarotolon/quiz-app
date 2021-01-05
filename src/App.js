import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//import components

import Home from './components/Home'
import Trivia from './components/Trivia'
import Countries from './components/Countries'

function App() {


  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/trivia' component={Trivia} />
        <Route exact path='/countries' component={Countries} />


      </Switch>



    </div>

  );

}
export default App;
