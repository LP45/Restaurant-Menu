
let menuItem = {
    name: 'Kale Caesar Salad',
    Year: 2019, 
    referenceID: 'SLD001',
    TimesAvailiable:['Lunch','Dinner'],
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    NumberofCalories: 560,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
      return this.ingredients.length;
    }
  }
  console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
  if (key != 'numIngredients')
    console.log(`${key}: ${value}`)
  });
console.log(`Number of ingredients = ${menuItem.numIngredients()}`);