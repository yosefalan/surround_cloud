import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import DiscoverTrackFeed from "../Discover/DiscoverTrackFeed";
import styles from './TrackPage.css'
import { fetchTrack } from '../../store/music'


const TrackPage = ({setCurrentTrack, id}) => {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const track = useSelector(state => state.music);
  useEffect(() => {
    dispatch(fetchTrack(trackId));
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <div className="centerContainer">
        <div className="profileContainer">
            <div>
              {/* <p>{track.Artist.name}</p>
              <span>{track.title}</span> */}
            </div>


        </div>
      </div>
    </div>
  )

};


export default TrackPage;
