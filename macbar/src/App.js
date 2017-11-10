import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import {
  Home,
  Support,
  Contact,
  platp,
  silp,
  golp,
  platm,
  silm,
  golm } from './components';

const App = () => (
  <div>
    <Navigation /> 
    <Route path="/Home" component={Home} />
    <Route path="/Support" component={Support} />
    <Route path="/Contact" component={Contact} />
    <Route path="./Macs/gold" component={golm} />
    <Route path="./Macs/silver" component={silm} />
    <Route path="./Macs/platinum" component={platm} />
    <Route path="./Phones/gold" component={golp} />
    <Route path="./Phones/silver" component={silp} />
    <Route path="./Phones/platinum" component={platp} />

  </div>
)

export default App;
