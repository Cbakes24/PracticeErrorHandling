// // 1.
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// let res = sum(null);

// try{
// console.log(res);
// } catch (error) {
//   console.error(`${error.name}: this is a type error`)
// }



// 2.
// tests
// const sayName = name => {
//  if(typeof name !== 'string'){
//   throw new Error("Invalid name! Must be a string!");
//  } else {
//    console.log(name)
//  }
// }

// try{
// sayName("Alex");
// sayName(1);
// } catch(error) {
//   console.error(error.name + ": " + error.message);
// }


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
