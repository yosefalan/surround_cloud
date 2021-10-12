import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import Navigation from '../Navigation';
import thom from './images/thom.jpg'
// import trent from './images/trent.jpg'
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import logo from './images/logo.png'
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
      <div className={styles.mainContainer}>
        <div className={styles.carouselContainer}>
          <div className={styles.nav}>
            {/* <Navigation isLoaded={isLoaded} /> */}
            <img src={logo} className={styles.logo}></img>
            <LoginFormModal />
            <SignupFormModal />
          </div>
          <div>
            <img src={thom} className={styles.slide}></img>
          </div>
          {/* <div>
            <img src={trent} className={styles.slide}></img>
          </div> */}
        </div>
          <div className={styles.albumArtContainer}>
            <img src={img1} className={styles.albumArt}></img>
            <img src={img2} className={styles.albumArt}></img>
            <img src={img3} className={styles.albumArt}></img>
            <img src={img4} className={styles.albumArt}></img>
            <img src={img5} className={styles.albumArt}></img>
          </div>
        </div>
    </>
  )
};

export default LandingPageCarousel;
