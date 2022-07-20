const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  selectedFile: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("postmessage", postSchema);
