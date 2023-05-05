import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  // temp string, change later
  userId: String,
  bio: String,
  interests: [String],
  // temp String for now
  preferences: String
}, { db: "matcha", collection: "profile" });

const Profile = mongoose.model("Profile", userSchema);

export default Profile;