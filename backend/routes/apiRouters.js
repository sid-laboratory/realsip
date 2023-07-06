const express = require("express");
router = express.Router();
const userModel = require("../models/userModel");
var jwt = require("jsonwebtoken");
const eventModel = require("../models/eventModel");

router.get("/", (req, res) => {
  res.send("Hello FROM API");
});

router.post("/signup", (req, res) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.rollNumber ||
      !req.body.password
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const roll_number = req.body.rollNumber.toUpperCase();
    userModel.findOne({ roll_number }).then((user) => {
      if (user) return res.status(200).json({ msg: "User already exists" });
      const newUser = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        roll_number,
        password: req.body.password,
      });
      newUser.save().then((user) => {
        // save user token

        return res.status(200).json({
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            roll_number,
          },
        });
      });
    });
  } catch (err) {
    console.log("Error Occured", err);
    return res.status(500).json({ msg: "Server Error" });
  }
});

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

router.get("/login", (req, res) => {
  if (!req.body.roll_number || !req.body.password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  userModel.findOne({ rollNumber: req.body.rollNumber }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    if (user.password !== req.body.password)
      return res.status(400).json({ msg: "Invalid Credentials" });
    return res.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        roll_number: user.rollNumber,
        secret: "This is real",
      },
    });
  });
});

router.post("/event", async (req, res) => {
  try {
    const {
      Title,
      Description,
      Date: outData,
      Organizer,
      Location,
      selected,
      Time,
      event_link,
    } = req.body;
    console.log("req body", req.body, new Date(outData));
    const newEvent = await eventModel.create({
      title: Title,
      description: Description,
      date: new Date(outData).toDateString(),
      location: Location,
      event: selected,
      event_time: Time,
      event_organiser: Organizer,
      event_link 
    });
    console.log("CREATED EVENT", newEvent);
    res.status(200).json(newEvent);
  } catch (err) {
    console.log("Error Occured", err);
    return res.status(500).json({ msg: "Server Error" });
  }

  // .then(event => res.status(200).json(event))
  // .catch(err => res.status(500).json(err))
});

// SAMPLE RESPONSE OBJECT

const sampleObj = [
  {
    description: "This is a sample event",
    location: "This is a sample location",
    event_start: "2020-07-20T18:30:00.000Z",
    event_end: "2020-07-20T18:30:00.000Z",
    event_organiser: "5f15b0b1e1b9a71b1c4b0b1c",
  },
  {
    description: "This is a sample event",
    location: "This is a sample location",
    event_start: "2020-07-20T18:30:00.000Z",
    event_end: "2020-07-20T18:30:00.000Z",
    event_organiser: "5f15b0b1e1b9a71b1c4b0b1c",
  },
];

router.get("/event", (req, res) => {
  eventModel
    .find()
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
});

router.get("/event/:id", (req, res) => {
  eventModel
    .findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
});

module.exports = router;
