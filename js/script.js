// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var randomIndex= Math.floor(Math.random() * 25);
    $('.result').empty();
      var userinput = $("#search-term").val();
      var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userinput + "&rating=pg&api_key=dc6zaTOxFJmzC";

  $.ajax({
      url: request_url,
      method: "GET",
        success: function(response) {
            var pic = response.data[randomIndex].images.original.url;
            $('.result').append('<img src=' + pic + '>');
        }
   
  })
});
