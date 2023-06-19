const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальное количество симфолов: 2'],
    maxlength: [30, 'Максимальное количество симфолов: 30'],
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: [2, 'Минимальное количество симфолов: 2'],
    maxlength: [30, 'Максимальное количество симфолов: 30'],
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Неверный URL',
    },
  },
  email: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Неверная почта',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    select: false,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
