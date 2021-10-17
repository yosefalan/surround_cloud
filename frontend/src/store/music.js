import { csrfFetch } from "./csrf";

const GET_TRACKS = 'GET_TRACKS';
const ADD_TRACK = 'ADD_TRACK';
const UPDATE_TRACK = 'UPDATE_TRACK'
const REMOVE_TRACK = 'REMOVE_TRACK';

const getTracks = (tracks) => {
  return {
    type: GET_TRACKS,
    tracks,
  };
};

const addTrack = track => ({
  type: ADD_TRACK,
  track
})

const updateTrack = track => ({
  type: UPDATE_TRACK,
  track
})

const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
})

export const fetchTracks = () => async (dispatch) => {
  const res = await csrfFetch('/api/tracks')
  if (res.ok) {
    const data = await res.json();
    // console.log("******", data)
    dispatch(getTracks(data));
  } else {
    throw res;
  }
}

export const uploadTrack = (data) => async (dispatch) => {
  const {
    title,
    artist,
    url,
    album,
    art,
    track,
  } = data;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('artist', artist);
  formData.append('url', url);
  formData.append('album', album);
  formData.append('art', art);
  formData.append('track', track);

  const res = await csrfFetch(`/api/tracks/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });

  const newSong = await res.json();
  dispatch(addTrack(newSong));
};

const initialState = {}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS: {
      const allTracks = {};
      // console.log("*****", typeof action.tracks)
      action.tracks.forEach(track => {
        return allTracks[track.id] = track;
      });
      return allTracks;
    }
    case ADD_TRACK:
      return { ...state, [action.song.id]:action.song};

      default:
      return state;
    }
  }











  export default musicReducer
