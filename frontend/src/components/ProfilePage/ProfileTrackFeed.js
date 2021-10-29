import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserTracks } from '../../store/music'
import styles from './ProfilePage.css'

const ProfileTrackFeed = ({setCurrentTrack, setTrackId, user}) => {
  const userId = user.id
  const dispatch = useDispatch();
  const tracks = useSelector(state => Object.values(state.music));
  useEffect(() => {
    dispatch(fetchUserTracks(userId));
  }, [dispatch]);

  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX", tracks)
  return (
    <>
      <div>
        <h1>Your Tracks</h1>
        <div className="feedContainer">
          <div className="trackCarousel">
          {tracks.map((track => {
            return (
              <div className="trackSlot">
                <img src={track.Album.imageURL} className="albumArt" onClick={ (e) => setCurrentTrack(track.url)}>
                </img>
                <a onClick={ (e) => setTrackId(track.id)} className="trackInfo" href={`/tracks/${track.id}`}>{track.Artist.name} - {track.title}</a>
              </div>
              )
            }))
          }
          </div>
        </div>
      </div>
    </>
  )
};


export default ProfileTrackFeed;
