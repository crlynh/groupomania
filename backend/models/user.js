const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {type: Number, required: true, default: 0}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);