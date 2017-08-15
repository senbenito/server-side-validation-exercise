'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    users: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      username: Joi.string().required().min(6).regex(/^[A-Za-z]/).alphanum(),
      email: Joi.string().required().email(),
      phone: Joi.string().required().min(10)
    })
  }
};
