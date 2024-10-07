

// Map Loop

const products = [
    {
      _id: "1",
      productName: "Smartphone",
      productBrand: "TechBrand",
      price: 699,
      productColor: "Black"
    },
    {
      _id: "2",
      productName: "Laptop",
      productBrand: "ComputeX",
      price: 1299,
      productColor: "Silver"
    },
    {
      _id: "3",
      productName: "Headphones",
      productBrand: "SoundWave",
      price: 199,
      productColor: "Blue"
    },
    {
      _id: "4",
      productName: "Smartwatch",
      productBrand: "WristTech",
      price: 299,
      productColor: "Red"
    },
    {
      _id: "5",
      productName: "Tablet",
      productBrand: "TabMaster",
      price: 499,
      productColor: "Gold"
    }
  ];

const allBrands = products.map(product => console.log(product.productBrand));

// Output: ('TechBrand' , 'ComputeX' , 'SoundWave' ,'WristTech' ,'TabMaster')

































// For In Loop


let fruitBasket = {
    basket1: { apple: 5, banana: 10, cherry: 12 },
    basket2: { apple: 10, orange: 8, mango: 15 }
  };
  

  for (const basket in fruitBasket) {
    // console.log( fruitBasket[basket])
  };

// Output : { apple: 5, banana: 10, cherry: 12 } 
//          { apple: 10, orange: 8, mango: 15 }


// For Of Loop


let arrayLike = {
    0: 'apple',
    1: 'banana',
    2: 'cherry',
    length: 3
  };
  
  // Converting array-like object to an iterable array
  let iterableArray = Array.from(arrayLike);
  
  // Using a for...of loop to iterate over the iterable array
  for (const item of iterableArray) {
    // console.log(item);
};

// Output : ('apple', 'banana', 'cherry').
