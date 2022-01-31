import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './LandingPage.module.css'
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function LandingPageCarousel() {

  const images = ['/images/l1.png', '/images/l2.png']

  return (
    <>
      <Swiper
         autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide
        className="slide"
        >
          {/* <img src={images[0]} /> */}
          </SwiperSlide>
        <SwiperSlide
        className="slide"
        >
          {/* <img src={images[1]} /> */}
          </SwiperSlide>

      </Swiper>
    </>
  );
}








// function Slideshow() {
//   const images = ['/images/trent.jpg', '/images/x.png']

//   const delay = 5000;

//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

  // return (
  //   <div className={styles.main_container}>


      {/* <div className={styles.slide_show}>
        <div className={styles.slider}
        >
          {images.map((img, idx) => {
            return (
          <div
            className={styles.slide}
            key={idx}
          >
           <img className="slide_img"
           src={img}/>
          </div>
          )})}
        </div>
      </div> */}
//     </div>
//   );
// }




//   return (
//     <div
//     className={styles.main_container}
//     // {...handlers}
//     onMouseEnter={() => setPaused(true)}
//     onMouseLeave={() => setPaused(false)}
//     >
//       <div
//       className={styles.carousel_content}
//       style={{ transform: `translateX(-${activeImage * 100}%)` }}
//       >
//         {React.Children.map(children, (child, index) => {
//           return React.cloneElement(child, { width: "100%" });
//         })}
//       </div>

//         <div className={styles.nav}>
//           <img src='/images/logo.png' className={styles.logo}></img>
//           <LoginFormModal />
//           <SignupFormModal />
//         </div>
//     </div>
//   )
// };
