var num = Math.round(Math.random() * 10 + 1);
var user = "";
while (user != num){
  user = prompt("Guess a number between 1 and 10:");
  if ( user > num)
    alert("Too high.");
  else if ( user < num)
    alert("Too low.");
  else {
    alert("Correct! you win.");
  }
}
}
