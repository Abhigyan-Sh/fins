import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
        default: "",
      },
      // 
      profession: {
        type: String,
        required: false
      },
      // 
      institute: {
        type: String,
        required: false
      },
      lives_in: {
        type: String,
        required: false
      },
      aboutMe: {
        type: String,
        required: false
      },
      verified: { 
        type: Boolean, 
        default: false 
      },
    },
    { timestamps: true }    
);

export default mongoose.model('User', UserSchema);