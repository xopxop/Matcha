import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  userOne: String,
  userTwo: String,
  matchDate: Date,
}, { db: "matcha", collection: "match" });

const Match = mongoose.model("Match", matchSchema);

export default Match;