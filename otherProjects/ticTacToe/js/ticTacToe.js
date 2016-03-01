$(document).ready(function() {

  var circleOrEx = "o"; // what does this variable represent - The letter 'o'
  var isGameInProgress = true; // what does this variable represent - if the game is working correctly
  var winningCombos = { // all the combanations to winning or place your move
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // places the x or o in the boxes
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// sees if the box is empty or not
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //looks to see if there is a winner

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // creates a new game
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //starts a new board
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //sets up all 9 boxes
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what team goes next
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //empty squars in new game
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //check to make sure there are 3 in a row of the same later
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //3 in a row wins
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //if there arnt 3 in a row no winner
          playerWon = false;
        }
      }

      if (playerWon) { //if there is a winner a popup appears

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //winning letter turn green
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //keeps playing
      }
    }


  }
})
