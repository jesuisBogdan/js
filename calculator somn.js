const getSleepHours = day => {
  switch(day){
    case 'Luni' :
      return 8;
    case 'Marti':
      return 8;
    case 'Miercuri':
      return 7;
    case 'Joi':
      return 8;
    case 'Vineri':
      return 7;
    case 'Sambata':
      return 8;
    case 'Duminica':
      return 7;
  }
}
//day a luat ore de somn pt fiecare zi apoi am printat rezultatul
console.log(getSleepHours('Sambata'))
//am declarat o variabila care a adunat orele de somn pt fiecare zi
const getActualSleepHours = () => 
  8 + 8 + 7 + 8 + 7 + 8 + 7 ;


const getIdealSleepHours = () => {
  const idealHours = 8;
    return idealHours * 7;
};
console.log(getActualSleepHours())
console.log(getIdealSleepHours())


const CalculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === getSleepHours){
      console.log('You got '+ (idealSleepHours - actualSleepHours)+ ' hour(s) left to sleep. Well, thats perfect, you re sleeping great!')
  }
 else if (actualSleepHours > getSleepHours){
      console.log('You got '+ (idealSleepHours - actualSleepHours)+ ' hour(s) more sleep than you needed this week. Go to work lazy fuck.');
  }
  else{
      console.log('You got '+ (idealSleepHours - actualSleepHours)+ ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}
CalculateSleepDebt();

