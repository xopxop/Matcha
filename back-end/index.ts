import { MongoClient } from "mongodb";
import { MatchaServer } from './app/app';

MongoClient.connect("link to database", {useUnifiedTopology: true}).then(client => {
  const db = client.db("matcha");
  const server = new MatchaServer(db);
  server.run();
});

