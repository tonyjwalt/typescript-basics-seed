(() => {
 
  // setting up interface with function that is returning
  interface Sizes {
    sizes: string[]
  }

  interface Pizza extends Sizes {
    name: string,
    toppings: string[],
    sauce?: string,
    getAvailableSizes(name: string): string[]
    getToppings: getToppings,
    [key: number]: string
  };

  // defining function via type
  type getToppings = (name:string) => string[];

  interface Pizzas {
    data: Pizza[]
  }

  let pizza: Pizza;

  function createPizza(name: string, sizes: string[], toppings: string[]): Pizza {
    return {
      name,
      sizes,
      toppings,
      getAvailableSizes: function () {return this.sizes;},
      getToppings() {return this.toppings},
    };
  }

  pizza = createPizza('pepperoni', ['small', 'medium', 'large'], ['pepperoni']);
  pizza.sauce = 'tomato';
  pizza[1] = 'xyz';
})();