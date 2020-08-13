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


// Register student
describe('Students', function() {
    describe('POST student register', function() {

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
