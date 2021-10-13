import ReactAudioPlayer from 'react-audio-player';

// const nowPlaying = 'https://surroundcloud.s3.us-east-2.amazonaws.com/Pink+Floyd+-+Dark+Side+of+the+Moon/Pink+Floyd+Breathe+(In+the+Air).mp3'


const AudioPlayer = () => {

  return (
    <>
      <div>
        <h1>Audio Player</h1>
        <ReactAudioPlayer
        src="https://surroundcloud.s3.us-east-2.amazonaws.com/Pink+Floyd+-+Dark+Side+of+the+Moon/Pink+Floyd+Breathe+(In+the+Air).mp3"
        autoPlay
        controls />
      </div>
    </>
  )

};


export default AudioPlayer;
