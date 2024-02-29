const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: String,
    
  });
  
  const User = mongoose.model('user', userSchema);
  module.exports = {
    User
  }