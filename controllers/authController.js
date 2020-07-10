var studentmodel = require('../models/studentModel');
var adminmodel = require('../models/adminModel');









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