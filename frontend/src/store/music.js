import { csrfFetch } from "./csrf";
export const GET_TRACKS = 'GET_TRACKS';

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

const getTracks = (tracks) => {
  return {
    type: GET_TRACKS,
    tracks,
  };
};

const initialState = {}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKS: {
      const allTracks = {};
      console.log("*****", typeof action.tracks)
      action.tracks.forEach(track => {
        return allTracks[track.id] = track;
      });
      return allTracks;
    }
      default:
      return state;
    }
  }











  export default musicReducer
