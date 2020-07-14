var express = require('express');
var myapp = new express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

// bodyParser
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({ extended: true }));

// path
myapp.use(express.static(
    path.join(__dirname, '/resources')
));

// sequelize
var mysequelize = require('./configs/dbconfigs.js');
var mysequelize = require('./models/studentModel.js');
var mysequelize = require('./models/teacherModel.js');






// multer storage
var mystorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'resources/videos/courses')
    },

    destination: function (req, file, cb) {
        cb(null, 'resources/videos/profileImage')

    },
    filename: function (req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});


var upload = multer({ storage: mystorage });


//profile Image upload
var mystoragee = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'resources/videos/profileImage')
    },
    filename: function (req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});

// controllers require
var authController = require('./controllers/authController');



//Video Table Register
myapp.post('/video/register', upload.single('courseVideo'), videoController.videoRegister, function (req, res) {
    res.send({
        "status": 200,
        "message": "New Video Data registered"
        // "token": req.genToken
    })
});



// upload student profile Image
myapp.post('/student/register/studentImage', upload.single('studentImage'), studentController.studentImageUpdate, function (req, res) {
    res.send({

        "status": 200,
        "message": "Student Profile Image Registered",
        "name": req.testVall
    })
});

// upload teacher profile Image
myapp.post('/teacher/register/teacherImage', uploadImage.single('teacherImage'), teacherController.teacherImageUpdate, function (req, res) {
    res.send({
        "status": 200,
        "message": "Teacher Profile Image Registered",
        "name": req.testVall
    })
});




//this is the first middleware - application middleware , all routes hit this middleware first
myapp.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,X-Requested-With,authorization');
    next(); // next passes to another application middleware
});



// system error handler
myapp.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status);
    res.send({
        "message": err.message
    })
})


// set port
myapp.listen(3000);


module.exports = myapp;