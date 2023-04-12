var cards = [];
var player1 = [];
var player2 = [];
var playedCards = [];
var number1;
var number2;
var suit1;
var suit2
var numberImg;
//variables



for (var a=1; a<14 /*normally is 14*/; a++) {
  for (var b=1; b<5; b++) {
    var c = [a, b];
    cards.push(c);
  }
}
//creates the cards

cards.shuffle = function() {
  console.log('shuffling the cards')
  
  var input = this;
  for (var i = cards.length-1; i>=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = cards[randomIndex][0];
    var itemAtSecond = cards[randomIndex][1];
    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond;
  }
  return input;

}
//function for shuffling the cards

cards.shuffle();
//calls shuffle

var half = cards.length/2;
for (var i=0; i<half; i++) {
  player1.push(cards[i]);
}
//deals cards player1
cards.splice(0, half);
//removes cards dealt to player1
player2 = cards;
//deals cards to player2
$('#player1-count').html(player1.length);
$('#player2-count').html(player2.length);
//writes down how many cards each player has

function greater(){
  console.log("greater");
  
  if (number1 > number2) {
    console.log("Player One wins");
    console.log(" ")
    for (var i=0; i<playedCards.length; i++) {
      player1.push(playedCards[i]);
    }
    $("#player1-count").html(player1.length)
    playedCards = [];
  } 
  else if (number2 > number1) {
    console.log("Player Two wins");
    console.log(" ")
    for (var i=0; i<playedCards.length; i++) {
      player2.push(playedCards[i]);
    }
    $("#player2-count").html(player2.length)
    playedCards = [];
  } 
    if (player1.length === 0) {
      $("#winner").css("visibility", "visible");
    $("#winner").html("The winner is Player Two");
  }
  if (player2.length === 0) {
    $("#winner").css("visibility", "visible");
    $("#winner").html("The winner is Player One");
  }
  else if (number1 === number2){
    war();
  }
}
//ends function greater

function assign(){
  if (player1.length === 0) {
    $("#winner").css("visibility", "visible");
    $("#winner").html("Player Two");
  }
  if (player2.length === 0) {
    $("#winner").css("visibility", "visible");
    $("#winner").html("Player One");
  }

  console.log("assign")
  $('#player1-suit').empty();
  $('#player2-suit').empty();

  $('#player1-suit').css("display", "block");
  $('#player2-suit').css("display", "block");
  $("#winner").css("visibility", "hidden");

  number1 = player1[0][0];
  number2 = player2[0][0];
  suit1 = player1[0][1];
  suit2 = player2[0][1];

  $('#player1-number').html(number1);
  $('#player2-number').html(number2);


  if (suit1 === 1) {
    suit1 = "<img src='resources/images/hearts.png'/>"
  }
  if (suit1 === 2) {
    suit1 = "<img src='resources/images/diamonds.png'/>"
  }
  if (suit1 === 3) {
    suit1 = "<img src='resources/images/clubs.png'/>"
  }
  if (suit1 === 4) {
    suit1 = "<img src='resources/images/spades.png'/>"
  }
  if (suit2 === 1) {
    suit2 = "<img src='resources/images/hearts.png'/>"
  }
  if (suit2 === 2) {
    suit2 = "<img src='resources/images/diamonds.png'/>"
  }
  if (suit2 === 3) {
    suit2 = "<img src='resources/images/clubs.png'/>"
  }
  if (suit2 === 4) {
    suit2 = "<img src='resources/images/spades.png'/>"
  }

  if (number1 < 11) {
    for (var i = 0; i<number1; i++) {
      //console.log(i)
      $('#player1-suit').append(suit1);
    }
  } else if (number1 === 11) {
    var number1Img = "<img src='resources/images/jack.png'/>"
    
    for (var i = 0; i<number1; i++) {
      //console.log(i)
      $('#player1-suit').append(suit1);
    }
    
    $('#player1-number').html(number1Img);
  } else if (number1 === 12) {
    var number1Img = "<img src='resources/images/queen.png'/>"
    
    for (var i = 0; i<number1; i++) {
      //console.log(i)
      $('#player1-suit').append(suit1);
    }
    
    $('#player1-number').html(number1Img);
  } else if (number1 === 13) {
    var number1Img = "<img src='resources/images/king.png'/>"
    
    for (var i = 0; i<number1; i++) {
      //console.log(i)
      $('#player1-suit').append(suit1);
    }
    
    $('#player1-number').html(number1Img);
  }

  
  if (number2 < 11) {
    for (var i = 0; i<number2; i++) {
      //console.log(i)
      $('#player2-suit').append(suit2);
    }
  }
  else if (number2 === 11) {
    var number2Img = "<img src='resources/images/jack.png'/>"
    
    for (var i = 0; i<number2; i++) {
      //console.log(i)
      $('#player2-suit').append(suit2);
    }
    
    $('#player2-number').html(number2Img);
  }
  else if (number2 === 12) {
    var number2Img = "<img src='resources/images/queen.png'/>"
    
    for (var i = 0; i<number2; i++) {
      //console.log(i)
      $('#player2-suit').append(suit2);
    }
    
    $('#player2-number').html(number2Img);
  }
  else if (number2 === 13) {
    var number2Img = "<img src='resources/images/king.png'/>"
    
    for (var i = 0; i<number2; i++) {
      //console.log(i)
      $('#player2-suit').append(suit2);
    }
    
    $('#player2-number').html(number2Img);
  }

  playedCards.push(player1[0]);
  playedCards.push(player2[0]);
  console.log(playedCards.length + " how many cards played")
  
  player1.splice(0,1);
  player2.splice(0,1);
  $('#player1-count').html(player1.length);
  $('#player2-count').html(player2.length);
  
  console.log("call greater")
  greater();
}
//ends function assign

function war(){
  console.log("WAR!!!!!")
  $("#winner").css("visibility", "visible");

  for (i=0; i<3; i++){
    playedCards.push(player1[0]);
    playedCards.push(player2[0]);
    //console.log(playedCards.length)

    player1.splice(0,1);
    player2.splice(0,1);

    $('#player1-count').html(player1.length);
    $('#player2-count').html(player2.length);
  };
  if (player1.length === 0) {
      $("#winner").html("The winner is Player Two");
    }
    if (player2.length === 0) {
      $("#winner").html("The winner is Player One");
    }

  $('#player1-suit').css("display", "none");
  $('#player2-suit').css("display", "none");

  numberImg = "<img style='height: 14rem;' src='resources/images/cardBack.png'/>"
  $("#player1-number").html(numberImg);
  $("#player2-number").html(numberImg);
  
  var audio = new Audio("resources/card.mp3");
  //creates a variable that holds the sound of a card
  audio.play();
  //plays the sound
  window.setTimeout(function() {
    //delays the next thing from happening for 1000ms
    audio.play();
    //plays audio
  }, 1000);
  //determines how long to wait
  window.setTimeout(function() {
    //same thing again
    audio.play();
  }, 2000);
  window.setTimeout(function( ){
    console.log("calling assign")
    /*if (player1.length === 0) {
      $("#winner").html("The winner is Player Two");
    }
    if (player2.length === 0) {
      $("#winner").html("The winner is Player One");
    }*/
    assign();
  }, 2750)
}
//ends function war


$('#draw').on('click', function() {
  assign();
});

  
$("#mathOptions").on('click', function() {
  $(".hidden").css("display", "none");
  $("#options").css("display", "flex");
});
//compare
$("#compare").on('click', function(){
  $("#options").css("display", "none");
  $("#integer").css("display", "flex");
  $("#compareDirections").css("display", "block");
  $("#winner1").css("display", "block");
  $("#winner2").css("display", "block");
});

//arithmetic
{
$("#arithmetic").on('click', function(){
  $("#math").css("display", "flex");
  $("#options").css("display", "none");
});
  //math buttons
  {
    $("#add").on('click', function(){
      $("#math").css("display", "none");
      $("#addDirections").css("display", "block");
      $("#integer").css("display", "block");
    });
    $("#subtract").on('click', function(){
      $("#math").css("display", "none");
      $("#subtractDirections").css("display", "block");
      $("#integer").css("display", "block");
    });
    $("#multiply").on('click', function(){
      $("#math").css("display", "none");
      $("#multiplyDirections").css("display", "block");
      $("#integer").css("display", "block");
    });

    $("#divide").on('click', function(){
      $("#math").css("display", "none");
      $("#divideDirections").css("display", "block");
      $("#integer").css("display", "block");
    });
  }
}//ends arithmetic

//yes and no
{
$("#yes").on('click', function(){
  $("#integer").css("display", "none");
  $("#integerDirections").css("display", "block");
});
$("#no").on('click', function(){
  $("#integer").css("display", "none");
});
}//ends yes and no

//reset
$("#reset").on('click', function(){
  cards = [];
  player1 = [];
  player2 = [];
  playedCards = [];
  
  console.log("reset");
  
  for (var a=1; a<14 /*normally is 14*/; a++) {
  for (var b=1; b<5; b++) {
    var c = [a, b];
    cards.push(c);
  }
}
//creates the cards

cards.shuffle = function() {
  console.log('shuffling the cards')
  
  var input = this;
  for (var i = cards.length-1; i>=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = cards[randomIndex][0];
    var itemAtSecond = cards[randomIndex][1];
    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond;
  }
  return input;

}
//function for shuffling the cards

cards.shuffle();
//calls shuffle

var half = cards.length/2;
for (var i=0; i<half; i++) {
  player1.push(cards[i]);
}
//deals cards player1
cards.splice(0, half);
//removes cards dealt to player1
player2 = cards;
//deals cards to player2
$('#player1-count').html(player1.length);
$('#player2-count').html(player2.length);
//writes down how many cards each player has

});