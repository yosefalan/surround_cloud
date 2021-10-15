// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import style from '../NavBar/NavBar.css'

// function Navigation({ isLoaded }){
//   const sessionUser = useSelector(state => state.session.user);
//   // console.log("**************", sessionUser.id)
//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <ProfileButton user={sessionUser} />
//     );
//   } else {
//     sessionLinks = (
//       <>
//         {/* <LoginFormModal />
//         <SignupFormModal /> */}
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }

// export default Navigation;
