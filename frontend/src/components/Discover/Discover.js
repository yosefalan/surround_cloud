// import NavBar from "../NavBar/NavBar";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
import DiscoverTrackFeed from "./DiscoverTrackFeed";

const Discover = ({setCurrentTrack, setTrackId}) => {

  return (
      <div className="mainContainer">
        <div className="centerContainer">
        <DiscoverTrackFeed setCurrentTrack={setCurrentTrack}
        setTrackId={setTrackId}
        />
        </div>
      </div>
  )

};


export default Discover;
