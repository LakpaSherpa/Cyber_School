Feature: <Student Register>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Post student register
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                                          | expectval                                             |
<<<<<<< HEAD
      | http://localhost:3000/student/register | { "Email":"pasanglakpasherpa@gmail.com","Password":"asd","FirstName":"Pasanglakpa","LastName":"Sherpa","Address":"Baneshwor","Phone":"9817849333","DOB":"1997-06-02","Gender":"male" } | { "status": 200, "message": "New Student Registered"} |
=======
      | http://localhost:3000/student/register | { "Email":"sherpapasanga@gmail.com","Password":"asd","FirstName":"Pasanglakpa","LastName":"Sherpa","Address":"Jorpati","Phone":"9817849333","DOB":"1995-03-02","Gender":"male" } | { "status": 200, "message": "New Student Registered"} |
>>>>>>> system_controller
