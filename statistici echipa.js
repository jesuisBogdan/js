const team = {
  _players: [
    {
 firstName: 'Hagi', lastName: 'Giga', age: 25
   },
   {
firstName: 'Maradona', lastName: 'Diego', age: 27
   },
   {
 firstName: 'Messi', lastName: 'Lionel', age: 21
   }
  ],
  _games: [
    {
      oppponent: 'Ronaldo', teamPoints: 53, opponentPoints: 33
    },
    {
      oppponent: 'DiMaria', teamPoints: 33, opponentPoints: 39
    },
    {
      oppponent: 'Sanchez', teamPoints: 49, opponentPoints: 42
    }
  ],
 get players(){
   return this._players;
 },
 get games() {
   return this._games;
 },
 addPlayer(firstName, lastName, age){
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this.players.push(player);
 },
 addGame(oppN, teamP, oppP) {
   const game = {
   opponentName: oppN,
   teamPoints: teamP,
   opponentPoints: oppP
}
this.games.push(game);
 }
}
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team.players)

team.addGame('Chelsea', 90, 52)
team.addGame('Rapid', 90, 32)
team.addGame('Dinamo', 90, 12)

console.log(team.games)