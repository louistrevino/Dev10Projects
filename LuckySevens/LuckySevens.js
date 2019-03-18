function play(){

  var gameMoney = 0.0;
  var dice1;
  var dice2;
  var rollCount = 0;
  var maxMoney = 0.0;
  var rollHighestWon = 0;

  //get starting Bet
  var startingBet = document.forms["betForm"]["startingBet"].value;

  //make sure starting bet is > 0 — display an error if not then start over
  if(startingBet <= 0.0){
    alert("Please enter a value greater than $0.00.");
  } else {
    //set game money = starting bet
    gameMoney = startingBet;
    //check that there's money to play with
    while(gameMoney > 0.0){
      rollCount++;
      //roll dice
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;

      //results of roll
      if(dice1 + dice2 == 7){
        gameMoney += 4;
      } else {
        gameMoney -= 1;
      }
      console.log(gameMoney);
    }

    document.getElementById("results").style.display = "block";
  }



}
