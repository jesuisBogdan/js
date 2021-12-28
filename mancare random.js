let userName = 'Anda';
userName  ? console.log(Buna, ${userName}!) : console.log('Hello!');
const userQuestion = 'Ce fac astazi de mancare?';
console.log(${userName} ne intreaba: ${userQuestion});
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber){
  case(1):
  eightBall = ('Ce ai zice de peste?');
  break;
  case(2):
  eightBall = ('Poate paste?');
  break;
  case(3):
  eightBall = ('Cous Cous suna bine');
  break;
  case(4) :
  eightBall = ('O friptura cu cartofi la cuptor');
  break;
  case(5) :
  eightBall = ('Cartofi prajiti, snitel si salata');
  break;
  case(6) :
  eightBall =  ('O ciorbita mica, uite asa!');
  break;
  case(7) :
  eightBall = ('lapte cu cereale');
  break;
  case(0) :
  eightBall = ('Hai sa fie cheatday si sa mancam niste clatite cu nutella');
  break;

}
console.log(Globul meu magic zice: ${eightBall});