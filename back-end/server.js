require('dotenv').config();
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express()
const port = 3000

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/authenticate', (req, res) => {
  const { user, password } = req.body;
  console.log(req.body);
  res.send({ok: "ok"})
})

app.post('/register', (req, res) => {
  const newUser = new User(req.body);
  console.log(req.body);
  newUser.save((err, data) => {
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})