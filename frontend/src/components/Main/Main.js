import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navigation from '../Navigation';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import LandingPage from '../LandingPage/LandingPage';

const Main = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
     <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route>
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  )
}



export default Main;
