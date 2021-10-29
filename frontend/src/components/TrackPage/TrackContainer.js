import styles from './TrackPage.css'

const TrackContainer = ({setCurrentTrack, track}) => {

  console.log('@@@@@TrackContainer:', track)

  return (

        <div className="trackContainer">
            <div className="trackContainerLeft">
              <div className="trackContainerLeftUpper">
                <div className="iconContainer">
                  <img className="playIcon" src='/images/play.png'></img>
                </div>
                <div className="trackContainerTrackInfo">
                  <p><span className="trackInfoSpan">{track.Artist.name}</span></p>
                  <h1><span className="trackInfoSpan">{track.title}</span></h1>
                </div>
              </div>
            </div>
            <div className="trackContainerRight">
              <div className="trackImageContainer">
                <img id="trackImage" src={track.Album.imageURL}></img>
              </div>
            </div>
        </div>

  )

};

    export default TrackContainer;
