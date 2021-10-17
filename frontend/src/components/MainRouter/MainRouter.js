import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import LandingPage from '../LandingPage/LandingPage';
import Discover from '../Discover/Discover';
import NavBar from '../NavBar/NavBar';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ProfilePage from '../ProfilePage/ProfilePage';
import TrackPage from '../TrackPage/TrackPage'

const MainRouter = ({ isloaded }) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
    //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // }, [dispatch]);

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [ currentTrack, setCurrentTrack ] = useState('');
  

  if(sessionUser) {
    return (
      <Switch>
        <Route path='/' exact>
          <NavBar />
          <Discover setCurrentTrack={setCurrentTrack}/>
          <AudioPlayer currentTrack={currentTrack} />
        </Route>

        <Route path='/users/:userId'>
          <NavBar />
          <ProfilePage
          setCurrentTrack={setCurrentTrack}
          user={sessionUser}
          />
          <AudioPlayer currentTrack={currentTrack} />
        </Route>

        <Route path='/tracks/:trackId'>
          <NavBar />
          <TrackPage setCurrentTrack={setCurrentTrack}/>
          <AudioPlayer currentTrack={currentTrack} />
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact>
        <LandingPage />
        <AudioPlayer currentTrack={currentTrack} />
      </Route>
    </Switch>
    )
}



export default MainRouter;
