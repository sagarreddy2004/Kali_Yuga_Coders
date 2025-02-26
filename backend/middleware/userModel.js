const sql = require('../config/db'); // Ensure the correct path to your db.config file

const User = function(user) {
  this.fullname = user.fullname;
  this.email = user.email;
  this.contact = user.contact;
  this.password = user.password;
  this.role = user.role;
};

User.create = (newUser, result) => {
  try {
    const tableName = getTableName(newUser.role);
    const request = new sql.Request();
    request.input('fullname', sql.VarChar, newUser.fullname);
    request.input('email', sql.VarChar, newUser.email);
    request.input('contact', sql.VarChar, newUser.contact);
    request.input('password', sql.VarChar, newUser.password);

    request.query(`INSERT INTO ${tableName} (fullname, email, contact, password) VALUES (@fullname, @email, @contact, @password)`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  } catch (error) {
    result(error, null);
  }
};

User.findByEmail = (email, role, result) => {
  try {
    const tableName = getTableName(role);
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);

    request.query(`SELECT * FROM ${tableName} WHERE email = @email`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.recordset.length) {
        console.log("found user: ", res.recordset[0]);
        result(null, res.recordset[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    });
  } catch (error) {
    result(error, null);
  }
};

const getTableName = (role) => {
  switch (role) {
    case 'Student':
      return 'students_tbl';
    case 'Faculty':
      return 'faculty_tbl';
    case 'Alumni':
      return 'alumini_tbl';
    case 'Admin':
      return 'admin_tbl';
    default:
      throw new Error('Invalid role: ' + role);
  }
};

module.exports = User;
