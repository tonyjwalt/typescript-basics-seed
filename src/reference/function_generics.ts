(() => {
  
  class Pizza {
    constructor(private name: string, private price: number) {}
  }

  class List<T> {
    private list: T[] = [];

    addItem(item: T): void {
      this.list.push(item);
    }

    getList(): T[] {
      return this.list;
    }
  }

  const pizzaList = new List<Pizza>();
  
  pizzaList.addItem(new Pizza('pepperoni', 15));
  const pizzas = pizzaList.getList();

  class Coupon {
    constructor(private name: string){}
  }

  const couponList = new List<Coupon>();
  couponList.addItem(new Coupon('ABC25'));
  const coupons = couponList.getList();

})();