import MainRouter from "./components/MainRouter/MainRouter";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "./store/session";
// import { Route, Switch } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import SignupFormPage from "./components/SignupFormModal";

function App() {
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <>
    <MainRouter />
    </>
  );
}

export default App;
