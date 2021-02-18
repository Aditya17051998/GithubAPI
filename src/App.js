import React,{useState} from 'react';
//import {BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/auth";

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
 import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from "./config/firebaseConfig";
/// init firebase

firebase.initializeApp(firebaseConfig);
// firebase.analytics();





const  App=()=> {
  const [user,setUser]=useState(null)
  return (
    <Router>
      <UserContext.Provider value={{user,setUser}}>
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />

        </Switch>
        <Footer/>

      </UserContext.Provider>
    </Router>
  )
}

export default App;
