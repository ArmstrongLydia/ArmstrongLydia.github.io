//get the file (replace with your own url)
$.get("http://aarmstronglydia.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    //check if this document has .container
    var container = $(".container");

    //if so add nav.html contents to the top
    if (container) {
      container.prepend(data)
      container.fadeIn();
    }

  });

});