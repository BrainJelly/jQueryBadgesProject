$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/2233236.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      for(let course in response.courses.completed) {
        //console.log(response.courses.completed[course].title);
        //console.log(response.courses.completed[course].url);
        $('#badges').append('<div class="course"><h3>' + response.courses.completed[course].title + '</h3>' +
        '<img src= "'+ response.courses.completed[course].badge + '"/>' +
        '<a class="btn btn-primary" target="_blank" href=" '+ response.courses.completed[course].url + '"'+ '>See Course </a>' +
        '</div>');
      }

    }
  });
});
