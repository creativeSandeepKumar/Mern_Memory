import axios from "axios";

const url = "https://mymemorywebsite.herokuapp.com/posts/";

export const createnotes = (newPost) =>
  axios.post(`${url}createnotes`, newPost);
export const fetchallnotes = () => axios.get(`${url}fetchallnotes`);
export const updatenotes = (id, updatednotes) =>
  axios.patch(`${url}updatenotes/${id}`, updatednotes);
export const likenotes = (id, likednotes) =>
  axios.patch(`${url}likenotes/${id}`, likednotes);
export const deletenotes = (id) => axios.delete(`${url}deletenotes/${id}`);
