const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },

  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  username: {
    type: String,
    trim: true,
    required: "Username is required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password must be 6 or more characters"
    ]
  },

  userCreated: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
