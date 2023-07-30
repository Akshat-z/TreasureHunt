import { user } from "../models/user.js";
import jwt from "jsonwebtoken";

let cont = 0;

export const puzzle1 = async (req, res) => {
  let answer = req.body.ans1;
  let answerString = answer.toString().toLowerCase().trim();
  //  console.log(score);
  const { token } = req.cookies;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode._id);
  const score = await user.findById(decode._id);
  if (answerString === "potato") {
    // console.log(score.puzzle1);
    if (cont === 1) {
      score.puzzle1 = "50";
      await score.save();
    } else {
      score.puzzle1 = "100";
      await score.save();
    }
    cont = 0;
    res.render("puzzle2.ejs", { title: `Hey,${score.name}` });
  } else {
    cont = cont + 1;
    if (cont === 1) {
      res.render("puzzle1.ejs", {
        title: `Hey,${score.name}`,
        message: "Oops, Wrong Answers.Only one chance left!",
        hint: "Hint:Think some root vegetable.",
      });
    }
    if (cont === 2) {
      res.cookie("token", null, {
        expires: new Date(Date.now()), // in millisecond
      });
      res.render("index.ejs");
    }
  }
};

export const puzzle2 = async (req, res) => {
  let answer = req.body.ans2;
  let answerString = answer.toString().toLowerCase().trim();
  const { token } = req.cookies;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode._id);
  const score = await user.findById(decode._id);
  if (answerString === "12 angry men") {
    if (cont === 1) {
      score.puzzle2 = "50";
      await score.save();
    } else {
      score.puzzle2 = "100";
      await score.save();
    }
    cont = 0;
    res.render("puzzle3.ejs", { title: `Hey, ${score.name}` });
  } else {
    cont = cont + 1;
    if (cont === 1) {
      res.render("puzzle2.ejs", {
        title: `Hey,${score.name}`,
        message: "Oops, Wrong Answers.Only one chance left!",
        hint: "Hint:movie release in 1957",
      });
    }
    if (cont === 2) {
      res.cookie("token", null, {
        expires: new Date(Date.now()), // in millisecond
      });
      res.render("index.ejs");
    }
  }
};

export const puzzle3 = async (req, res) => {
  let answer = req.body.ans3;
  let answerString = answer.toString().toLowerCase().trim();
  const { token } = req.cookies;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode._id);
  const score = await user.findById(decode._id);
  //  console.log(answerString);
  if (answerString === "tamanna bhatia") {
    if (cont === 1) {
      score.puzzle3 = "50";
      await score.save();
    } else {
      score.puzzle3 = "100";
      await score.save();
    }
    cont = 0;
    res.render("puzzle4.ejs", { title: `Hey,${score.name}` });
  } else {
    cont = cont + 1;
    if (cont === 1) {
      res.render("puzzle3.ejs", {
        title: `Hey,${score.name}`,
        message: "Oops, Wrong Answers.Only one chance left!",
        hint: "Hint 1: Her name contain *Desire*.",
      });
    }
    if (cont === 2) {
      res.cookie("token", null, {
        expires: new Date(Date.now()), // in millisecond
      });
      res.render("index.ejs");
    }
  }
};

export const puzzle4 = async (req, res) => {
  let answer = req.body.ans4;
  let answerString = answer.toString().toLowerCase().trim();
  const { token } = req.cookies;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode._id);
  const score = await user.findById(decode._id);
  if (answerString === "russia") {
    if (cont === 1) {
      score.puzzle4 = "50";
      await score.save();
    } else {
      score.puzzle4 = "100";
      await score.save();
    }
    cont = 0;
    res.render("puzzle5.ejs", { title: `Hey,${score.name}` });
  } else {
    cont = cont + 1;
    if (cont === 1) {
      res.render("puzzle4.ejs", {
        title: `Hey,${score.name}`,
        message: "Oops, Wrong Answers.Only one chance left!",
        hint: "Hint: This country has an area of 17.1 million km2",
      });
    }
    if (cont === 2) {
      res.cookie("token", null, {
        expires: new Date(Date.now()), // in millisecond
      });
      res.render("index.ejs");
    }
  }
};

export const puzzle5 = async (req, res) => {
  let answer = req.body.ans5;
  let answerString = answer.toString().toLowerCase().trim();
  const { token } = req.cookies;
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode._id);
  const score = await user.findById(decode._id);
  if (answerString === "clock") {
    if (cont === 1) {
      score.puzzle5 = "50";
      await score.save();
    } else {
      score.puzzle5 = "100";
      await score.save();
    }
    cont = 0;
    res.render("conj.ejs");
  } else {
    cont = cont + 1;
    if (cont === 1) {
      res.render("puzzle5.ejs", {
        title: `Hey,${score.name}`,
        message: "Oops, Wrong Answers.Only one chance left!",
        hint: "P.S: I went easy on you because this is your last puzzle. I may not give more hints but first see you wrist.",
      });
    }
    if (cont === 2) {
      res.cookie("token", null, {
        expires: new Date(Date.now()), // in millisecond
      });
      res.render("index.ejs");
    }
  }
};
