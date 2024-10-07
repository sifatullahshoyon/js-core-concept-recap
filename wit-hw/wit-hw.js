///////////////////////////////////// HW //////////////////////////////////

// 1. সারার কাছে ২৫টি আপেল আছে এবং সে দোকান থেকে আরও ১৫টি আপেল কিনেছে। সারার মোট কতটি আপেল আছে?

let apple = 25;
let bringNewApple = 15;
const totalApple = apple + bringNewApple;
// console.log(totalApple , '40');

// 2. জনের কাছে ৫০০টাকা ছিল। সে মুদির দোকানে ২০০টাকা খরচ করেছে। এখন জনের কাছে কত টাকা বাকি আছে

let jonMoney = 500;
let groceryCost = 200;
const outCost = jonMoney - groceryCost;

// console.log(outCost , '300');

// 3. একটি কারখানা প্রতি ঘন্টায় ১২০টি মেশিন তৈরি করে। ৮ ঘণ্টায় কারখানাটি মোট কতটি মেশিন তৈরি করবে?

let machine = 120;
let newMachine = 120 * 8;

// console.log(newMachine , '960');


/**
 * 4. একটি বাগানে প্রতিটি সারিতে ১২টি গাছ আছে এবং মোট ৮টি সারি আছে। বাগান মালিক আরও ২০টি গাছ। লাগানোর পরিকল্পনা করছেন। সব মিলিয়ে বাগানে কতটি গাছ থাকবে?
 * */ 

let tree = 12;
let totalRow = 8;
const totalTree = tree * totalRow;
let newTree = 20;
let totalNewTree = totalTree + newTree;

// console.log(totalNewTree , '116');

/**
 * 5. রহিমের কাছে ৫টি বাক্স আছে, প্রতিটি বাক্সে ১০টি করে কমলা আছে। সে তার বন্ধুকে ১২টি কমলা দিয়েছে। রহিমের কাছে এখন কতটি কমলা আছে?
 * */ 

let box = 5;
let orangeInBox = 10;
const totalOrangeInBox = box * orangeInBox;
let provideOrange = 12;
const totalOrange = totalOrangeInBox - provideOrange;

// console.log(totalOrange , '38');


// 6. একটি ট্রেন ১৫০ কিলোমিটার পথ অতিক্রম করতে ৩ ঘণ্টা সময় নেয়। প্রতি ঘণ্টায় ট্রেন কত কিলোমিটার পথ অতিক্রম করে?

let train = 150;
let hour = 3;
const totalHour = train / hour;

// console.log(totalHour , '50 k.M');

// 7. একটি ফ্যাক্টরি ৬টি মেশিন ব্যবহার করে প্রতিদিন ২০০টি পণ্য তৈরি করে। আরও ২টি মেশিন যোগ করলে মোট উৎপাদন কত হবে, এবং যদি ৩টি পণ্য বিক্রি না হয়, অবশিষ্ট পণ্য কয়টি?

let factoryMachine = 6;
let production = 200;
let totalProduct = production / factoryMachine;
// console.log(totalProduct);
let addedTwoMachine = ( totalProduct * 8).toFixed(2);
// console.log(addedTwoMachine);
let unSoldProduct = 3;
const newTotalProduct = parseInt(addedTwoMachine - unSoldProduct);
// console.log(newTotalProduct , '263');


// ৪. একটি দোকানদার ১২০টি চকলেট কিনে প্রতিটি প্যাকেটে ৯টি করে রাখে। সব প্যাকেট পূর্ণ করার পর দোকানদারের কাছে কতটি চকলেট অবশিষ্ট থাকবে?

let chocolate = 120;
let packet = 9;
const totalChocolate = Math.floor(120 / 9);
const unsoleChocolate = chocolate - (totalChocolate * packet);

// console.log(unsoleChocolate , '3');

