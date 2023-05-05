import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import { MatchaServer } from "./src/server.js"

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD
}).then(() => {
  const server = new MatchaServer();
  server.run(process.env.PORT);
}).catch(err => console.error(err.message));
