(() => {
  function sumAll( message: string, ...arr: number[] ): number {
    console.log(message);
    return arr.reduce( (prev: number, next: number) => prev + next );
  }

  const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  console.log(sum);
  
})();