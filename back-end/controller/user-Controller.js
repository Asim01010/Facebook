import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const userReg = async (req, res) => {
  const { f_name, l_name, date, month, year, gender, email, password } =
    req.body;

  // Check required fields
  if (
    !f_name ||
    !l_name ||
    !date ||
    !month ||
    !year ||
    !gender ||
    !email ||
    !password
  ) {
    return res.status(400).json({ error: "Please enter all required fields" });
  }

  try {
    // Check if user already exists
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10); // 10 is a better salt round

    // Create new user with the hashed password
    const newUser = await User.create({
      f_name,
      l_name,
      date,
      month,
      year,
      gender,
      email,
      password: hashPassword, // Save the hashed password, not the plain one
    });

    // Send the response ONCE
    res.status(201).json({
      _id: newUser._id,
      f_name: newUser.f_name,
      l_name: newUser.l_name,
      email: newUser.email,
      gender: newUser.gender,
      date: newUser.date,
      month: newUser.month,
      year: newUser.year,
      password: newUser.password,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error during registration" });
  }
};
