import DiscoverTrackFeed from "../Discover/DiscoverTrackFeed";

const TrackPage = ({setCurrentTrack}) => {

  return (
    <>
      <div className="discoverMainContainer">
        <h1>Track Page</h1>
        <DiscoverTrackFeed setCurrentTrack={setCurrentTrack}/>
      </div>
    </>
  )

};


export default TrackPage;
