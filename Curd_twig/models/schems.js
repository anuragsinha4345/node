const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const conn = mongoose.connections;
const employeeModel = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  status: Boolean,
  dateOfPost: Date,
  city: String,
  street: String
})
let employee = mongoose.model('employee', employeeModel)
module.exports.models = employee
