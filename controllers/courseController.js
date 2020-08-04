var coursemodel = require('../models/courseModel');
var coursetypemodel = require('../models/coursetypeModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var mySeq = require('../configs/dbconfigs')


function courseRegister(req, res, next) {
    // console.log(req.body);
    coursemodel.create({

        title: req.body.Title,
        description: req.body.Description,
        credit: req.body.Credit,
        fee: req.body.Fee,
        course_image: req.body.CourseImage,
        start_date: req.body.StartDate,
        end_date: req.body.EndDate,
        teacher_id: req.body.TeacherID,
        coursetype_id: req.body.CourseTypeID,
        rating_id: req.body.RatingID

    })
        .then(function (result) {

            next();
        })
        .catch(function (err) {
            next({ "status": 500, "message": "DB Error" });
        })
}





module.exports = {
    courseRegister,
    deleteCourse,
    getCourseDatabyteacher,
    getCourseData,
    courseUpdate,
    searchCourse,
    token,
    getCourseAverageRating


}
