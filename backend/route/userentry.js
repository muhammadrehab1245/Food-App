const express = require('express');

// Importing middleware to identify and authenticate users
const identify = require('../middleware/identify');
const router = express.Router();

// Importing the 'signupuser' model for user sign-up and login
const signupuser = require('../models/signup');

// Importing necessary libraries for user authentication
let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Importing 'passwordStrength' and 'saltRounds' for password validation
const { passwordStrength } = require('check-password-strength');
const saltRounds = 8;

// Secret key for JWT (JSON Web Token) generation
const key = 'foodkey';

// Array indicating the password requirements
let mustcontain = ['lowercase', 'uppercase', 'number', 'symbol'];

// Route to handle user sign-up
router.post('/usersignup', async (req, res) => {
  const { email, password, fullname } = req.body;

  // Checking the password strength and extracting requirements not met
  let StrengthArray = passwordStrength(password).contains;
  let notcontain = mustcontain.filter((must) => {
    return !StrengthArray.includes(must);
  });

  // Promise to handle user sign-up logic
  const userfinding = new Promise(async (resolve, reject) => {
    let finduser = await signupuser.findOne({ email });
    let success = false;

    if (!finduser) {
      // Checking if the password meets the specified requirements
      if (notcontain.length === 0) {
        // Hashing the password before saving to the database
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            // Creating a new user with hashed password
            const usersave = await new signupuser({ fullname: fullname, email: email, password: hash });
            // Saving the new user to the database
            usersave.save();

            // Generating a JWT token for the user
            const data = {
              user: {
                id: usersave.id
              }
            };
            let token = jwt.sign(data, key);
            resolve(token);
          });
        });
      } else {
        reject(notcontain);
      }
    } else {
      reject("This email is already exist! Try another");
    }
  });

  // Handling the result of the user sign-up process
  userfinding
    .then((value) => {
      success = true;
      res.json({ value, success });
    })
    .catch((e) => {
      res.json(e);
    });
});

// Route to handle user login
router.post('/userlogin', async (req, res) => {
  const { email, password } = req.body;

  // Promise to handle user login logic
  const userfinding = new Promise(async (resolve, reject) => {
    let finduser = await signupuser.findOne({ email });
    let success = false;

    if (finduser) {
      // Comparing the provided password with the hashed password in the database
      bcrypt.compare(password, finduser.password, async function (err, result) {
        if (result) {
          // Generating a JWT token for the authenticated user
          const data = {
            user: {
              id: finduser.id
            }
          };
          let token = jwt.sign(data, key);
          resolve(token);
        } else {
          reject("Wrong Credentials");
        }
      });
    } else {
      reject("Wrong Credentials");
    }
  });

  // Handling the result of the user login process
  userfinding
    .then((value) => {
      success = true;
      res.json({ value, success });
    })
    .catch((e) => {
      res.status(400).json({ value: e });
    });
});

// Route to identify and retrieve information about the authenticated user
router.post('/identify', identify, async (req, res) => {
  // Promise to handle user identification logic
  const identifying = new Promise(async (resolve, reject) => {
    try {
      // Retrieving user information excluding the password
      userid = req.user.id;
      let user = await signupuser.findById(userid).select('-password');
      resolve(user);
    } catch (e) {
      console.log(e.message);
      reject("Internal Error Occurred");
    }
  });

  // Handling the result of the user identification process
  identifying
    .then((value) => {
      res.send(value);
    })
    .catch((e) => {
      res.status(500).send({ status: e });
    });
});

module.exports = router;