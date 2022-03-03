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
  User.findOne({ user, password}, (err, data) => {
    if (data) {
      res.status(200).send({
        id: data._id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        token: 'fakeToken'
      });
    } else {
      res.status(404).send({
        error: 'user or password is incorrect!s'
      });
    }
  });
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