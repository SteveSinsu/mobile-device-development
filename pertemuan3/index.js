// let john = ['john', 'doe', 35, true, [80, 90, 100]];
// console.log(john.length);
// john[2] = 40;

// console.log(john[john.length-1]);

// let array = [1, 2, 3, "halo", false, true];


// array.pop();
// console.log(array);

// array.push("selamat pagi");
// console.log(array);
// array.shift();

//object
// let john={
//     firstname:"john",
//     lastname: "doe",
//     age : 35,
//     grade :[90,69],
//     greetings :function(){
//         console.log("hello i am + ")
//     }
    
// };

// console.log(john.age);
// console.log(john["grade"]);

// john.job = ("teacher");

//array built-in method

// let numbers=[1, 2, 3, 4, 5];

// // for(let i =0; i<numbers.length; i++){
// //     console.log(numbers[i]);
// // }

// numbers.forEach(function(value,index) {
//     console.log(value+" index: "+ index);
// });

let student = [
    {
        fullname : 'john',
        age : 25,
        address : 'Manado'
    },
    {
        fullname : 'bob',
        age : 69,
        address : 'Minut'
    },
    {
        fullname : 'ungke',
        age : 22,
        address : 'minahasa'
    },
]

// student.forEach(function(value){
//     console.log(value.fullname);
// });

// let studentName = student.map(function(value){
//     return value.fullname;
// });

// console.log(studentname);

student.filter(function(value){
    return value.age>=25;
});

console.log(student);