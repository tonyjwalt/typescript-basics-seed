const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map( pizza => pizza.name.toUpperCase() );

const arrowFn_pizza = {
  name: 'Blazing Inferno',
  getNameArrow: () => pizza.name,
  getNameCtx: function () {
    return this.name;
  },
};

console.log(mappedPizzas);
console.log('arrow', arrowFn_pizza.getNameArrow());
console.log('context', arrowFn_pizza.getNameCtx());