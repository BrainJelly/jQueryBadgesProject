$(function() {

  // your code will go here
  //https://www.codeschool.com/users/2233236

  //Make an Ajax request to the Report Card URL you found on CodeSchool.com
  //Set the dataType as jsonp
  //Pass a success callback

 //By now, our Ajax call will have returned a response object that contains an array field called response.courses.completed.
 //Let's add one div element per item in the courses.completed array inside of the #badges element.
 //Add the CSS class course to each div element we add to #badges.

  $.ajax({
    url: 'https://www.codeschool.com/users/2233236.json',
    dataType: 'json',
    success: function(response) {
      // handle response
      for(let course in response.courses.completed) {

      }

    }
  });
});
