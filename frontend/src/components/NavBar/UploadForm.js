import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from '../LoginFormModal/form.css'

function UploadForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setURL] = useState("");
  const [album, setAlbum] = useState("");
  const [art, setArt] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;


  const onSubmit = (e) => {
    e.preventDefault();
    const uploadFormInfo = {
      title,
      artist,
      url,
      album,
      art,
      sumbittedOn: new Date()
    };
    console.log("!!!!!!!!!!!!!!!!!!!!!", uploadFormInfo)
    setTitle('');
    setArtist('');
    setURL('');
    setAlbum('');
    setArt('');
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     setErrors([]);
  //     return dispatch(sessionActions.signup({ title, url, password }))
  //       .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       });
  //   }
  //   return setErrors(['Confirm Password field must be the same as the Password field']);
  // };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}
      /* <form onSubmit={handleSubmit} */
      className="form">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="text"
            className="field"
            placeholder="Song Title"
            autocomplete="new-password"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <input
            type="text"
            className="field"
            placeholder="Artist"
            autocomplete="new-password"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="Song URL"
            autocomplete="new-password"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="Album"
            autocomplete="new-password"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="Album Image URL"
            autocomplete="new-password"
            value={art}
            onChange={(e) => setArt(e.target.value)}
            required
            />
        <button type="submit" id="signupSubmitButton">Upload Track</button>
      </form>
    </div>
  );
}

export default UploadForm;
