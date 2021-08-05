const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    trim: true,
  },
  password: {
    type: String,
    required: false,
    trim: true,
  },

  role: {
    type: String,
    default: "patient",
    enum: ["serveur", "client", "Admin"],
  },
 

});
module.exports = mongoose.model("User", userSchema);