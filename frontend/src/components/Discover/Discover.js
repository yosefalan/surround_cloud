// import NavBar from "../NavBar/NavBar";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
import DiscoverTrackFeed from "./DiscoverTrackFeed";

const Discover = ({setCurrentTrack, setTrackId}) => {

  return (
      <div className="main_container">
        <div className="discover_container">
        <DiscoverTrackFeed setCurrentTrack={setCurrentTrack}
        setTrackId={setTrackId}
        />
        </div>
      </div>
  )

};


export default Discover;
