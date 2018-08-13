$(document).ready(function(){
  $(".icecream").click(function(){
    var flavors = [" strawberry", "vanilla", " chocolate"]
      flavors.forEach(function(flavor) {
        $("#flavor1").text(flavor);
    });
    event.preventDefault();
    });
  });
