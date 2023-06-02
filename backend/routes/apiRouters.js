const express = require('express');
router = express.Router();
const userModel = require('../models/userModel');
var jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('Hello FROM API')
  })



router.post('/signup', (req, res) =>{
    try{
    if(!req.body.firstName || !req.body.lastName || !req.body.rollNumber || !req.body.password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }
    const roll_number = req.body.rollNumber.toUpperCase();
    userModel.findOne({roll_number})
    .then(user => {
        if(user) return res.status(200).json({msg: 'User already exists'
    });
        const newUser = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            roll_number,
            password: req.body.password
        });
        newUser.save()
        .then(user => {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "90d",
                }
              );
              // save user token
              user.token = token;
            return res.status(200).json({
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    roll_number
                }
            })
        })
    })
    }
    catch(err)
    {
        console.log("Error Occured", err)
        return res.status(500).json({msg: 'Server Error'});
    }
})

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

router.get('/login', (req, res) => {
    if(!req.body.roll_number || !req.body.password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }
    userModel.findOne({rollNumber: req.body.rollNumber})
    .then(user => {
        if(!user) return res.status(400).json({msg: 'User does not exist'});
        if(user.password !== req.body.password) return res.status(400).json({msg: 'Invalid Credentials'});
        return res.json({
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                roll_number: user.rollNumber,
                secret : "This is real"
            }
        })
    })
})

router.post('/event', (req, res) => {
    const newEvent = new eventModel({
        description: req.body.description,
        location: req.body.location,
        event_start: req.body.event_start,
        event_end: req.body.event_end,
        event_organiser: req.body.event_organiser
    });
    newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

router.get('/event', (req, res) => {
    eventModel.find()
    .then(event => res.json(event))
    .catch(err => res.json(err))
})

router.get('/event/:id', (req, res) => {
    eventModel.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.json(err))
})


module.exports = router;
