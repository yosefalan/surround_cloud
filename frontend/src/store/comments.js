import { csrfFetch } from "./csrf";

const GET_COMMENTS = "GET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT"
const DELETE_COMMENT = "DELETE_COMMENT";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment
})

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});

export const fetchComments = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/tracks/${id}/comments`);
  if (res.ok) {
    const comments = await res.json();
    dispatch(getComments(comments));
  } else {
    throw res;
  }
}

export const postComment = (comment, id) => async (dispatch) => {
  const { body } = comment;
  console.log("&&&&&&&&", body)
  const res = await csrfFetch(`/api/tracks/${id}/comments`, {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
  });
  if (res.ok) {
    const data = await res.json();
  dispatch(addComment(data));
  } else {
  return res;
  };
}

export const putComment = (comment, trackId, id) => async (dispatch) => {
  const { content } = comment;
  const response = await csrfFetch(`/api/tracks/${trackId}/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      content,
    }),
  });

  if (response.ok) {
  const data = await response.json();
  dispatch(editComment(data));
  return data;
  }
};

export const removeComment = (trackId, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/tracks/${trackId}/comments/${id}`, {
    method: "delete",
  });
  if (response.ok) {
  const data = await response.json();
  dispatch(deleteComment(data));
  return data;
  }
};

const initialState = { comments: null };

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS: {
      const allComments = {};
      const comments = Object.values(action.payload);
      comments.forEach((comment) => {
        allComments[comment.id] = comment;
      });
      return {
        ...state,
        comments: { ...allComments },
      };
    }
    case ADD_COMMENT:
      newState = Object.assign({}, state);
      newState.comments = {
        ...newState.comments,
        [action.payload.id]: action.payload,
      };
      return newState;
      case EDIT_COMMENT: {
        const allComments = {};
        const comments = Object.values(action.payload);
        comments.forEach((comment) => {
          allComments[comment.id] = comment;
        });
        return {
          ...state,
          comments: { ...allComments },
        };
      }
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.comment];
      return newState;
    }
    default:
      return state;
  }
};


export default commentReducer
