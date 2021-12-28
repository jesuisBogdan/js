const menu = {
  _courses: {
    appetizers:[],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this.appetizers;
  },
   get mains() {
    return this.mains;
  },
   get desserts() {
     return this.desserts;
   
  },
  set appetizers(appetizers) {
    return this._courses.appetizers = appetizers;
  },
  
  set mains(mains) {
    return this._courses.mains = mains;
  },
  
  set desserts(desserts) {
    return this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice,
    };

  return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
  
    const random = Math.floor(Math.random() * dishes.length)
    return dishes[random];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price;
      return `Pentru astazi iti recomand ${appetizer.name} ca aperitiv, ${main.name} ca fel principal iar ca desert, neaparat ${dessert.name}. Pretul total pentru aceste produse este: ${totalPrice} lei.
      Tips not included !`
  }
};

menu.addDishToCourse('appetizers', 'carnaciori', 18.00 );
menu.addDishToCourse('appetizers', 'icre', 23.00 );
menu.addDishToCourse('appetizers', 'salata', 129.00 );

menu.addDishToCourse('mains', 'Ciolan cu fasole', 118.00 );
menu.addDishToCourse('mains', 'piept de rata', 238.00 );
menu.addDishToCourse('mains', 'legume flambate', 68.00 );

menu.addDishToCourse('desserts', 'ecler', 93.00 );
menu.addDishToCourse('desserts', 'mousse', 61.00 );
menu.addDishToCourse('desserts', 'savarina', 34.00 );
let meal = menu.generateRandomMeal()
console.log(meal);