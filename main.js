$(document).ready(function() {
    //hover effect for submit button
    $('#subBtn').hover(
     function() {
         $(this).css({'color': 'red', 'font-weight': 'bold'});
     },
     function() {
         $(this).css({'color': '', 'font-weight': ''});
     }
 );
 
 //submit button click event
 $('#subBtn').click(function(event) {
     //create timestamp for submission
     let timestamp = new Date().toLocaleString();
     console.log('Form submitted at: ' + timestamp);
 
     //determine which DOM element triggered the event
     let triggeringElement = event.target;
     $(triggeringElement).css('opacity', '0.5');
 
     //call formValidate function
     if (formValidate()) {
         //if validation passes, send form data to server
         alert('Form is valid. Submitting data to server...');
 
         //reset form
         $('#userForm')[0].reset();
     } else {
         //if validation fails, display error message and clear form 
         alert('Form validation failed. Please check your input.');
         $('#userForm')[0].reset();
     }
 });
 
     function formValidate() {
         //add form validation logic
         return true;
     }
 });


 /*added functionality for assignment*/
 function getTicket(ticketnum) {
    $.ajax({
        url: 'https://jscript.rdm/ticketrequest.asp/?ticketnumber=${ticketnum}',
        type: 'GET',
        data: { ticketnumber: ticketnum },
        success: function(response) {
            //assuming response is a JSON object with the required fields
            $('#ReqDate').val(response.requestDate);
            $('#EmpID').val(response.employeeID);
            $('#FName').val(response.userFirstName);
            $('#LName').val(response.userLastName);
            $('#ProbDesc').val(response.problemDescription);
            $('#Status').text(response.status);
            $('#Response').text(response.responseProvided);
        },
        error: function(error) {
            console.log('Error retrieving ticket data:', error);
            $('#error').text('Error retrieving ticket data. Please try again.').show();
        }
    });
}


/*code for additional use of AJAX*/

/*
function searchMovies(keyword) {
    $.ajax({
        url: `https://api.example.com/movies?search=${keyword}`,
        type: 'GET',
        success: function(response) {
            // Clear previous results
            $('#movieList').empty();
            response.movies.forEach(function(movie) {
                $('#movieList').append(`<li>${movie.title} (${movie.year}) - <a href="${movie.link}" target="_blank">More Info</a></li>`);
            });
        },
        error: function(error) {
            console.log('Error retrieving movie data:', error);
            $('#error').text('Error retrieving movie data. Please try again.').show();
        }
    });
}
*/