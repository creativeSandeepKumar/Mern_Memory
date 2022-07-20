import React, { useEffect, useState } from "react";
import memories from "./images/memories.png";
import "./App.css";
import Form from "./component/form/Form";
import Posts from "./component/posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <main className="app-main">
      <section className="app-section-header">
        <h2>Memories</h2>
        <img src={memories} alt="memories images" width="100%" />
      </section>
      {/* section for form and posts */}
      <section className="app-container">
        <section className="app-form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </section>
        <section className="app-posts">
          <Posts setCurrentId={setCurrentId} />
        </section>
      </section>
    </main>
  );
};

export default App;
