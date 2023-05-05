import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  senderId: String,
  recipientId: String,
  context: String,
  sendDate: Date,
}, { db: "matcha", collection: "messages" });

const Messages = mongoose.model("Messages", messagesSchema);

export default Messages;