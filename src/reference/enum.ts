(() => {
 
  enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
  }
  enum Sizes {
    ExtraLarge = 'xtraLarge'
  }

  let selectedSize: Sizes = Sizes.Small;

  function updateSizes(size: Sizes): void {
    selectedSize = size;
  }

  updateSizes(Sizes.ExtraLarge);  
  console.log(selectedSize);
})();