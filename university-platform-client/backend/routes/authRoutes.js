module.exports = app => {
    const auth = require('../controllers/authController');
  
    app.post('/api/register', auth.register);
    app.post('/api/login', auth.login);
  };
  