function sum () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function otherSum (...args) {
  return args.reduce((acc, el) => acc + el);
}

function dopeSum () {
  return Array.from(arguments).reduce((acc, el) => acc + el);
}

// console.log(dopeSum(1, 2, 3, 4));

// console.log(otherSum(1, 2, 3, 4) === 10)
// console.log(otherSum(1, 2, 3, 4, 5) === 15)

// Function.prototype.myBind = function (context, ...bindArgs) {
//   let that = this;
//   return function (...callArgs) {
//     return that.apply(context, bindArgs.concat(callArgs))
//   }
// }

Function.prototype.myBind = function (context, ...bindArgs) {
  // return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
  return (...callArgs) => this.call(context, ...bindArgs, ...callArgs);
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

const sum1 = curriedSum(4);
sum1(5)(30)(20)(1); // => 56


function curriedSum(numArgs) {
  let nums = [];

  return function _curriedSum(num) {
    nums.push(num);
    if(nums.length === numArgs) {
      return nums.reduce((acc, el) => acc + el);
    }else{
      return _curriedSum;
    }
  }
}


Function.prototype.stephCurry = function(numArgs) {
  let args = [];
  const _stephCurry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      // return that.apply(that, args);
      return this(...args);
    } else {
      return _stephCurry;
    }
  }
  return _stephCurry;
}

// you'll write `Function#stephCurry`!
let f1 = sumThree.stephCurry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// let f3 = sumThree.stephCurry(4);
f1 = f1(4); // [Function]
const f2 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);
// or more briefly:
sumThree.stephCurry(3)(4)(20)(6); // == 30
// console.log(sumThree.stephCurry(3)(4)(20)(6))
