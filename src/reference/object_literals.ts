(() => {
  
  const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
      return this.name;
    },
  };

  const toppings = ['pepperoni'];

  function createOrder(pizza: {name:string, price:number}, toppings: string[]) {
    return {pizza, toppings};
  }

  console.log(pizza.getName());
  console.log(createOrder(pizza, toppings));

})()