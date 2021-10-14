import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTracks } from '../../store/music'
import styles from './Discover.css'
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const DiscoverTrackFeed = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => Object.values(state.music));
  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  const playTrack = () => {
    <AudioPlayer
    autoPlay
    src="https://surroundcloud.s3.us-east-2.amazonaws.com/Pink+Floyd+-+Dark+Side+of+the+Moon/Pink+Floyd+Breathe+(In+the+Air).mp3"
    layout="horizontal"
    />
  }

  return (
    <>
      <div>
        <h1>Discover Track Feed </h1>
        <div className="feedContainer">
          <div className="trackCarousel">
          {tracks.map((track => {
            return (
              <div className="trackSlot">
                <img src={track.Album.imageURL} className="albumArt" onClick={ (e) => playTrack()}></img>
                <p className="trackInfo">{track.Artist.name} - {track.title}</p>

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


export default DiscoverTrackFeed;
