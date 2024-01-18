const mongoose = require('mongoose');

const bookingModelTemplate = new mongoose.Schema({
    fName: {
        type: String,
        requird: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    //slot_start_date: {
    //    type: String
    //},
    //slot_start_time: {
    //    type: String
    //},
    //slot_end_date: {
    //    type: String
    //},
    //slot_end_time: {
    //    type: String
    //},
    slot_allot: {
        type: Date,
        default: new Date()
    },
    slot_allot_end: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('zemech_bookings' , bookingModelTemplate);