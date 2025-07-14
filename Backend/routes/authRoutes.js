 


// routes/authRoutes.js

import express from 'express';
import { register, login } from '../controllers/authController.js';
import auth from '../middleware/authMiddleware.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

//  Register and Login routes
router.post('/register', register);
router.post('/login', login);

//  Authenticated route to get user info
router.get('/user', auth, (req, res) => {
  res.json(req.user);
});

//  Google login without Firebase Admin
router.post('/google-login', async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    // If not, create a new user
    if (!user) {
      user = await User.create({
        name: name || "Google User",
        email,
        password: "google_auth", // dummy password
        authProvider: "google"
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Google Login Failed:", err);
    res.status(500).json({ message: "Google login failed" });
  }
});

export default router;



