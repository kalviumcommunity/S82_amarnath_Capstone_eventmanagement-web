const bcrypt = require("bcrypt");
const User = require("../model/user");
const sendToken = require("../utils/jwtTokens");
const ErrorHandler =require("../utils/ErrorHandler")
const { verifyToken } = require("../middlewares/authMiddleware");
const sendOtp = require("../utils/sendOtp");
const otpStore = require("../utils/otpStore");
const express = require("express");
const router = express.Router();

// Route to load login page (GET)
router.get("/login", (req, res) => {
  res.status(200).send("Login page ready");
});

// Route to handle user login (POST)
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password)
      return next(new ErrorHandler("Email and password are required", 400));

    // Find user by email and include password field
    const user = await User.findOne({ email }).select("+password");

    // If user not found
    if (!user)
      return next(new ErrorHandler("User not found", 400));

    // Validate password
    const isPasswordValid = await user.comparePassword(password);

    // If password is incorrect
    if (!isPasswordValid)
      return next(new ErrorHandler("Invalid credentials", 400));

    // Send JWT token after successful login
    sendToken(user, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// Route to load login page (GET)
router.get("/login", (req, res) => {
  res.status(200).send("Login page ready");
});


// Route to send OTP (POST)
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // Generate OTP
    const otp = await sendOtp(email);

    // Store OTP with expiration time
    otpStore[email] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000, // OTP valid for 5 minutes
    };

    // Response indicating OTP sent
    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// Route to verify OTP (POST)
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const storedOtpData = otpStore[email];

  // If OTP doesn't exist
  if (!storedOtpData)
    return res.status(400).json({ success: false, message: "No OTP found for this email." });

  // If OTP has expired
  if (Date.now() > storedOtpData.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ success: false, message: "OTP expired." });
  }

  // If OTP is incorrect
  if (storedOtpData.otp !== otp)
    return res.status(400).json({ success: false, message: "Invalid OTP." });

  // OTP verified successfully
  delete otpStore[email];
  res.json({ success: true, message: "OTP verified successfully." });
});

// Route to load signup page (GET)
router.get("/signup", (req, res) => {
  res.status(200).send("Signup page ready");
});

// Route to handle user signup (POST)
router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password)
      return next(new ErrorHandler("All fields are required", 400));

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return next(new ErrorHandler("User already exists", 400));

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    // Respond with success message and user details
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// --- PROTECTED USER INFO ROUTE ---
// Route to get user information (GET)
router.get("/me", verifyToken, async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});
// Express backend: auth/google
const { getAuth } = require("firebase-admin/auth");

app.post("/auth/google", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = await getAuth().verifyIdToken(token);
    // Create or find user in DB
    const user = { id: decoded.uid, email: decoded.email };

    // Create custom token (or use your JWT strategy)
    const customToken = jwt.sign(user, process.env.JWT_SECRET);
    res.json({ token: customToken });
  } catch (err) {
    res.status(401).json({ message: "Invalid Google token" });
  }
});


module.exports = router;
