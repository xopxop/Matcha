import { Db } from "mongodb";
import express from "express";
import http from "http";
import { WebSocket } from "./sockets/socket"
import { UserController } from "./controllers/user.controller";
import { ProfileController } from "./controllers/profile.controller";

export class MatchaServer {
  PORT = 3000;
  server: http.Server;

  constructor(db: Db) {
    const app = this.initExpress();
    this.server = http.createServer(app);
    new WebSocket(this.server, db);
  }

  run() {
    this.server.listen(this.PORT, () => {
      console.log(`listening on *:${this.PORT}`);
    });
  }


  private initExpress() {
    const app = express();
    // Configuration for express here

    // load controllers
    const controllers = [ new UserController(db), new ProfileController(db) ];
    controllers.forEach(controller => {
      app.use("/", controller.router);
    });
    return (app);
  }
}