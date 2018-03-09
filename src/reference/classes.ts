(() => {
 
  enum topping {
    Pepperoni = 'pepperoni',
    Mushroom = 'mushroom',
    Bellpepper = 'bell pepper'
  }

  type size = 'small' | 'medium' | 'large';

  interface iSizes{
    availableSizes: size[]
  }

  interface iPizza extends iSizes {
    toppings: topping[],
    addTopping(topping: topping): void,
    updateSizes(sizes: size[]): void
  }

  class Sizes implements iSizes{
    constructor(protected sizes: size[]) {}

    set availableSizes(sizes: size[]) {
      this.sizes = sizes;
    }

    get availableSizes(): size[] {
      console.log('fetching the sizes');
      return this.sizes;
    }
  }

  class Pizza extends Sizes implements iPizza{
    toppings: topping[] = [];

    constructor(private name:string, readonly sauce:string, sizes: size[]) {
      super(sizes);
    }

    updateSizes(sizes: size[]): void {
      this.sizes = sizes;
    }

    addTopping(topping: topping): void {
      if (this.toppings.indexOf(topping) === -1) {
        this.toppings.push(topping);
      }
    }
  }

  // playing with public, private, readonly
  const pizza = new Pizza('pepperoni', 'tomato', ['small', 'medium']);
  pizza.addTopping(topping.Pepperoni);
  console.log(`Pizza with ${pizza.sauce} sauce. Available in ${pizza.availableSizes}`);
  // playing with sizes
  const sizes = new Sizes(['small', 'medium']);
  console.log(sizes.availableSizes);
  sizes.availableSizes = ['medium', 'large'];
})();