import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import navBarLogo from './images/navBarLogo.png'
import ProfileButton from "./ProfileButton";
import style from '../NavBar/NavBar.css'
import SignupForm from "../SignupFormModal/SignupForm";
import { NavLink, useParams } from 'react-router-dom';
import UploadForm from "./UploadForm";

const NavBar = () => {
  // const params = useParams();
  // const { userId } = params;
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id
  // let sessionLinks;
  // console.log("******************", userId)
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
            <div className="navBarUpload">
              <button onClick={() => setShowModal(true)} id="uploadButton">Upload</button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  {/* <h1>Hey!</h1> */}
                  <UploadForm />
                </Modal>
              )}
            </div>
            <div className="navBarUser">
              <ProfileButton user={sessionUser} />
              <a className="navBarUsername" href={`/users/${userId}`}>{sessionUser.username}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};






export default NavBar;
