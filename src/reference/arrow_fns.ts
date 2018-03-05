(() => {
const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map( pizza => pizza.name.toUpperCase() );

const pizza = {
  name: 'Blazing Inferno',
  getNameArrow: () => pizza.name,
  getNameCtx: function () {
    return this.name;
  },
};

console.log(mappedPizzas);
console.log('arrow', pizza.getNameArrow());
console.log('context', pizza.getNameCtx());

})();