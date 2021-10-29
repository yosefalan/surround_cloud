import React, { useState, useEffect} from "react";
import { postComment, fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import './Comments.css'

const Comments = ({setCurrentTrack, track, user}) => {
  const trackId = track.id
  const dispatch = useDispatch();

  const comments = useSelector(state => Object.values(state.comments));
  useEffect(() => {
    dispatch(fetchComments(trackId));
  }, [dispatch]);

  const c = comments.map(comment => comment)

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id
  console.log("Comments on comments component", userId)
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(postComment(comment, trackId))
      .then(() => {
        setComment("");

      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };
  return (
    <>
      <div className="commentFormContainer">
            <div className="commentsProfileImageContainer">
            {/* <img src={user.imageURL} className="commentImage" /> */}
            </div>
            <form onSubmit={handleSubmit} className="commentsFieldContainer">
              <input
                  type="text"
                  className="commentField"
                  placeholder="Write a Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  />
              <button type="submit" id="commentSubmitButton">Submit</button>
            </form>
      </div>
      <div>
        <h1>Comments</h1>
      </div>
    </>
  )
};


export default Comments;
