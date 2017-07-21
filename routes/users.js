'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const ev = require('express-validation');
const validations = require('../validations/users')

router.get('/' , (req, res, next) => {
  knex('users')
    .select( 'id', 'firstname', 'lastname', 'username', 'phone', 'email')
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/' , ev(validations.schema), (err, req, res, next) => {
  console.log('req.body', req.body);
  let firstName = req.body.users.firstName;
  let lastName = req.body.users.lastName;
  let username = req.body.users.username;
  let email = req.body.users.email;
  let phone = req.body.users.phone;

 if (err instanceof ev.ValidationError) return res.status(err.status).json(err); 

  // if(!email || email.trim() === ''){
  //   const err = new Error('Password must not be blank.');
  //   err.status = 400;
  //
  //   return next(err);
  // }

  knex('users')
    .insert({
      firstname: firstName,
      lastname: lastName,
      username: username,
      email: email,
      phone: phone
    })
    .returning(['firstname', 'lastname', 'username','phone','email'])
    .then((results) => {
      res.send(results[0]);
    })
    .catch((err) => {
      console.log('err', err);
      next(err);
    });
});

// router.use((err, req, res, next) => {
//   if(err.status){
//     return res
//       .status(err.status)
//       .set('Content-Type', 'text/plain')
//       .send(err.message);
//   }
//   console.err(err);
//   res.sendStatus(500);
// });

module.exports = router;
