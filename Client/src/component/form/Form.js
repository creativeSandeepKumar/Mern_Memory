import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updateNotes } from "../../actions/Posts";
import "./Form.css";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === null) {
      dispatch(createPost(postData));
      handleClear();
    } else {
      dispatch(updateNotes(currentId, postData));

      handleClear();
    }
  };

  const handleClear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <main className="form-main">
      <h5>{currentId ? `Editing "${post.title}"` : "Creating a Memory"}</h5>
      <form className="form-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          type="text"
          rows="4"
          name="message"
          placeholder="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <FileBase
          type="file"
          name="file"
          id="file"
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />
        <button type="submit" className="form-submitBtn">
          Submit
        </button>
        <button className="form-clearBtn" onClick={handleClear}>
          Clear
        </button>
      </form>
    </main>
  );
};

export default Form;
