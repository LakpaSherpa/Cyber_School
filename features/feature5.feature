Feature: <Teacher Update>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put teacher update
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                                              | expectval                                           |
      | http://localhost:3000/teacher/update/1 | { "Email":"Feature: <Teacher Update>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put teacher update
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                                              | expectval                                           |
      | http://localhost:3000/teacher/update/1 | { "Email":"Feature: <Teacher Update>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put teacher update
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                                              | expectval                                           |
      | http://localhost:3000/teacher/update/1 | { "Email":"pasanglakpasherpa@gmail.com","FirstName":"pasanglakpa","LastName":"Sherpa","DOB":"1999-06-01","Gender":"male","Phone":"9817849333","Address":"Baneshwor","Bio":"Loremipsumm" } | { "status": 200, "message": "teacher data updated"} |@gmail.com","FirstName":"pasanglakpa","LastName":"Sherpa","DOB":"1997-06-01","Gender":"male","Phone":"9817849333","Address":"Baneshwor","Bio":"Loremipsumm" } | { "status": 200, "message": "teacher data updated"} "pasanglakpasherpa@gmail.com","FirstName":"pasanglakpa","LastName":"Sherpa","DOB":"1997-06-01","Gender":"male","Phone":"9817849333","Address":"Baneshwor","Bio":"Loremipsumm" } | { "status": 200, "message": "teacher data updated"} |