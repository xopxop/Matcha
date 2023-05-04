import express from 'express';
import { Collection, Db } from "mongodb";
import mongoose from "mongoose";

const User = mongoose.model('User');
export class UserController {
  private readonly path = '/user';
  private readonly users: Collection<Document>;
  private readonly router = express.Router();

  constructor(db: Db) {
    this.users = db.collection("users");
    const userSchema = new mongoose.Schema({
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true }
    });

    // Create the User model
    this.User = mongoose.model('User', userSchema);

    this.router.get(this.path, this.authenticate);
    this.router.post(this.path, this.register);
    this.router.put(this.path, this.update);
    this.router.delete(this.path, this.delete);
  }

  authenticate(req: Request, res: Response): void {
    // authenticate
  }

  register(req: Request, res: Response): void {
    // register account
  }

  update(req: Request, res: Response): void {
    // update account
  }

  delete(req: Request, res: Response): void {
    // delete account
  }
};