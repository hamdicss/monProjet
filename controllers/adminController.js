let bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const config = require("config");
const secret = config.get("secret");

// register 
const register = async (req, res) => {
    const { name, password, role } = req.body;
    try {
      const searchRes = await User.findOne({ name });
      if (searchRes) return res.status(401).json({ msg: "user already exists" });
      const newUser = new User({
        name,
        
        password,
        role
      });
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      newUser.password = hash;
      await newUser.save();
      // res.status(201).json(newUser);
      const payload = {
        id: newUser._id,
      };
      const token = jwt.sign(payload, secret);
      res.send({
        token,
        user: {
          _id: newUser._id,
          name: newUser.name,
          role : newUser.role
        },
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  };
  
  
  const authorizedUser = (req, res) => {
    res.send(req.User);
   };
   


   
   const login = async (req, res) => {
     const { name, password } = req.body;
     try {
       const user = await User.findOne({ name });
       if (!user) return res.status(404).json({ msg: "name invalid" });
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) return res.status(404).json({ msg: " password invalid" });
       const payload = {
         id: user._id,
       };
       const token = await jwt.sign(payload, secret);
       res.send({
         token,
         id: user._id,
         name: user.name,
       
        
         role: user.role
       });
     } catch (error) {
       res.status(500).json({ errors: error });
     }
   };

   

  module.exports = {register , login, authorizedUser};
  
  