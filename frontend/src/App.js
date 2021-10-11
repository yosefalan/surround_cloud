import Main from "./components/Main/Main";
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
    <Main />
    {/* <Footer /> */}
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        </Switch>
      )} */}
    </>
  );
}

export default App;
