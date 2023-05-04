import express, { Request, Response } from "express";

export class ProfileController {
  path = '/user-profile';
  router = express.Router();

  constructor() {
    this.router.get(this.path, this.get);
    this.router.post(this.path, this.create);
    this.router.put(this.path, this.update);
    this.router.delete(this.path, this.delete);
  }

  get(req: Request, res: Response): void {
  }

  create(req: Request, res: Response): void {
  }

  update(req: Request, res: Response): void {
  }

  delete(req: Request, res: Response): void {
  }
}