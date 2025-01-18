
// console.log('Hello Word');

const { error } = require("console");
const { resolve } = require("path");

/// console.log ---> print output content
// javascript normal code editor ---> not run ()

// varibles ---> identity 

// let, --> local scope, NO hoisting, no redeclare, yes reassign possible
// const -->local scope, No hoisting, no redeclare, no reassign
// var --> global scope,  Hoisting, redeclare, reassign,


// hoisting --> use before define variables .

// var a=10;
// var a=89;
// a=54;
// console.log(a)
// let a=10;
// a=54;
// console.log(a)
// const a=10;
// a=54;
// console.log(a)

// b=20
// console.log(b)
// var b;
// let b;
// const b;

// Datatypes --> types of data, 

// (int, string, Boolean, long, null, double, float, ) --> java
// javascript --> 7 datatypes
// -- Nummber --- numbers [1, 4594539]
//  -- String --- collection of charecter
// -- Symbol --- store unique value
// -- undefined -- variable declear not assign assign value
// -- null --- variable is thier but not hold value, empty
// -- BigInt --- number is big
// -- Boolean  --- true of false




// Function --> block peace of code

// static int add(int Number, int Number1){

// }--- java

// function add(num, num1){
//     return num+num1;
// }
// const result = add('tec',6)

// arrow function ===> () =>{} --- function  ---//ES6 --(gives features)

// console.log(result)
// function print(){
//     console.log('Hello World')
// }
// function print1(){
//     console.log('Hello World')
// }
// function print2(){
//     console.log('Hello World')
// }
// // print();
// print1();

// function master(){

// }
// // () =>{} == arrofunction
// const master = () =>{

// }



// Array function -->

// array -> store similar type of datatype..--> java, c,
// int arr[]= int arr[34]; --> size of array
// let array = [4,"tecnobij", 8600683394, 'admin@gmail.com','true']
// console.log(array[2]);
// array.push(56);
// console.log(array)
// array.pop()
// console.log(array)
// console.log('array length is:',array.length)
// const arr2= ['master', 54, ...array]
// const arra1 = [...array, ...arr2]
// console.log(arra1)
// array.

// // array
//itrative--> 

// 1-- 100 print
// // print(1)
// // print(2)
//  loops - for, while loop, do while,
// //  for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// //  }
// for(let i=0; i<0; i++){
// console.log(i)
// }
// let m=0;
// while(m<0){
//     console.log('This is while loop output',m);
//     m++;
// }
// let i=0;
// do{
//     console.log('This is do while loop output:',i)
//     i++;
// }while(i<0)

// ==================================// for in , for of, for forEach --- object cover then we see


// local scope--var -global scope
// global scope-- let const -- local scope
// const a=0;

// console.log(a)
// function print(){
//     let a=90;
//     console.log(a)
//     if(a==0){
//         console.log(a)
//     }
// }
// print()
// console.log(a)


// continue, --- skip (respective iteration value)that iteration and start to work from start
// break;
// let i=0;
// while(i<10){
//     if(i==4){
//         console.log('continue happen')
//         // break;
//         i++;
//         continue;
//     }
//     else{
//         console.log('Number:', i)
//     }
//     i++;
// }
// console.log('Outside')


// String--- collection character;

// const master = new String();
// const a= '    maharashtra_india'
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a.trim());
// console.log(a.split('_'))
// const password = 12345;
// 12&20%@3djflg --- 
// function setpassword(password){
//  return password+ '#g%^#&'
// }
// console.log(setpassword(12345));

// Define the prototype method
// String.prototype.setpassword = function (pass) {
//     return pass + '#g%^#&';
// };

// // Usage
// const userpass = '12345'; // Ensure it's a string to use String methods
// const master = 'hello'; // Optional usage example
// console.log(userpass.setpassword(pass)); // Invoke the method on a string



// Object ---> Collection key key-pair value;


// 'key': 'value'; {}[] -->
// const object1 = {} --- empty object
// console.log(typeof object1)
const object1 = {
    name : "tecnobij",
    course : "MERN Stack",
    Batch : "A",
    isStarted : true,
    add : function(num, num1){
        return num+num1
    },
    array : [5,6,8,9]
} 
// console.log(object1.isStarted)
// console.log(object1.add(5,6))
// console.log(object1.array[5])
// console.log(typeof object1)
// console.log(typeof object1.toString())
// const array1= [5,6,8,9]


// const convertedobject=Object.assign({}, array1)
// console.log(convertedobject)
// for(const [item,key] of array1){
//     console.log(array1[key])
// }


// array1.forEach((value, key) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// });



// {
//     0 : '5',
//     1: '6'
// }



// map filter reduce for in foreach -- itrative

// class -- collection of object, OPPs-

// Inheritance, -->
// poly  ---> one form many entity --> human bieng, child, student, working professtion, adult, citize, old, dead,
// Abstract --> show essential data.
// Encapulation --> wrapping data and method in single unit

class tec{
    constructor(name,surname,batch){
        this.name= name;
        this.surname = surname;
        this.batch= batch
    }
    print() {
        console.log(`name is ${this.name} ${this.surname} and his batch is ${this.batch}`)
    
    }
    geratepassowd(){
        const name= `${this.name}`;
        return  name+ '9$%7';
    }
}
class bij extends tec{
    constructor(){
        super(this.name, this.surname,this.batch)
    }
    print(){
        console.log(this.print());
    }
}


// const student1 = new tec('master','mind','A');
// const student2= new tec();
// student1.print();
// console.log(student1.geratepassowd())
// const student2 = new tec();





// ===== ===> tommorrow
// promises --->
// sync -- and async --

// then catch--
// async await --Es6
// resolve --> then
//     reject --> catch

//  new Promise((resolve, reject) =>{
//     const data= 'Fetched';
//     return reject();
// }).then((data) =>{
//     console.log('data is :',data)
// }).catch((e) =>{
//     console.log('error:',e);
// })
// post, get, delete, update, fetch --Api


// fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((response) =>{
// return response.json();
// }).then((res)=>{
//  console.log(res)
// }).catch((e) =>{
//    console.log('error:',e)
// })

async function fetchdata(){
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json();
    console.log(typeof data)
    console.log(data)
  }
  catch(e){
    console.log('error',e)
  }
}
fetchdata()

// function print(){
//     console.log('hello word')
// }

// print();
// console.log('this async function')










// prototype --->
// clusore ---> 
// DOM  --->  basically totally frontend
// Event --->

// int a=10;
// let a=45;