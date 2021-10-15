import NavBar from "../NavBar/NavBar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import DiscoverTrackFeed from "./DiscoverTrackFeed";

const Discover = ({setCurrentTrack}) => {

  return (
    <>
      <div className="discoverMainContainer">
        <h1>Discover</h1>
        <DiscoverTrackFeed setCurrentTrack={setCurrentTrack}/>
      </div>
    </>
  )

};


export default Discover;
