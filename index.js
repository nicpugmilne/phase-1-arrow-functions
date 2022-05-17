// // Traditional Anonymous Function
// function (a){
//     return a + 100;
//   }
  
//   // Arrow Function Break Down
  
//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }
  
//   // 2. Remove the body braces and word "return" -- the return is implied.
//   (a) => a + 100;
  
//   // 3. Remove the argument parentheses
//   a => a + 100;
  
// for named functions we treat arrow expressions like variables: 
// // Arrow Function
// let bob = a => a + 100;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function divide(num){
    return num/100
};

let square = x => x*x;

let add = (a, b) => {
    return a+b;
}