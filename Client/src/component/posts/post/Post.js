import React, { useState } from "react";
import moment from "moment";
import "./Post.css";
import { useDispatch } from "react-redux";
import { deleteNotes, likeNotes } from "../../../actions/Posts";

const Post = ({ post, setCurrentId }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleLikePost = () => {
    const current = dispatch(likeNotes(post._id));
    setIsActive(current);

    dispatch(likeNotes(post._id));
  };

  return (
    <main className="post-main">
      <section className="post-img">
        <img src={post.selectedFile} alt="" width="100%" />
        <section className="post-top-section">
          <div className="post-left">
            <h5>{post.creator}</h5>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className="post-right" onClick={() => setCurrentId(post._id)}>
            <i className="fa-solid fa-ellipsis-vertical post-icon post-ellipsis"></i>
          </div>
        </section>
      </section>
      <section className="post-details">
        <p className="post-tags">{post.tags.map((tag) => `#${tag}`)}</p>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-message">{post.message}</p>
        <div className="post-buttons">
          <button
            onClick={handleLikePost}
            className="likePostId post-like"
            style={{ color: isActive ? "rgba(0,183,255, 1)" : "" }}
          >
            &nbsp;<i className="fa-regular fa-thumbs-up post-icon"></i>&nbsp;
            LIKE {post.likeCount}
          </button>
          <button
            className="post-delete"
            onClick={() => dispatch(deleteNotes(post._id))}
          >
            &nbsp; <i className="fa-solid fa-trash-can post-icon"></i>&nbsp;
            DELETE {post.delete}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Post;
