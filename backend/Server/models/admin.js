const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    username :{ type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

const EmployeeModel = mongoose.model('admin', EmployeeSchema);
module.exports = EmployeeModel;