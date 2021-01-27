const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator(v) {
        const regex = /^[а-яa-z0-9-: ]{2,30}$/i;
        return regex.test(v);
      },
      message: "Имя введено неверно",
    },
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator(v) {
        const regex = /^[а-яa-z0-9-:,;. ]{2,30}$/i;
        return regex.test(v);
      },
      message: "Информация введена неверно",
    },
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /^(https?:\/\/)(www\.)?[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-z]{2,6}([a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+)?(#?)$/i;
        return regex.test(v);
      },
      message: "URL введен неверно",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
