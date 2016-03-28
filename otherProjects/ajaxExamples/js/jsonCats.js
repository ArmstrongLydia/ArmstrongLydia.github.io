$(document).ready(function() {

    $.getJSON("jsonDatabase/cat.json", function(data) {

      console.dir(data);
      var html = "";

      $.each(data, function(index, item) {
          html += '<div class="col-md-4">' +
            '<div class="catName">' + item.name + '</div>' +
            '<div class="catType"><small>type </small>' + item.type + '</div>' +
            '<div class="catGender"><small>gender </small>' + item.gender + '</div>' +
            '<img class="catImage" src="' + item.image + '"/>' +
            //deleted commentsContainer
            '<div class="panel panel-default">' + //added
            '<div class="panel-heading">Renter Comments</div>'; //added
          $.each(item.comments, function(ind, i) {
              html += '<div class="panel-body">' + //added
                '<div class="renterName">' + i.username + '</div>' +
                '<div class="renterComment">' + i.comment + '</div>' +
                '<div class="renterStars">';

              for (var j = 1; j <= 5; j++) {

                if (j <= i.stars) {
                  html += '<img src="images/fullStar.png"/>';
                } else {
                  html += '<img src="images/emptyStar.png"/>';
                }
              }
              html += '</div>'+//end stars
                      '</div>'; //panel body
            }) //each comment

          html += '</div>' + //panel
            '</div>'; //col-md-4
        }) //each cat

      $("#catData").append(html);
    })
  })
  /*
  //one per cat
  <div class="col-md-4 cat">
    <div class="catName"></div>
    <div class="catType"></div>
    <div class="catGender"></div>
    <img src=""/>
    <div class="commentsContainer">
      //one per comment
      <div class="renterName"></div>
      <div class="renterComment"></div>
      <div class="renterStars">
      //5 stars, some full, some empty
      </div> //end starts
    </div>//end commentsContainer
  </div>//end cat

  <div class="panel panel-default">

    <div class="panel-heading">Renter Comments/div>

    <div class="panel-body">
    //name
    //comment
    //stars
    </div>

  </div>
  */
