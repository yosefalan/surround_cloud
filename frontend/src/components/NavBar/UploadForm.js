import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from '../LoginFormModal/form.css'
import { uploadTrack } from '../../store/music'

function UploadForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [art, setArt] = useState("");
  const [url, setURL] = useState(null);
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(uploadTrack({
      title,
      artist,
      album,
      art,
      url,
    }))
    .then(() => {
      setTitle("");
      setArtist("");
      setAlbum("");
      setArt("");
      setURL(null);
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) uploadTrack(file);
  };


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
      <form handleSubmit={handleSubmit}
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
            />
            <input type="file"
            onChange={updateFile} />
            <button type="submit">Upload Track</button>
        <button type="submit" id="signupSubmitButton">Upload Track</button>
      </form>
    </div>
  );
}

export default UploadForm;
