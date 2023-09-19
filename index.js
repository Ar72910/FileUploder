// app create
const express = require("express");
const app = express();

// Port find
require("dotenv").config();
const PORT = process.env.PORT || 3000


// add middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload);


// db connect
const db = require('./config/database');
db.connect();

// cloud sei connnect
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// api route mount krna hei
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload',Upload)

// activate server

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);

})