const User = require('../models/user.model')
const bcrypt = require('bcrypt')
// const validator = require('validator')
const jwt = require('jsonwebtoken');
require('dotenv'). config()

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

    if (!email || !password) 
      return res.status(400).json({ 'message': 'All fields required.'});

    const user = await User.findOne({ email: email }).exec();
    if (!user) 
      return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
      throw Error("Incorrect password"); 
    } else {

      const roles = Object.values(user.roles).filter(Boolean);
      // create JWTs
      const accessToken = jwt.sign(
          {
              "UserInfo": {
                  "email": user.email,
                  "roles": roles
              }
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '100s' }
      );
      const refreshToken = jwt.sign(
          { "email": user.email },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '1d' }
      );
      // Saving refreshToken with current user
      user.refreshToken = refreshToken;
      const result = await user.save();
      console.log(result);
      console.log(roles);

      // Creates Secure Cookie with refresh token
      res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

      // Send authorization roles and access token to user
      res.json({ roles, accessToken });
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
    if (!email || !password) 
      return res.status(400).json({ 'message': 'All fields required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) 
      return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPasswod = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            "email": email,
            "password": hashedPasswod
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${email} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

// logout a user
const logoutUser = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) 
    return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  const user = await User.findOne({ refreshToken }).exec();
  if (!user) {
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      return res.sendStatus(204);
  }
  // Delete refreshToken in db
  user.refreshToken = '';
  const result = await user.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.sendStatus(204);
}


module.exports = { signupUser, loginUser, logoutUser }