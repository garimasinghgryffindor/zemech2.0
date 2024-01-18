const express = require('express');
const router = express.Router();
const bookingModelCopy = require('../models/bookingModels');

router.post('/book' , (request , response) => {
    const bookedUser = new bookingModelCopy({
        fName: request.body.fName,
        lName: request.body.lName,
        email: request.body.email,
        address: request.body.address,
        //slot_start_date: request.body.slot_start_date,
        //slot_start_time: request.body.slot_start_time,
        //slot_end_date: request.body.slot_end_date, 
        //slot_end_time: request.body.slot_end_time,
        slot_allot: request.body.slot_allot,
        slot_allot_end: request.body.slot_allot_end
    });

    bookedUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.get('/' , (req , res) => {
    res.send("Welcome to my api");
});

router.get('/about', (req, res) => {
    res.send('About birds')
  })


router.get('/waitingList' , (request , response) => {
    //bookingModelCopy.find({}).toArray((err , result) => {
    //    if(err) throw err;
    //    response.send(result);
    //}); 
    bookingModelCopy.find(({}) , function(err ,val){
        response.send(val);
    });
});

//router.get('/lastBooking' , (request , response) => {
//    bookingModelCopy.find(({}) , function(err , val){
//        response.send(val);
//    })
//});



module.exports = router;
