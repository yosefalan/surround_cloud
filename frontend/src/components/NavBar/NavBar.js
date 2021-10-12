import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation/index'
import styles from './NavBar.css'
import navBarLogo from './images/navBarLogo.png'


const NavBar = () => {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="navBarContainer">
        <div className="navBarCenter">
          <img src={navBarLogo} id="navBarLogo"></img>
          <Navigation isLoaded={isLoaded} />
        </div>
      </div>
    </>
  )

};



export default NavBar;
