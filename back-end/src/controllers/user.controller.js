import express from "express";
import User from "../schema/userSchema.js";

export class UserController {
  static #path = '/user';
  #router;

  constructor() {
    const router = express.Router();
    router.get(UserController.#path, this.#authenticate);
    router.post(UserController.#path, this.#register);
    router.put(UserController.#path, this.#update);
    router.delete(UserController.#path, this.#delete);
    this.#router = router;
  }

  getRoute() {
    return this.#router;
  }

  #authenticate(req, res) {
    // authenticate
  }

  #register(req, res) {
    // register account
    const newUser = new User(req.body);
    newUser.save().then();
    res.send();
  }

  #update(req, res) {
    // update account
  }

  #delete(req, res) {
    // delete account
  }
};