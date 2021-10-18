import { csrfFetch } from "./csrf";

const GET_TRACKS = 'GET_TRACKS';
const GET_USER_TRACKS = 'GET_USER_TRACKS';
const GET_TRACK = 'GET_TRACK';
const ADD_TRACK = 'ADD_TRACK';

const getTracks = (tracks) => {
  return {
    type: GET_TRACKS,
    tracks,
  };
};

const getUserTracks = (tracks) => {
  return {
    type: GET_USER_TRACKS,
    tracks,
  };
};

const getTrack = (track) => {
  return {
    type: GET_TRACK,
    track,
  };
};

const addTrack = track => ({
  type: ADD_TRACK,
  track
})

export const fetchTracks = () => async (dispatch) => {
  const res = await csrfFetch('/api/tracks')
  if (res.ok) {
    const tracks = await res.json();
    dispatch(getTracks(tracks));
  } else {
    throw res;
  }
}


export const fetchUserTracks = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/tracks`)
  if (res.ok) {
    const tracks = await res.json();
    dispatch(getUserTracks(tracks, id));
  } else {
    throw res;
  }
}

export const fetchTrack = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/tracks/${id}`)
  if (res.ok) {
    const track = await res.json();
    console.log('WWWWWWWWWWWWWW', track)
    dispatch(getTrack(track));
  } else {
    throw res;
  }
}

export const uploadTrack = (data) => async (dispatch) => {
  const {
    title,
    artist,
    album,
    art,
    url,
  } = data;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('artist', artist);
  formData.append('album', album);
  formData.append('art', art);
  formData.append('url', url);

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
      action.tracks.forEach(track => {
        return allTracks[track.id] = track;
      });
      return allTracks;
    }
    case GET_USER_TRACKS: {
      const allTracks = {};
      action.tracks.forEach(track => {
        return allTracks[track.id] = track;
      });
      return allTracks;
    }
    case GET_TRACK: {
      const track = {};
      return track;
    }
    case ADD_TRACK:
      return { ...state, [action.song.id]:action.song};

      default:
      return state;
    }
  }











  export default musicReducer
