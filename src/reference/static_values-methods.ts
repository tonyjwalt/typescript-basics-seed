(() => {
 const date = +new Date();
 console.log(date);

 const staticDate = Date.now();
 console.log(staticDate);

  class Coupon {
    type: string;

    constructor(type: string) {
      this.type = type;
    }

    isTrue(val: boolean): boolean {
      return !val;
    }
    
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
      return `PIZZA_RESTAURANT_${percentage}`;
    }
  }

  const test = new Coupon('abc');
  
  console.log(test.type);
  console.log(`non static functions are only accessed via an instance, ${test.isTrue(false)}`);
  console.log(Coupon.allowed);
  console.log(Coupon.create(25));
})();