import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import LandingPage from '../LandingPage/LandingPage';
import Discover from '../Discover/Discover';
import NavBar from '../NavBar/NavBar';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import HelloWorld from '../HelloWorld/HelloWorld'

const MainRouter = () => {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  const isLoggedIn = useSelector(state => state.session.user);

  if(isLoggedIn) {
    return (
      <Switch>

        <Route path='/' exact>
          <NavBar />
          <Discover />
          <AudioPlayer />
        </Route>

        <Route path='/hello/world' exact>
          <NavBar />
          <HelloWorld />
        </Route>
      </Switch>
    )
  }
  
  return (
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
    </Switch>
    )
}



export default MainRouter;
