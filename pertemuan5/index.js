//arrow function

// function greetings(){
//     console.log("hello world");
// }

// const greetings=()=>{
//     return "hello world";
// };
// let result=greetings();
// console.log(result);

// const greetings=(fullname)=>{
//     return `hello ${fullname}`;
// };
// let result=greetings(john.fullname);
// console.log(result);

// const greetings=(fullname)=>`hello ${fullname}`;

// let result=greetings(john.fullname);
// console.log(result);

// let numbers = [1, 2, 3, 4, 5];
// let result2 = numbers.map((value)=>value);
// console.log(result2);

//defaul parameter

const login = (username, password= "12345") => {
       `username = ${username}, password = ${password}`;
    }
console.log(login("ungke", "passwordsaya"));




const funcarray = (...params) =>{
    arr.forEach((value) => console.log(value));
};

funcarray(1, 2, 3, 4, 5, 6);

