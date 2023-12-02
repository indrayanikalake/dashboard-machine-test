import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Ads, Dashborad, NavBar, UserInfo } from './components';


function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route exact path='/' Component={Dashborad} />
      <Route exact path='/Ads' Component={Ads} />
      <Route exact path='/userInfo' Component={UserInfo} />
    </Routes>
    
   </Router>
  );
}

export default App;
