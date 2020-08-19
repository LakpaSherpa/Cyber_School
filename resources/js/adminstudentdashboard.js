



function getStudentsList() {
    $.ajax({
        url: 'http://localhost:3000/get/student',
        method: 'get',
        dataType: 'json',
        headers: { authorization: 'Bearer ' + window.localStorage.getItem('token') },
        success: function(result, status) {
            // console.log(result.info);
            $('#studentsListBody').empty();
            let studentCounts=0;
            for (key in result.info) {
                studentCounts++;
                $('#studentsListBody').append(
                    `
        <tr>
          <th scope="row"> ${result.info[key].id}</th>
          <td>${result.info[key].first_name}</td>
          <td>${result.info[key].last_name}</td>
          <td>${result.info[key].address}</td>
          <td>${result.info[key].phone}</td>
          <td>${result.info[key].dob} Hrs</td>
          <td>${result.info[key].gender}</td>
          <td>${result.info[key].profile_image}</td>
          <td>${result.info[key].email}</td>
          <td>${result.info[key].verify}</td>
          <td><button type="button" id="edit" class="editStudent btn btn-primary" data-id="${result.info[key].id} " data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Edit</button></td>
          <td><button type="button" id="delete" data-id="${result.info[key].id}" class="deleteStudent btn btn-danger">Delete</button></td>
        </tr>
          `
                );    
            }
            $('#totalStudentsNumber').html(`Total Students: ${studentCounts}`);
        },
        error: function(jqXHR, status) {
            console.log(jqXHR);
        }
    })
}

getStudentsList();




//delete student


$(document).ready(function() {
    $(document).on('click', '.deleteStudent', function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');

        // alert(id);
        $.ajax({
            url: 'http://localhost:3000/student/delete/' + id,
            method: 'get',
            contentType: 'application/json',
            success: function(result, status) {
                console.log(status);
                alert(result.message);
                window.location.href = "adminstudentdashboard";
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
                alert(jqXHR.responseJSON.message);
            }
        });
    });
});


