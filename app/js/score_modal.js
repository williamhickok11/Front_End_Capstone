$(document).ready(function(){
  // Get the height and width of the page
  var window_width = $(window).width();
  var window_height = $(window).height();

  // .each used for multiple modals if necessary
  $('.modal_window').each(function(){
    // Get the height and width of the modal
    var modal_height = $(this).outerHeight();
    var modal_width = $(this).outerWidth();
    // Calculate top and left offset needed for centering
    var top = 50;
    var left = (window_width-modal_width)/3;
    // Apply new top and left css values
    $(this).css({'top' : top , 'left' : left});
  });

  $('.close_modal').click(function(){
    // Use the function to close it
    close_modal();
  });
});

// THE FUNCTIONS
function close_modal(){
  // Hide the mask
  $('#mask').fadeOut(500);
  // Hide modal window(s)
  $('.modal_window').fadeOut(500);
  location.reload();
}

function show_modal(htmlString){
  // Set display to block and opacity to 0 so we can use fadeTo

  $('#mask').css({ 'display' : 'block', opacity : 0});

  // Fade in the mask to opacity 0.8

  $('#mask').fadeTo(500,0.8);

  // Show the modal window

  $('#leader_board').fadeIn(500);

  // Fill in the html with the current leader board string built up in the ajax call
  $('#leader_board').html(htmlString);
}

// Function to post score to Firebase
function postScore(score, streak, song) {
  var highScoreId = `${song}highScore`
  var highStreakId = `${song}longestStreak`
  var streakToPost = streak;
  if (currentStreak > currentHighStreak) {
    streakToPost = currentStreak;
  };
  // Get access to current player info in firebase
  $.ajax({
    url: "https://phonx-rave.firebaseio.com/Players/.json",
    method: "GET"
  }).done(function(playerList) {
    console.log("playerList", playerList);
    // if (song === "slime") {
    // Get access to current player highScore
    console.log("currentPlayerUID", currentPlayerUID);
    // Loop through all players
    for (variable in playerList) {
      // Check for current player
      if (playerList[variable].playerId === currentPlayerUID) {
        // If score is greater than the stored data, replace the high score
        var userRef = new Firebase(`https://phonx-rave.firebaseio.com/Players/${variable}`);
        if (score > playerList[variable][highScoreId]) {
          // Modify the 'first' and 'last' children, but leave other data at userScoreRef unchanged
          userRef.update({ [highScoreId]: score});
        }
        // If longest streakToPost is greater than the stored data, replace the longest streak
        if (streakToPost > playerList[variable][highStreakId]) {
          // Modify the 'first' and 'last' children, but leave other data at userStreakRef unchanged
          userRef.update({ [highStreakId]: streakToPost});
        }
      }
    }
  }).then(()=>{
    $.ajax({
    url: "https://phonx-rave.firebaseio.com/Players/.json",
    method: "GET"
  }).done(function(playerList) {
      $("#game_container").html("");
      console.log("playerList", playerList);
      var highScoreId = `${song}highScore`
      var highStreakId = `${song}longestStreak`
      console.log("highStreakId", highStreakId);
      console.log("highScoreId", highScoreId);
      var playerScoreArray = [];
      var playerNameArray = [];
      var playerStreakArray = [];
      var playerLeaderBoard = [];
      var contentString = `<h1>Your Score:</h1><h2>${score}</h2>`;
      // Loop through, find the highest score, create a new array
      for (let player in playerList) {
        if (playerList[player][highScoreId] !== 0) {
          playerScoreArray.push(playerList[player][highScoreId]);
          playerLeaderBoard.push(
            {
              playerName : playerList[player].userName,
              playerHighScore : playerList[player][highScoreId],
              playerHighStreak : playerList[player][highStreakId]
            }
          );
        };
      }
      console.log("playerLeaderBoard", playerLeaderBoard);
      Array.prototype.sortOn = function(key){
          this.sort(function(a, b){
              if(a[key] < b[key]){
                  return -1;
              }else if(a[key] > b[key]){
                  return 1;
              }
              return 0;
          });
      }
      playerLeaderBoard.sortOn("playerHighScore");
      playerLeaderBoard.reverse();
      // playerLeaderBoard.sort( srt() );
      console.log("playerLeaderBoard sorted", playerLeaderBoard);
      for (var i = 0; i < playerLeaderBoard.length; i++) {
        contentString += `<h4>${i+1} ${playerLeaderBoard[i].playerName}: ${playerLeaderBoard[i].playerHighScore}</h4><h5>Longest Streak: ${playerLeaderBoard[i].playerHighStreak}</h5>`
      };
      // Post the leader_board
      $(".end_leader_board_info").html(contentString);
      $(".end_of_song_leaderboard").removeClass("hidden");
      // show_modal(contentString);
    })
  })
}

$(".replay").on("click", ()=> {
  close_modal();
  $(".choose_song").removeClass("hidden");
})




