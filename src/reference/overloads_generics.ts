(() => {

  function reverse(str: string): string;
  function reverse<T>(arr: T[]): T[];
  function reverse<T>(something: string | T[]): string | T[] {
    let somethingReversed: string | T[];
    if (typeof something === 'string') {
      somethingReversed = something.split('').reverse().join('');
    } else {
      somethingReversed = [...something].reverse();
    }
    return somethingReversed;
  }

  console.log(reverse('Pepperoni'));

  const arr = ['bacon', 'pepperoni', 'chili', 'mushrooms'];
  console.log(`array: ${arr}, reversed: ${reverse(arr)}, array again: ${arr}`);
})();