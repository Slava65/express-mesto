const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
  //   validate: {
  //     validator(v) {
  //         const regex = /^https?:\/\/w{0,3}\.[a-z0-9-._~:/?#[]@!$&'()*+,;=]{1,}\.[a-z0-9-._~:/?#[]@!$&'()*+,;=]+#?/;
  //         return  regex.test(v)
  //     },
  //     message: 'URL введен неверно',
  // }
  }
});

module.exports = mongoose.model('user', userSchema);