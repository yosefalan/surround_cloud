import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navigation from '../Navigation';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import LandingPage from '../LandingPage/LandingPage';
import Discover from '../Discover/Discover';
import NavBar from '../NavBar/NavBar';

const Main = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isLoggedIn = false

  if(isLoggedIn) {
    return (
    <>
     <NavBar />
     <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Discover />
      )}
    </>
    )
  }
  return (
    <>
     <NavBar />
     <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <LandingPage />
      )}
    </>
    )

}



export default Main;
