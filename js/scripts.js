$(document).ready(function(){
  $(".icecream").click(function(event){
    var flavors = [" strawberry", " vanilla", " chocolate"]

        flavors.forEach(function(flavor) {
        $("#theFlavor").append("<li>" + flavor + "</li>");
                // $("#flavor1").append(flavor);
    });

    event.preventDefault();
    });

  });
