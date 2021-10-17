// import { csrfFetch } from "./csrf";
// export const GET_USER = 'GET_USER';

// export const fetchUser = () => async (dispatch) => {
//   const res = await csrfFetch('/api/users/:userId(\\d+')
//   if (res.ok) {
//     const data = await res.json();
//     console.log("!!!!!!!!!", data)
//     dispatch(getUser(data));
//   } else {
//     throw res;
//   }
// }

// const getUser = (user) => {
//   return {
//     type: GET_USER,
//     user,
//   };
// };

// const initialState = {}

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USER: {
//       const user = {};
//       console.log("*****", typeof action.tracks)
//       action.tracks.forEach(user => {
//         return user[user.id] = user;
//       });
//       return user;
//     }
//       default:
//       return state;
//     }
//   }











//   export default userReducer
