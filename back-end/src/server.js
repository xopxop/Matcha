import express from "express";
import http from "http";
import { Server } from "socket.io"
import { UserController } from "./controllers/user.controller.js"
import { ProfileController } from "./controllers/profile.controller.js"

export class MatchaServer {
  #server;
  #ws;

  constructor() {
    const expressApp = this.#getExpressApp();
    this.#server = http.createServer(expressApp);
    this.#ws = new Server(this.server);
  }

  run(port) {
    this.#server.listen(port, () => {
      console.log(`listening on *:${port}`);
    });
  }

  #getExpressApp() {
    const app = express();
    const controllers = [
      new UserController(),
      new ProfileController()
    ];
    controllers.forEach(controller => {
      app.use("/", controller.getRoute());
    });
    return (app);
  }
}

// export default Server;
