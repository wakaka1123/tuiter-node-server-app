import mongoose from 'mongoose';

const schema = mongoose.Schema({

  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
}, {
  versionKey: false,
  collection: 'tuits'});
export default schema;