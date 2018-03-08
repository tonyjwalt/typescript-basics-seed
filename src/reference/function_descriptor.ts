(() => {
 
  let sumOrder: (price:number, quantity:number) => number;

  sumOrder = (x, y) => x * y;

  console.log(`multiplying some numbers ${sumOrder(2,4)}`);

})();