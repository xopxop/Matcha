import express from "express";
import http from "http";
import bodyParser from "body-parser";
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

  #transformDates(obj) {
    if (typeof obj === 'string' && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/.test(obj)) {
      return new Date(obj);
    } else if (typeof obj === 'object' && obj !== null) {
      if (Array.isArray(obj)) {
        return obj.map((item) => this.#transformDates(item));
      } else {
        const transformedObj = {};
        Object.keys(obj).forEach((key) => {
          transformedObj[key] = this.#transformDates(obj[key]);
        });
        return transformedObj;
      }
    } else {
      return obj;
    }
  }

  #utcDateMiddleware = (req, res, next) =>  {
    req.body = this.#transformDates(req.body);
    next();
  }

  #getExpressApp() {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(this.#utcDateMiddleware);
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
