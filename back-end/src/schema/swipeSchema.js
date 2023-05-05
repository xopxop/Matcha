import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema({
  swiperId: String,
  swipeeId: String,
  dirrection: Boolean,
}, { db: "matcha", collection: "swipe" });

const Swipe = mongoose.model("Swipe", swipeSchema);

export default Swipe;