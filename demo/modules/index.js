const mongoose = require('mongoose');

// const schema = new mongoose.Schema({
//   p1: String,
//   p2: String,
// });
// const obj = mongoose.model('names', schema);

const schema = new mongoose.Schema({
  username: String,
  pwd: String,
});
const user = mongoose.model('users', schema);

module.exports = {
  //   obj,
  user,
};
