import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: [true, "Please enter first name"],
    },
    l_name: {
      type: String,
      required: [true, "Please enter last name"],
    },
    date: {
      type: Number,
      required: [true, "Please enter date"],
    },
    month: {
      type: String,
      required: [true, "Please enter month"],
    },
    year: {
      type: Number,
      required: [true, "Please enter year"],
    },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },
    email: {
      type: String,
      required: [true, "Please enter Your email or Phone number"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
