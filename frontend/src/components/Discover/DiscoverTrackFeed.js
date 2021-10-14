import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTracks } from '../../store/music'

const DiscoverTrackFeed = () => {
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
          {tracks.map((track => {

          }))
          }



        </div>
      </div>
    </>
  )
};


export default DiscoverTrackFeed;
