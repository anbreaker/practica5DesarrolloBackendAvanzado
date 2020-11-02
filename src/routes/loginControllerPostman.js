'use strict';
const User = require('../models/User');
const jwt = require('jsonwebtoken');

class loginControllerPostman {
  /**
   * /api/signup
   * Post Create UserApi in Postman
   */
  async createUser(req, res, next) {
    try {
      const {email, password} = req.body;

      const addUser = new User({
        email,
        password,
      });

      await addUser.encryptPassword();
      await addUser.save();

      const token = jwt.sign({id: addUser._id}, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24, //Time seconds
      });

      res.json({auth: true, token});
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get /api/private-user
   * login User in Postman
   */
  async loginUserPostman(req, res, next) {
    const user = await User.findById(req.userId, {password: 0});
    if (!user) return res.status(404).send('No User Found');

    res.json(user);
  }

  /**
   * Get /siginUserPostman
   * Get token by use Api on Postman
   */
  async siginUserPostman(req, res, next) {
    const {email, password} = req.body;

    const userEmail = await User.findOne({email: email});
    if (!userEmail) return res.status(404).send('The email does not exists');

    const validPassword = await userEmail.validatePassword(password);
    if (!validPassword) return res.status(401).json({auth: false, token: null});

    const token = jwt.sign({id: userEmail._id}, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 20,
    });
    res.json({auth: true, token});
  }
}

module.exports = new loginControllerPostman();
