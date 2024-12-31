
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: {
        village: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        postalNumber: { type: String, required: true },
    },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
