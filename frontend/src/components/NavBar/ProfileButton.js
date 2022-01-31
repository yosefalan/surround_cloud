import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import style from "../NavBar/NavBar.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="dropdown">
      <button onClick={openMenu} className="profileButton">
        <img src={user.imageURL} className="profileButtonImage" />
      </button>
      <div className="dropdownContent">
        <a onClick={logout} href="/">
          Log Out
        </a>
      </div>
    </div>
  );
}

export default ProfileButton;
