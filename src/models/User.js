'use strict';

const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
});

userSchema.methods.encryptPassword = async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

userSchema.statics.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
