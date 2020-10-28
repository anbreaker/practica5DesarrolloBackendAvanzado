'use strict';

const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
});

// bcrypt pass
userSchema.statics.hashPassword = (pass) => {
  return bcrypt.hash(pass, 10);
};

const User = model('User', userSchema);

module.exports = User;
