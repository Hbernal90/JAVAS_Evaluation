function getChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function for winner
function getWinner(Jugador1, jugador2) {
    if (Jugador1 === jugador2) return null; // tie
    if ((Jugador1 === 'rock' && jugador2 === 'scissors') ||
        (Jugador1 === 'scissors' && jugador2 === 'paper') ||
        (Jugador1 === 'paper' && jugador2 === 'rock')) {
        return true; // player1 wins
    }
    return false; // player2 wins
}
// Function playing
function Tournament(numberOfPlayers) {
  if (numberOfPlayers < 2 || numberOfPlayers > 8) {
    console.log('Invalid number of players.');
    return;
  }

  let players = Array.from({ length: numberOfPlayers }, (_, i) => `Jugador ${i + 1}`);
  
  while(players.length > 1){
    let roundWinners = [];
    for(let i=0; i<players.length; i+=2){
      const choice1 = getChoice();
      const choice2 = getChoice();
      const winner = getWinner(choice1, choice2);
      
      console.log(`${players[i]} chooses ${choice1}, ${players[i+1]} chooses ${choice2}`);
      
      if(winner===null){
        console.log('It\'s a tie!');
        continue;
      }
      
      if(winner){
        console.log(`${players[i]} wins!`);
        roundWinners.push(players[i]);
      } else{
        console.log(`${players[i+1]} wins!`);
        roundWinners.push(players[i+1]);
      }
    }
    players = roundWinners;
  }
  
  console.log(`The winner of the tournament is ${players[0]}`);
}

// Start the game
Tournament(8);