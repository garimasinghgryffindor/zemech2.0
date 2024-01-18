const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect("mongodb+srv://admin-garima:Test123@cluster0.gtat2mq.mongodb.net/zemech_bookings?retryWrites=true&w=majority", () => console.log("Database connected") , {newUrlParser: true});

app.use(express.json());
app.use(cors(
    {
        origin: ["https://zemech-frontend.vercel.app/"],
        methods: ["GET", "POST"],
        credentials: true
    }
));
app.use('/api', routesUrls);

app.listen(4000 , () => console.log("server is up and running"));

