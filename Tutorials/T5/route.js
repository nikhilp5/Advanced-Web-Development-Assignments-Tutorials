const express = require("express");
const router = express.Router();

const users = [
  {
    email: "abc@abc.ca",
    firstName: "ABC",
    id: "5abf6783",
  },
  {
    email: "xyz@xyz.ca",
    firstName: "XYZ",
    id: "5abf674563",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "App is working" });
});

router.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users retrieved",
    success: true,
    users: users,
  });
});

router.get("/user/:id", (req, res) => {
  var userFound = false;
  const id = req.params.id;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id.toString() === id.toString()) {
      userFound = true;
      res.status(200).json({
        success: true,
        user: users[i],
      });
    }
  }
  if (!userFound) {
    res.status(500).json({
      message: "User not found",
    });
  }
});

router.put("/update/:id", (req, res) => {
  var userFound = false;
  const id = req.params.id;
  const bodyData = req.body;
  if (bodyData?.email && bodyData?.firstName) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id.toString() === id) {
        userFound = true;
        users[i].email = bodyData.email;
        users[i].firstName = bodyData.firstName;
        res.status(200).json({
          message: "User updated",
          success: true,
        });
      }
    }
    if (!userFound) {
      res.status(500).json({
        message: "User not found",
      });
    }
  } else {
    res.status(500).json({
      message: "Error in body data",
    });
  }
});

router.post("/add", (req, res) => {
  const bodyData = req.body;
  if (bodyData?.email && bodyData?.firstName) {
    bodyData.id = Math.floor(Math.random() * 10000000).toString();
    users.push(bodyData);
    res.status(200).json({
      message: "User added",
      success: true,
    });
  } else {
    res.status(500).json({
      message: "Error in body data",
    });
  }
});

router.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

module.exports = router;
