import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    password: String,
    email:String
  },
  {
    timestamps: true,
  }
);

//checks if model named user already exists or not in mongoose application
const User = mongoose.models.UserCollection || mongoose.model("UserCollection", userSchema);

export default User;