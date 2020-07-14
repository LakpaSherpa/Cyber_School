var studentmodel = require('../models/studentModel');
var adminmodel = require('../models/adminModel');
var teachermodel = require('../models/teacherModel');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


// Student Teacher Email Check
function StudentTeacherEmailCheck(req, res, next){
    studentmodel.findOne({
        where: {
            email: req.body.Email
        }
    })
    .then(function(result) {
        req.userHashPassword = result.dataValues.password;
        req.userInfo = result.dataValues;
        req.usertype = "student";
        // console.log('student');
        next();
    })
    .catch(function(err) {
        teachermodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        .then(function(result) {
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            req.usertype = "teacher";
            // console.log('teacher');
            next();
    })
    .catch(function(err) {

        next({
            "status": 400,
            "message": "Please register   first to login"
        })
    })
     })
}      


// Student Email check
function studentvalidator(req, res, next) {
    studentmodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Please register student data first to login"
            })

        })
}









module.exports = {
    studentvalidator,
    teachervalidator,
    checkPasswordMatch,
    tokenemailvalidator,
    jwtTokenGen,
    tokenVerify,
    adminValidator,
    adminjwtTokenGen,
    admintokenemailvalidator,
    StudentTeacherEmailCheck
}