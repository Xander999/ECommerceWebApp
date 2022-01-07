import React from 'react';
import './App.css';
import {Router, Route, Redirect} from 'react-router-dom'; 

import Headers from './features/headers/Headers.js';
import HeaderAds from './features/headerAds/HeaderAds.js';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={

    }
  }


  render(){
  return (
    <div>
      <HeaderAds />
      <Headers />
      {/* <Router>
        <Route exact path="/" />
        <Route exact path="/shop" />
        <Route exact path="/anime-news" />
      </Router> */}
      
    </div>
  );
  }
}

export default App;
