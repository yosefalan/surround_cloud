import LandingPageCarousel from "./LandingPageCarousel";
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingMain}>
        <div className={styles.carousel_main_container}>
        <div className={styles.nav}>
         <img src='/images/logo.png' className={styles.logo} />
               <LoginFormModal />
               <SignupFormModal />
             </div>
          <div className={styles.swiper_container}>
          <LandingPageCarousel />
          {/* <div className={styles.gradient}/> */}
          </div>
        </div>
      </div>
    </>
  )
};


export default LandingPage;
