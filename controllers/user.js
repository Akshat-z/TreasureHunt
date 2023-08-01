import { user } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";

export const showall = async (req, res) => {
  const data = await user.find({}, { _id: 0, email: 0, password: 0 });
  res.json({
    data,
  });
};

export const showrules = (req, res) => {
  return res.render("rules.ejs");
};
export const showlogin = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decode._id);
    const player = await user.findById(decode._id);
    return res.render("puzzle1.ejs", { title: `Hey,${player.name}` });
  }
  return res.render("login.ejs");
};

export const showregister = (req, res) => {
  return res.render("register.ejs");
};

export const showadmin = (req, res) => {
  return res.render("Admin.ejs");
};

export const verifyAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "admin@gmail.com") {
      if (password === "123") {
        return res.render("leader.ejs");
      } else {
        res.render("Admin.ejs");
      }
    } else res.send("something went wrong");
  } catch (err) {
    res.send(err);
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req.body);
    const isuser = await user.findOne({ email });
    if (isuser)
      res.render("register.ejs", {
        message: `Hey,${isuser.name} only,sign in`,
      });
    else {
      const hashpassword = await bcrypt.hash(password, 10);
      await user.create({ name, email, password: hashpassword });
      // console.log("datauploaded");
      res.render("index.ejs");
    }
  } catch (err) {
    res.send(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isuser = await user.findOne({ email });
    if (!isuser)
      res.render("login.ejs", { message: "User doesn't exist, first sign up" });
    const isMatch = await bcrypt.compare(password, isuser.password);
    if (!isMatch)
      res.render("login.ejs", { message: "Password is not correct" });
    const token = jwt.sign({ _id: isuser._id }, process.env.JWT_SECRET);
    await res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 60 * 1000), // in millisecond
    });
    res.render("puzzle1.ejs", { title: `Hey,${isuser.name}` });
  } catch (err) {
    res.send(err);
  }
};
