// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import DiscoverTrackFeed from "../Discover/DiscoverTrackFeed";
import './ProfilePage.css'
import { fetchTrack } from '../../store/music'
import ProfileTrackFeed from './ProfileTrackFeed'

const ProfilePage = ({setCurrentTrack, setTrackId, user}) => {


  // const { trackId } = useParams();
  // const dispatch = useDispatch();
  // const track = useSelector(state => state.music);
  // useEffect(() => {
  //   dispatch(fetchTrack(trackId));
  // }, [dispatch]);

  return (
    <div className="mainContainer">
      <div className="centerContainer">
        <div className="profileContainer">
            <div className="profilePicContainer">
              <img src={user.imageURL} className="profilePicImage" />
            </div>
            <div class="profileUsernameContainer" >
              <h1><span class="profileUsername">{user.username}</span></h1>
            </div>
        </div>
        <ProfileTrackFeed user={user} />
      </div>
    </div>
  )

};


export default ProfilePage;
