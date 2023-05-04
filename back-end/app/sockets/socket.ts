import { Server } from "socket.io";
import { ILike, IMessage } from "../models/websocket";
import { Collection, Db, Document } from "mongodb";

export class WebSocket {
  private readonly io: Server;
  private readonly messages: Collection<Document>;
  private readonly likes: Collection<Document>;
  private readonly users: Collection<Document>;

  constructor(server, db: Db) {
    this.io = new Server(server);
    this.messages = db.collection("messages");
    this.likes = db.collection("likes");
    this.users = db.collection("users");

    this.io.on("connection", this.handleConnection.bind(this));
  }

  handleConnection(socket) {
    console.log("New WebSocket connection");

    socket.on("join", this.handleJoin.bind(this));
    socket.on("like", this.handleLike.bind(this));
    socket.on("send message", this.handleSendMessage.bind(this));
    socket.on("disconnected", this.handleDisconnection.bind(this));
  }

  async handleJoin(socket, userId, otherUserId) {
    const conversationId = [userId, otherUserId].sort().join("-");
    socket.join(conversationId)
    const messages = await this.messages.find({ userId, otherUserId }).toArray();
    socket.emit("loadMessages", messages);
  }

  // this is for the chat
  async handleSendMessage(socket, message: IMessage) {
    const conversationId = [message.userId, message.otherUserId].sort().join("-");
    await this.messages.insertOne(message);
    socket.to(conversationId).emit("newMessage", message);
  }

  async handleLike(socket, like: ILike) {
    this.likes.insertOne(like);
    const match = await this.likes.findOne( {userId: like.otherUserId, otherUserId: like.userId} );
    if (match) {
      const user1 = await this.users.findOne({ _id: ObjectId(like.userId) });
      const user2 = await this.users.findOne({ _id: ObjectId(like.otherUserId) });
      const conversationId = [like.userId, like.otherUserId].sort().join("-");
      socket.to(conversationId).emit("match", { userId: like.userId, otherUserId: like.otherUserId, username: user2.username });
    }    
  }

  handleDisconnection(socket) {
    console.log(`Socket ${socket.id} disconnected`);
  }
}