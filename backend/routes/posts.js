const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Notes = require("../models/postMessage");

// create and save a new note
router.post("/createnotes", async (req, res) => {
  const { title, message, creator, selectedFile, tags } = req.body;
  const notes = Notes({ title, message, creator, selectedFile, tags });
  await notes.save();
  res.send(notes);
});

// retrieve a single note by its id
router.get("/fetchallnotes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Notes.findById(id);
    res.send(notes);
  } catch (error) {
    res.send({ error });
  }
});

// fetchallnotes from database
router.get("/fetchallnotes", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.send(notes);
  } catch (error) {
    res.send({ error });
  }
});

// update an existing note by id and save
router.patch("/updatenotes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No post with this id ${id}`);

  try {
    const notes = { title, message, creator, selectedFile, tags, _id: id };
    await Notes.findByIdAndUpdate(id, notes, { new: true });
    res.send(notes);
  } catch (error) {
    console.log({ error });
  }
});
// like an existing note by id and save
router.patch("/likenotes/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No post with this id ${id}`);

  try {
    const post = await Notes.findById(id);
    const updatednotes = await Notes.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.send(updatednotes);
  } catch (error) {
    console.log({ error });
  }
});
// delete an existing note by id
router.delete("/deletenotes/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No post with this id ${id}`);

  try {
    await Notes.findByIdAndRemove(id);
    res.send({ message: "Notes deleted successfully" });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
