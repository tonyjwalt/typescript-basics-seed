(() => {
 
  // Generics
  let strArr: string[];
  let strArr1: Array<string>;

  // Tuple Type
  let pizzaTuple: [string, number, string, boolean];
  pizzaTuple = ['Pepperoni', 20, '', true];

  // Casting
  type Pizza = {name: string, toppingCount:number};
  
  let pizza: Pizza = {name: 'peppers and mushrooms', toppingCount:2};
  let serialized: string = JSON.stringify(pizza);

  function getNameFromPizzaStr(pizaObj: string): string {
    return (JSON.parse(pizaObj) as Pizza).name;
  }

  console.log(`pizza name is ${getNameFromPizzaStr(serialized)}.`);
})();