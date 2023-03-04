//programming language 
//podcast browser wars browser wars
//Javascript Variable and Data types
//getify
//How to declare and assign a variable

const newVariable = 'hello world';
console.log(newVariable);

let age = 0;
age = age + 1;
console.log(age);
age++;

//yourAge = camelcase
// YourAge =pascalcase
// your_first_variable = snakecase

const number /*declare*/ = 2 + 2; /*assign*/
console.log(number)

const secondArray = [10, 'a string', { prop: 'notation' },
    [1, 2]
];
console.log(secondArray.length);
console.log(secondArray[3])
console.log(secondArray)
secondArray.pop
console.log(secondArray)
secondArray.unshift
console.log(secondArray)

//object
const objectVariable = {
    prop1: 20,
    nike: 'New york city'
}
console.log(objectVariable);
objectVariable.prop1
console.log(objectVariable);

const nestdObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue: 20
            }
        }
    }
}
nestdObject.layer1.layer2.layer3.targetValue;
console.log(nestdObject);
objectVariable['prop1'];
console.log(objectVariable);
//let is to reassign the value of the variabe
//five types of variables; 'strings',number;20, booleans(true or false), Arrays[20, 'string'], object{student: };

//Chanllenge 1
let myBoolean = true;
console.log(myBoolean);
let number1 = 40;
let number2 = 80;
console.log(number2);
number2 = 100;
console.log(number2);


const myObject = {
    myArray: 'firstProperty',
    sumofnumber: 20 + 40,
}
console.log(myObject.sumofnumber);

//Java Operators
//variable =const,let,var

const myBag = {
    nestObject1: {
        price: 100,
        quantity: 5
    },
    nestObject2: {
        price: 150,
        quantity: 2
    }
};
const myArray = [myBag.nestObject1, myBag.nestObject2];
const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);
console.log(result);


const myObj = {
    prop1: 'first value',
    prop2: 20
}
const myArrays = [40, 50, 2];
myObj.prop2
console.log(myObj);
console.log(myArrays[1]);
const results = myObj.prop2 === (myArrays[0] / myArrays[2]);
console.log(results);

//Function, Condition, loops
let bunmiAge = 21 ? console.log('eligible to vote') :
    console.log('not eligible to vote');
console.log(bunmiAge);

let theCostOfRice = 35000;
if (theCostOfRice === 35000) {
    console.log("Paid!!. Kindly help her with the bag of rice")
} else if (theCostOfRice < 35000) {
    console.log('You have Overpaid');
} else {
    console.log('Kindly pay the balance')
};
//switch
let studentOnFirstClass = 'Buzs';
switch (studentOnFirstClass) {
    case 'Tosin':
        console.log('Congratulations!! you graducated with distinctions');
        break;
    case 'Busolami':
        console.log('Congratulations!!!, Secound Class Upper with distinctions (4.1)')
        break;
    default:
        console.log('You all did amazingly weell')
        break;
}
//loops(loop over a set of resource; bunch of pieceof data that is stuff in a data base)
const a = [20, 40, 60];
console.log(a[0]);


//object

const courseCodes = [{
        courseCode: 'CHM315',
        grade: 'A',
        score: 72
    },
    { courseCode: 'CHM335', grade: 'A', score: 70 },
    { courseCode: 'CHM305', grade: 'A', score: 85 },
    { courseCode: 'CHM351', grade: 'B', score: 68 },
    { courseCode: 'CHM325', grade: 'A', score: 75 },
    { courseCode: 'CHM307', grade: 'C', score: 58 },
    { courseCode: 'CHM327', grade: 'A', score: 89 },
    { courseCode: 'CHM317', grade: 'A', score: 72 }

];
for (let index = 0; index < courseCodes.length; index++) {
    const postCourseCode = courseCodes[index].courseCode; //properties
    const postGrade = courseCodes[index].grade;
    const postScore = courseCodes[index].score;
    // }
    //here we would use these variable to do something with each post 
    //I'll just print the values
    console.log(postCourseCode);
    console.log(postGrade);
    console.log(postScore);
}
for (let index = 0; index <= 100; index++) {
    console.log(index);
}

const arr = ['lkjshgdfg', 'gdshjkdjhfgdh', 'gfgggggggdhjkj', 'dfsgjhkldyutui', 20, 20, 40, 50];
for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === 'number') {
        console.log(arr[index]);
    }
}

//function
//the belowed function has been declared
function myFunction() {
    console.log('Hello world this is my first Function!!');
}
//Call, invoke or excute
myFunction();

//immediately invoke function
(function immediatelyInvokeFunction() {
    console.log('hello')
})();

//basic functions
//the concept of parameter and argument
//parameter is basically saying hey computer I'm going to pass in some sort of values in this function so be readdy for the
function theFunction(param1, param2) {
    console.log(param1);
    console.log(param2);
}
//declare// we don't know what param1 and param2 because we haven't assigned them callled the argument
theFunction();
//this will excute undefined because there's no value to pass through it
theFunction(20, 'Busolami');
//N.B the value we pass in is called an argument while the variable will declaring is called the parameter

//Brief introduction to scope
//otherway to create a function
function basicFunction() {
    console.log('I Love Jesus');

}

//create a variable
//anomymous function is because we are assigning it to a variable
const advancedFunction = function() {
    console.log('another thing');
}

advancedFunction();

// the arrow function, used in call back
const arrowFunction = ( /*parametr goes intto it */ ) => {
    console.log('I am an arrow function');
}

// arrowFunction();

//return value in functions
const myResult = arrowFunction();

const returnFunction = () => {
    const a = 20;
    return a;
}
const myresults = returnFunction();
console.log(myresults);

const improperReturnFunction = () => {
    let myNum = 20;
    return myNum;
}
improperReturnFunction();
//globalVariabel


const myNumber = 20;
let myFunctions = () => {
    if (myNumber < 15) {
        return 'returned the function early'
    }
    return 40;
}

myFunctions()

//object and functions together
function themFunction() {
    return 20;
}
themFunction()

// const aliasVariable = themFunction;
// undefined
// aliasVariable

// function themFunction()

// aliasVariable()

// const myObjects = {
//     prop1: 50,
//     prop2: myFunction
// }
// console.log(myObjects.prop2());

const myStrings = 'zach';
console.log(myStrings.replace('h', 'k'));
const newName = myStrings.replace('h', 'K');
console.log(newName);
console.log(newName.toUpperCase().split());
const greetStudent = 'Hello class';
console.log(greetStudent.toUpperCase().split(" "));
const greets = greetStudent.indexOf('CLASS')
console.log(greets);

//25 beginner pratice problem
//Pratice problem 1

function multiply(a, b) {
    return a * b
}

//pratice 2 Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str1, str2) {

    const strs = str1.split("");
    const reversed = strs.reverse();
    const finalAnswer = reversed.join("");
    return finalAnswer;

    const strt = str2.split("");
    const reverse = strt.reverse();
    const finalAnswers = reverse.join("");
    return finalAnswers;
};





// function solution(str){
//   const array = str.split("");
//   const reversed = arr.reverse();
// const FinalAnswer = reversed.join("");

//   return finalAnswer;
//   }

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number1) {
    if (number1 % 2 === 0) {
        return 'Even';
    } else {
        return '0dd';
    }
};

// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
//   }

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//Can you help her?

function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

class SmallestIntegerFinder {
    findSmallestInt(arrayOfNumbers) {

        let smallestNumber;

        for (let i = 0; i < arrayOfNumbers.lenght; i++) {

            const individualNumber = arrayOfNumbers[i];

            if (i === 0) {
                smallestNumber = individualNumber;
            }

            if (individualNumber < smallestNumber) {
                smallestNumber = individualNumber;
            }
        }
        return smallestNumber;
    }
}

//callback Function
function myCallback(someNumber) {
    return someNumber * 2;

}

function mainFunction(randomNumber, shouldCall, callBack) {
    let result = randomNumber;
    if (shouldCall) {
        result = callBack(randomNumber);
    }
    return result;
}
mainFunction(20, true, myCallback);
3