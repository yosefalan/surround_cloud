import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import LandingPage from '../LandingPage/LandingPage';
import Discover from '../Discover/Discover';
import NavBar from '../NavBar/NavBar';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


const MainRouter = () => {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  const isLoggedIn = useSelector(state => state.session.user);
  const [ currentTrack, setCurrentTrack ] = useState('');

  if(isLoggedIn) {
    return (
      <Switch>
        <Route path='/' exact>
          <NavBar />
          <Discover setCurrentTrack={setCurrentTrack}/>
          <AudioPlayer currentTrack={currentTrack} />
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
