import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation/index'
import navBarLogo from './images/navBarLogo.png'
import { NavLink } from 'react-router-dom';
import ProfileButton from "./ProfileButton";
import style from '../NavBar/NavBar.css'


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  // let sessionLinks;
  console.log("******************", sessionUser.username)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="navBarContainer">
        <div className="navBarMain">
          <div className="navBarLeft">
            <img src={navBarLogo} id="navBarLogo"></img>
            <div className="navBarHome">Home</div>
          </div>
          <div className="navBarCenter">
            {/* search */}
          </div>
          <div className="navBarRight">
            <div className="navBarUpload">Upload</div>
            <div className="navBarUser">
              <ProfileButton user={sessionUser} />
              <p className="navBarUsername">{sessionUser.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

};






export default NavBar;
