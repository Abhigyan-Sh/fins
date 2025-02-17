import mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: false,
      },
      userId: {
        type: String,
        required: true,
        unique: false,
      },
      postPic: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: true,
        unique: true
      },
      categories: {
        type: Array,
        required: false,
      },
      desc: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }    
);

export default mongoose.model('Post', PostSchema)