
// function createMultiplier(multiplier) {
//     return function (multiplier) {
//         return multiplier * multiplier;
//     };
// }
// const double = createMultiplier(2)
// console.log(double(4))
// // console.log(createMultiplier(5).bind(5))
// function print(name){
//     console.log('hello world'+name)
// }
// function master(name, print){
//     console.log(print(name))
// }
// function uppercase(text){
//     return text.toUpperCase();
// }
// function lowercase(text){
//     return text.toLowerCase();
// }
// // master('Sudhir-Patil', print)
// master("Sudhir Bhaii", uppercase)
function calculator(a,b, operation){
    console.log(operation(a,b));
}
function add(a,b){
    return a+b;
}
function substract(a,b){
    return Math.abs(a-b);
}
function multi(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
// calculator(5,6, add);
// calculator(5,6, substract);
// calculator(5,6, multi);

const obj =[
    {name:'sudhir', age:24, isRegistered: true},
    {name:'master', age:20, isRegistered: true},
    {name:'Pratik', age:21, isRegistered: false},
    {name:'Sonali', age:30, isRegistered: true}
]
// console.log(obj)
obj
// .map((item) =>{
//     console.log(item.age)
// })
.filter((item) =>{
  return item.age > 21;
}).map((item) =>{
    console.log(item)
})
// .reduce((acc, item) =>{
//     return acc + item.age
// }).map((item) =>{
//     console.log(item)
// })