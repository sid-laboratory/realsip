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
      !req.body.password ||
      !req.body.email
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
        email : req.body.email,
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
            email : req.body.email,
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
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.body.token || req.query.token || req.cookies['x-access-token'] || req.headers['x-access-token'];
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
           next();
        }else{
            // Access Denied
            return res.status(401).json({
              message : "EXPIRED_TOKEN"
            });
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
};

router.post("/login", async (req, res) => {
  try {
    console.log("REQUEST FOR LOGIN", req.body);
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const user = await userModel.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if(user.length == 0){
      return res.status(401).json({
        status : "UNAUTHORIZED",
        message : "USER NOT FOUND"
      })
    }
    console.log("FOUND USER", user);

    const token = jwt.sign({data: user}, process.env.JWT_SECRET_KEY, {
      expiresIn: 604800 // 1 week
    });

    console.log("CREATED TOKEN", token);
    return res
      .cookie("x-access-token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Logged in successfully" });

  }
  catch (err) {
    console.error("ERROR IN LOGIN API", err);
  }
}
)


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
      Link,
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
      event_link : Link,
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
    title: "First Test",
    description: "TESTING",
    date: "Sun Jul 23 2023",
    location: "HYDERABAD",
    event: "NCC",
    event_time: "1:1",
    event_organiser: "Shashankh",
    event_link : "https://www.google.com"
  },
  {
    title: "Second Test",
    description: ":sunglasses:",
    date: "Sun Jul 23 2023",
    location: "HYDERABAD",
    event: "NCC",
    event_time: "1:12",
    event_organiser: "Siddarth",
    event_link : "https://www.google.com"
  },
];

router.get("/event", async (req, res) => {
  const data = await eventModel.find({});
  return res.status(200).json(data);
});

router.get("/event/:id", (req, res) => {
  eventModel
    .findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
});

module.exports = router;
