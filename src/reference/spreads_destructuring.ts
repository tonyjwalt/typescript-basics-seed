(() => {
  const toppings = ['bacon', 'chili', 'pineapple'];
  const newToppings = ['pepperoni', 'mushrooms'];

  const allToppings = [...toppings, ...newToppings];
  console.log(allToppings);

  const pizza = {
    name: 'tony pizza',
    toppings: ['pepperoni', 'mushrooms'],
  };

  function order( {name: pizzaName, toppings: pizzaToppings}: {name:string, toppings:string[]} ) {
    return { pizzaName, pizzaToppings };
  }

  const myOrder = order(pizza);
  const { pizzaName } = order(pizza);

  logToppings(toppings);
  function logToppings( [first, second, third]: string[] ) {
    console.log('toppings array:', first, second, third);
  }
})();