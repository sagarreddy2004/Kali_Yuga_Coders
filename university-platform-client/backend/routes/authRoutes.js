module.exports = app => {
    const auth = require('../controllers/auth.controller');
  
    app.post('/api/register', auth.register);
    app.post('/api/login', auth.login);
  };
  