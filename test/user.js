const chai = require('chai');
const chaiHttp = require('chai-http');
const baseUrlRoutes = 'http://localhost:3000';

const should = chai.should();
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(chaiHttp);

const myapp = require('../app.js');

let serverr

before(done => {
    serverr = myapp.listen(2000, done);
});

after(done => {
    serverr.close(done);
});

<<<<<<< HEAD
=======
// Register teacher
describe('Users', function() {
    describe('POST user register', function() {
        it('it should register a single user', function(done) {
            chai.request(myapp)
                .post('/admin/register/teacher')
                .send({
                    "FirstName": 'Jeson',
                    "LastName": 'sherpa',
                    "Gender": 'male',
                    "UserType": 'male',
                    "Address": 'Baneshwor',
                    "DOB": '2019-06-17',
                    "Email": 'pasanglakpasherpa101.com',
                    "Phone": '+977-9843384828',
                    "Bio": 'Teacher for 4 years',
                    "Password": 'asd'
                })
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    // res.body.should.have.property('message').eql('user data registered');
                    done();
                })
        })
    })
})

// admin login
describe('admin login', () => {
    describe('/POST login', () => {
        it('it should log in admin', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/admin/login')
                .send({
                    "email": 'pasanglakpasherpa101.com',
                    "password": 'arps',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});


>>>>>>> master

// Register student
describe('Students', function() {
    describe('POST student register', function() {
<<<<<<< HEAD

=======
>>>>>>> master
        it('it should register a single student', function(done) {
            chai.request(myapp)
                .post('/student/register')
                .send({
                    "FirstName": 'Jeson',
                    "LastName": 'sherpa',
                    "Gender": 'male',
                    "DOB": '2019-06-17',
                    "Phone": '+977-9843384828',
                    "Address": 'Baneshwor',
                    "Email": 'pasanglakpasherpa101@gmail.com',
                    "Password": 'arps'
                })
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    // res.body.should.have.property('message').eql('user data registered');
                    done();
                })
        })
    })
})
<<<<<<< HEAD
=======

// login
describe('users', () => {
    describe('/POST login', () => {
        it('it should log in user', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/user/login')
                .send({
                    "email": 'pasanglakpasherpa101@gmail.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});

// admin login
describe('teacher login', () => {
    describe('/POST login', () => {
        it('it should log in admin', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/teacher/login')
                .send({
                    "email": 'pasanglakpasherpa101.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
})
>>>>>>> master
