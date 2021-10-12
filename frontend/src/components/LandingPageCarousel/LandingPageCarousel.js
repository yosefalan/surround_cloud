import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import thom from './images/thom.jpg'
// import trent from './images/trent.jpg'
import styles from './LandingPageCarousel.module.css'
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

const LandingPageCarousel = () => {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.nav}>
          {/* <Navigation isLoaded={isLoaded} /> */}
          <LoginFormModal className={styles.loginButton} />
          <SignupFormModal className={styles.signinButton}/>
        </div>
        <div>
          <img src={thom} className={styles.slide}></img>
        </div>
        {/* <div>
          <img src={trent} className={styles.slide}></img>
        </div> */}
      </div>
        <div>

        </div>
    </>
  )
};

export default LandingPageCarousel;
