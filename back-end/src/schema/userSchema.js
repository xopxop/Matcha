import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: Number, required: true },
  // location:
  profilePicture: { type: String, required: true }
}, { db: "matcha", collection: "user" });

const User = mongoose.model("User", userSchema);

export default User;