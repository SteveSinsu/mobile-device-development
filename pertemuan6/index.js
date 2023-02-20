// // //spread opeator

// // // let numbers = [1, 2, 3, 4, 5];
// // // console.log(numbers);
// // // console.log(...numbers);

// // // //kegunaan spread : 1. duplikasi array

// // // let numbers2 = [...numbers];
// // // numbers.push(6);
// // // console.log(numbers2);

// // //2. menggabungkan array

// // let numbers1 = [1, 2, 3];
// // let numbers2 = [5, 6, 7];
// // let numbers3 = [8, ,9, 10];

// // let combineNumbers5 = numbers1.concat(numbers2, numbers3);
// // let combineNumbers6 = [...numbers1, ...numbers2, ...numbers3]
// // console.log(combineNumbers5);
// // console.log(combineNumbers6);

// // let john = {
// //     fullname : "john doe",
// //     age : 35,
// //     address : "manado",
// // };

// // john = {..john, job: "teacher"};
// // console.log(john);

// //destructuring
// let numbers = [1, 2, 3, 4, 5];

// let [a, b, c, d ,e] = numbers;
// console.log(a);

let john = {
        fullname : "john doe",
         age : 35,
         address : "manado",
};

let {fullname, age, address }= john;
console.log(fullname);
