let raceNumber = Math.floor(Math.random() * 1000);
let RegisteredEarly = false;
let runnerAge = 18;
if(runnerAge > 18 && RegisteredEarly) {
  Number(raceNumber)+1000;
}
if(runnerAge > 18 && RegisteredEarly){
  console.log(`The race will start at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !RegisteredEarly ){
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
} 
if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`)
} if (runnerAge === 18) {
  console.log("Please check registration desk!");
}