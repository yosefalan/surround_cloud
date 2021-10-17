import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTracks } from '../../store/music'
import styles from './Discover.css'


const DiscoverTrackFeed = ({setCurrentTrack}) => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => Object.values(state.music));
  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Discover Track Feed </h1>
        <div className="feedContainer">
          <div className="trackCarousel">
          {tracks.map((track => {
            return (
              <div className="trackSlot">
                <img src={track.Album.imageURL} className="albumArt" onClick={ (e) => setCurrentTrack(track.url)}></img>
                <a className="trackInfo" href={`/tracks/${track.id}`}>{track.Artist.name} - {track.title}</a>
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
