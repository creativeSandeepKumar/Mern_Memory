import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";
import CircularProgress from "../../images/Spinner.gif";
import "./Posts.css";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <section className="posts-progre">
      <img src={CircularProgress} alt="spinner" />
    </section>
  ) : (
    <section className="posts-item ">
      {posts.map((post) => (
        <section key={post._id} className="posts-container">
          <Post post={post} setCurrentId={setCurrentId} />
        </section>
      ))}
    </section>
  );
};

export default Posts;
