'use strict';

const Joi = require('joi');

const schema = Joi.object().keys({
  firstName: Joi.string().required()
});

module.exports = schema;
