const User = require('../middleware/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.register = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    contact: req.body.contact,
    password: bcrypt.hashSync(req.body.password, 8),
  role: req.body.role
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

exports.login = (req, res) => {
  User.findByEmail(req.body.email,req.body.role, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "User not found with email " + req.body.email
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with email " + req.body.email
        });
      }
    } else {
      const passwordIsValid = bcrypt.compareSync(req.body.password, data.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      // Log the JWT_SECRET to ensure it is loaded

      res.status(200).send({
        id: data.id,
        fullname: data.fullname,
        email: data.email,
        contact: data.contact
      });
    }
  });
};
