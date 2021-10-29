import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchTrack, fetchTracks } from '../../store/music'
import Comments from '../Comments/Comments'
import DiscoverTrackFeed from '../Discover/DiscoverTrackFeed';
import TrackContainer from './TrackContainer';
import './TrackPage.css'

const TrackPage = ({setCurrentTrack}) => {
  const dispatch = useDispatch();
  const trackId = useParams();
  useEffect(() => {
    dispatch(fetchTrack(trackId));
  }, [dispatch]);
  // const track = useSelector(state => Object.values(state.music));
  const track = useSelector(state => state.music)
  console.log("*****Trackpage:", track)
  return (
    <div className="mainContainer">
      <div className="centerContainer">
        {/* <TrackContainer track={track} />
        <Comments track={track} /> */}
        {/* <DiscoverTrackFeed /> */}
      </div>
    </div>
  )
};




export default TrackPage;
