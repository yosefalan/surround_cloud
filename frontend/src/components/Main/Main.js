import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import LandingPage from '../LandingPage/LandingPage';
import Discover from '../Discover/Discover';
import NavBar from '../NavBar/NavBar';

const Main = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isLoggedIn = useSelector(state => state.session.user);

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
      <LandingPage />
    </>
    )

}



export default Main;
