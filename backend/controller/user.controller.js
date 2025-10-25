import User from "../model/user.model.js";

import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      } 
        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({ 
            name: name,
             email:email,
            password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully",user:
            {
                _id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }

         });
    } catch (error) {
        console.log("Error during user signup:" + error.message);
        res.status(500).json({ message: "Error during user signup" });
        
    }
};

export const login = async (req, res) => {
    try {
      const { email, password } = req.body; 
      const user = await User.findOne({ email });
      const isPasswordValid = user ? await bcryptjs.compare(password, user.password) : false;

      if (!user || !isPasswordValid) {
          return res.status(400).json({ message: "Invalid email or password" });
      } else {
          res.status(200).json({
              message: "Login successful",
              user: {
                  _id: user._id,
                  name: user.name,
                  email: user.email
              }
          });
      }
    } catch (error) {
      console.log("Error during user login:" + error.message);
      res.status(500).json({ message: "Error during user login" });
    }
};