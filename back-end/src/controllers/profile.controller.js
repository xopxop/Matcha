import express from "express";

export class ProfileController {
  static #path = '/user-profile';
  #router;

  constructor() {
    const router = express.Router();
    router.get(ProfileController.#path, this.#get);
    router.post(ProfileController.#path, this.#create);
    router.put(ProfileController.#path, this.#update);
    router.delete(ProfileController.#path, this.#delete);
    this.#router = router;
  }

  getRoute() {
    return this.#router;
  }

  #get(req, res) {
  }

  #create(req, res) {
  }

  #update(req, res) {
  }

  #delete(req, res) {
  }
}