const sql = require('../config/db');

const User = function(user) {
  this.fullname = user.fullname;
  this.email = user.email;
  this.contact = user.contact;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO Users (fullname, email, contact, password) VALUES (@fullname, @Email, @contact, @Password)", {
    fullname: newUser.fullname,
    email: newUser.email,
    contact: newUser.contact,
    password: newUser.password
  }, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByEmail = (email, result) => {
  sql.query("SELECT * FROM Users WHERE email = @Email", { email }, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = User;
