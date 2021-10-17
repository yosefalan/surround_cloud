
import DiscoverTrackFeed from "../Discover/DiscoverTrackFeed";

const ProfilePage = ({setCurrentTrack}) => {

  return (
    <>
      <div className="discoverMainContainer">
        <h1>Profile Page</h1>
        <DiscoverTrackFeed setCurrentTrack={setCurrentTrack}/>
      </div>
    </>
  )

};


export default ProfilePage;
