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

//   with return
const allBrands = products.map(product => product.productBrand);

// console.log(allBrands);

// without return
products.forEach(product => console.log(product.productColor));

// filter
const price = products.filter(product => product.price <= 500);

// console.log('price 50:' , price);

const specificName = products.filter(product => product.productName.includes('n'));

// console.log(specificName);

const specificNameOne = products.find(product => product.productName.includes('n'));

console.log(specificNameOne);