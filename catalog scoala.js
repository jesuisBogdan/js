class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = 'primary', 'middle', 'high';
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === 'number'){
      this._numberOfStudents = newNumberofStudents
    } else {
      console.log('Invalid. Trebuie sa introduci un numar.')
    }
  }
quickFacts(){
  console.log(`${this.name} educa un numar de ${this.numberOfStudents} studenti la nivelul ${this.level}.`)
}
static pickSubstituteTeacher(substituteTeachers){
const random = Math.floor(Math.random() * (substituteTeachers.length - 1))
return substituteTeachers[random]
}
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }
  get sportTeams(){
    return this._sportsTeams
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith._sportsTeams)