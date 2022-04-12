// console.log("Hello_World");
// var firstName="Sandeep";
// console.log(firstName);
// firstName="kumar";
// console.log(firstName);
// let value=10;
// console.log(value*20);
// value=20;
// console.log(value);
// const value1=1.5;
// console.log(value1);
// console.log(typeof firstName);
// console.log(typeof value)
// console.log(typeof value1);

// let identifier="NameValue";
// console.log(identifier);
// identifier.toUpperCase();
// console.log(identifier);
// console.log(identifier.length);

// let name1="       Sandeep kumar singh  ";
// console.log(name1);
// string is immutable
// name1=name1.trim();
// console.log(typeof name1);
// console.log(typeof "sandeep")
// String to numbers ---> by adding +(plus) before string.
// let string1 = +"17";
// let string2 = Number("33");
// console.log(string1);
// console.log(string2);

//number to string me karna hai to -----? number ko add kardo blank string ke sath to vo string me convert ho jayega
// let number1=22;
// number1=String(number1);
// console.log(String(number1));
// console.log(typeof (number1+""));

// template string use karne ke liye shift tilt button press karek
// usme string likhdo or fir jaha ve variable ki value daalni hai vaha pe
// jaise ki

// let age=22;
// let fullName="sandeep kumar singh";
// let aboutme = `my name is ${fullName} and i am ${age} year old `;
// console.log(aboutme);

// let string1="sandeep";
// let string2=17;
// console.log(string1 + string2);

// let number1=+prompt("Enter the number");
// console.log(number1);

// if else

// let age=12;
// if(age>=18)
// console.log("Juwaan thai gaya");
// else
// console.log("Andda saala");

// let number1=1;
//  let sum=0;
// while(number1<=10)
// {
//     sum=sum+number1;
//     console.log(sum);
//     number1++;
// }
// console.log(sum);


// array..........



// const array1 = ["abc","def","ghi","jkl"];
// let array3 = ["sandeep",  "kumar"];
// console.log(array1);
// let array2 = array1;
// console.log(array2);


//clone the array

// ---> Spread operator
// let [...array2]=array1;
// console.log(array2);console.log(array1===array2);
// let array2 = array1.slice(0).concat("sandeep");
// console.log(array2);
// let array2 = [].concat(array1,"sandeep");
// console.log(array2);
// console.log(array1 === array2);
// loops is array 

// let array1 = ["a","b","c","d"];
// console.log(array1);
// let array2 = [];
// for(let i=0;i<=array1.length-1 ;i++)
// {
//     console.log(array2.push(array1[i].toUpperCase()));
// }
// console.log(array2);

//always declare array as const variable


// const array1 = ["A","B","C","D"];
// array1.pop();
// console.group(array1)
// for(let i of array1)
// {
//  console.log(array1.pop());
// }
// console.log(array1);

//araya destructoring
// jab destructure karenge tab let ke baad array ke bracket daalenge or usme purane array ke saare element daal denge.

// const array1 = ["abc","cde","fgh","ijk","lmn","opq"];
// // const array2 = [];
// let [one,two,...array2]=array1;
// console.log(one,two);
// console.log(array1.slice(0,3));
// console.log(array2);


// objects

    // const person1 = {name : "sandeep",
    //                 age : 22,
    //                 branch : "CS",
    //                 "person hobbies" : ["plaing","reading"]}
// accessing data from an object 
    // console.log(person1["name"]);    
    // person1.gender="male";
    // person1["gender1"]="female";
    // console.log(person1);        
    // const key = "email";
    // person1[key] = "kumarsandeep1031@gmail.com";
    // console.log(person1["age"]);
    // console.log(person1["person hobbies"]);

// traversing in an object
//for in loop
    //  for(let key in  person1)
    //  {
    //     console.log(key ," ", person1[key]);
    //  }
// Object.keys  ----> object ko array me represent karega...
    // console.log(Object.keys(person1));
    //     for(let key of Object.keys(person1))
    //     {
    //         console.log(key,':',person1[key]);
    //     }

// coputed properties
    // const key1 = "objectkey1";
    // const key2 = "objectkey2";
    // const value1 = "myvalue1";
    // const value2 = "myvalue2";

    // const object1 ={

    // }
    // object1[key1] = value1;
    // object1[key2] = value2
    // console.log(Object.keys(object1));

// spread operator in array
    // const array2 = [1,2,3,4];
    // const array3 = [5,6,7,8,9];
    // const array1 = [..."abcde",...array2,...array3];
    // console.log(array1);    

//spread operator in objects
    // const obj2 = {..."fghijkl"}
    // const obj3 = {..."abcde"};
    // const obj1 = {...obj2,...obj3};
    // console.log(obj1);    








// intoduction to arrays

    // const array1 = ["sandeep","kumar",22,1999];
    // console.log(array1);    
    // array1[0]="hello! there";
    // console.log(array1);

//array indexing
    // const array1 = ["sandeep","kumar","singh"];
    // //push
    // array1.push(22);
    // console.log(array1);
    // //unshift
    // array1.unshift("Hello! there");
    // console.log(array1);
    // //pop
    // array1.pop();
    // console.log(array1);
    // //shift
    // array1.shift();
    // console.log(array1);

//primitive vs reference data type
    // //primite value stored in stack----> value can be changed ehich does not reflect other values
    // let value1 = "sandeep";
    // let value2 = "kumar";
    // let value3 = "singh";
    // value1 = "hello there";
    // console.log(value1.toUpperCase());
    // //reference type jisme address refer karta hai ki stored vaue kaha pe hai.
    // const array1 = ["sandeep","kumar"];
    // const array2 = array1;
    // console.log(array1);
    // console.log(array2);
    // console.log(array1 == array2);// address same hai yaha pe;


// object destructuring
    // const objinarray = {userid:1,name:"sandeep",age:22};
    // for(let keys in objinarray){
    //     console.log(objinarray[keys]);
    // }
    // // console.log(obj[0].name);
    // // console.log(obj);


//functions 
//function decleration
    // function sumOfThree(number1,number2)
    // {
    //     return number1+number2;
    // }
    // console.log(sumOfThree(1,4,3));
            // let value1 = confirm("enter value is correct or not");
            // if(value1)
            // console.log("sahi value daali");
            // else
            // console.log("aankhe hai ki buuton dhang se daal");
            // console.log(value1);

//function in string
// let string1 = "sandeep";
    // function stringFirst(string1){
    //     if(string1[0] === "s")
    //     return true;
    //     else
    //     return false;
    // }
    // console.log(stringFirst("Sandeep"));

//function in strings
    // let value1;
    // const array1 = [1,2,3,4,5,6,7,8,9,10];
    // function findKey(array1,key){
    //     for(value1 of array1){
    //         if(value1 === key)
    //         return value1;
    //         else
    //         continue;
    //     }
    //     console.log("value not found");
        
    // }
    // console.log(findKey(array1,5),"value found");

// function expression








// arraow function






// hoisting








//lexical scopinh






//block scope vs function scop
//let, const is block scope

//var is function scope







//default parameter, method overloading

    // function add(a,b,c=0){
    //     return a+b+c;
    // }
    // console.log(add(2,1));





//rest parameters
    // const func = (a,b,...c) =>{
    //     var sum =0;
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     for(let value of c){
    //         sum = sum + value;
    //     }
    //     console.log(sum);
    // }
    // func(1,2,3,4,5,6,7,8,9);

//parameter destructuring
    // const obj = {
    //     name:"sandeep",
    //     age:22
    // }
    // function objcall(objcall){
    //     console.log(objcall.name,objcall.age);
    // }
    // objcall(obj);

//call functions
    // function callfunc(a){
    //     console.log(a);
    // }    
    // callfunc([1,2,3,4,5]);

    // function callfunc(a){
    //     console.log(a);
    // }    
    // callfunc("sandeep");

    // function callfunc(a){
    //     console.log(a);
    // }    
    // callfunc(3);

    // function callfunc(a){
    //     console.log(a.name);
    // }    
    // callfunc({name:"sandeep",age:22});

    // function callfunc({name,age}){
    //     console.log(age);
    // }    
    // callfunc({name:"sandeep",age:22});

//call back function

    // function func2(){
    //     console.log("in function 2");
    // }

    // function func1(){
    //     console.log("in function 1");
    //     func2();
    // }
    // func1();

    // function func2(){
    //     console.log("in function 2");
    // }
    
    // function func1(callback){
    //     console.log("in function 1");
    //     console.log(callback);
    //     callback();
    // }
    // func1(func2);    

//function returning function
    // function func1(){
    //     console.log("hello in 1");
    //     return func1;
    // }    
    // function main(callback){
    //     console.log("hello in 2");
    //     console.log(callback);
    //     console.log(callback());

    // }
    // main(func1);


//important in arrays
// const array1 = [11,12,13,14,15,16,17,18,19];

    // function mult(number,index){
    //     console.log(number, index);
    // }
    // for(let i=0;i<array1.length;i++){
    //     mult(array1[i],i);
    // }

// function mult(number,index){
//     console.log(number, index);  //callback function
// }
// for(let i=0;i<array1.length;i++){
//     mult(array1[i],i);
// }

//for each

    // array1.forEach(function(number,index){
    //     console.log(`${number*2} at ${index}`)
    // });

    // const array1 = [
    //     {
    //         name:"sandeep",
    //         age:22
    //     },
    //     {
    //         name:"kumar",
    //         age:23
    //     },
    //     {
    //         name:"singh",
    //         age:24
    //     }
    // ];

    // array1.forEach(function(objadd,index){
    //     console.log(objadd.name,index);
    // });


//foreach
    // const array = [11,22,33,44,55,66,77,88,99];
    // function func(number,index){
    //     console.log(number,index);
    // }
    // array.forEach(function user(number,index){
    //     console.log(number*2,index);
    // });
    // function myfun(num,ind){
        // console.log("hello");
    // }
    // array.forEach(myfun);

    //  const array1 = [
    //     {
    //         name:"sandeep",
    //         age:22
    //     },
    //     {
    //         name:"kumar",
    //         age:23
    //     },
    //     {
    //         name:"singh",
    //         age:24
    //     }
    // ];
// anonymous function.....
    // array1.forEach((user,index)=>{      
    //     console.log(user.name,index);
    // });
    // for(let user of array1){
    //     console.log(user.name);
    // }
    // for(let user in array1){
    //     console.log(user,array1[user].name);
    // }

// map methods

    // const array1 = [
    //     {
    //         name:"sandeep",
    //         age:22
    //     },
    //     {
    //         name:"kumar",
    //         age:23
    //     },
    //     {
    //         name:"singh",
    //         age:24
    //     }
    // ];

    // const array = [11,22,33,44,55,66,77,88,99];

    // function myfun(valuenumber){
    //     console.log(valuenumber);
    //     return "hello";
    // }
    // const returnarray =  array.map(myfun);
    // console.log(returnarray);

//for each 

    // const array = [11,12,13,14,15,16,17,18,19,20];

    // function myfun(number, index){
    //     console.log(number, index);
    // }

    // array.forEach(myfun);

    // array.forEach(function(number,index){
    //     console.lo(number, index);
    // });


//map

    // const array = [11,12,13,14,15,16,17,18,19,20];

    // const returnfunc =  function(number1, index){
    //     console.log("hello");
    //     return number1*2;
    // }

    // const returnedarray  = array.map(returnfunc);    
    // console.log(returnedarray);

    // const returnedarray = array.map(function(number,index){
    //     console.log(number,index);
    //         return number*2;
    // });
    // console.log(returnedarray);


//filter

    // const array = [1,2,3,4,5,6,7,8,9,10];

    // const returnarrayfunc =  function(number){

    //     console.log(number," in array");
    //     return number%2!==0;
    // }
    // const returnedarray = array.filter(returnarrayfunc);
    // console.log(returnedarray);

    // const truereturnedarray = array.filter(function(number){

    //     console.log(number);
    //     return number%2===0;
    // });
    // console.log(truereturnedarray);



//reduse

    // const objinarray = [
    //     {
    //         name:"sandeep",
    //         age:22
    //     },
    //     {
    //         name:"kumar",
    //         age:23
    //     },
    //     {
    //         name:"singh",
    //         age:24
    //     }
    // ]
    // console.log(objinarray);

    // const returnarrayfunc = objinarray.reduce(function(first,second){
    //     return first + second.age;
    // },0);

    // console.log(returnarrayfunc);




//sort method   original arrya ko change kar deta hai
//price low to high
//price high to low


    // const array = [7,2,8,1,9,11,98,92];
    // // console.log(array.sort());
    // const returnarray = array.sort(function(a,b){

    //     return a-b;

    // });
    // console.log(returnarray);



    //  const objinarray = [
    //     {
    //         name:"sandeep",
    //         age:22,
    //         price:100
    //     },
    //     {
    //         name:"kumar",
    //         age:23,
    //         price:300
    //     },
    //     {
    //         name:"singh",
    //         age:24,
    //         price:200
    //     }
    // ];
    // console.log(objinarray);

    // const clonearray =  objinarray.slice(0).sort(function(a,b){
    //     return a.price-b.price;
    // });
    // console.log(clonearray);

    // const clonearray = [...objinarray];
    // console.log(clonearray);

    // clonearray.sort(function(a,b){
    //     return a.price - b.price;
    // });
    // console.log(clonearray);
    // clonearray[0].age=11;
    // console.log(clonearray);

    // const returnarray = clonearray.sort(function(a,b){
    //     console.log("yo",a,b);
    //     return a.price-b.price;
    // });
    // console.log(returnarray);



// find method


    //  const objinarray = [
    //         {
    //             name:"sandeep",
    //             age:22,
    //             price:100
    //         },
    //         {
    //             name:"kumar",
    //             age:23,
    //             price:300
    //         },
    //         {
    //             name:"singh",
    //             age:24,
    //             price:200
    //         }
    //     ];

    // const array = ["cat","dog","horse","elephant"];
    // const milgaya =  objinarray.find(function(objadd){
    //     return objadd.name === 'kumar';
    // });
    // // console.log(array);
    // if(milgaya === undefined)
    // console.log("search not found");
    // else
    // console.log("search found",milgaya.name);
    // // console.log(milgaya);



// every method  return karega jab saare true hue or ek bhi false hua to return kar dega

    // const array = [2,4,6,8];
    // const returnedvar = array.every((number)=>number%2==0);
    // console.log(returnedvar);

    //  const objinarray = [
    //         {
    //             name:"sandeep",
    //             age:22,
    //             price:100
    //         },
    //         {
    //             name:"kumar",
    //             age:23,
    //             price:300
    //         },
    //         {
    //             name:"singh",
    //             age:24,
    //             price:200
    //         }
    // ];

    // const returntrueflase = objinarray.every((objadd)=>objadd.age<50);
    // console.log(returntrueflase);


//some method koi ek bhi condtion true ho jaati hai to return true kar dega


    // const array = [1,3,5,7,9];
    // const returnedvar = array.some((number)=>number%2==0);
    // console.log(returnedvar);

    //  const objinarray = [
    //         {
    //             name:"sandeep",
    //             age:22,
    //             price:100
    //         },
    //         {
    //             name:"kumar",
    //             age:23,
    //             price:300
    //         },
    //         {
    //             name:"singh",
    //             age:24,
    //             price:200
    //         }
    // ];

    // const returntrueflase = objinarray.some((objadd)=>objadd.price>500);
    // console.log(returntrueflase);


// fill method  array ko fill karne me kaam aata hai  "not include"
    // const array = [1,2,3,4,5,6,7,8,9];
    // // const array = new Array(10).fill(0);
    // array.fill("X",2,6);
    // console.log(array);


// splice method insert and delete "include"
    // start,delete ,insert
    // const array = [1,2,3,4,5,6,7,8,9];
    // array.splice(1,2,"sandeep","kumar");
    // console.log(array);
    // document.getElementById("yup").innerHTML = array;
   


// what is  iterables ----> jispe hum for of loop laga sake vo iterables
    // jaise string or array
    // in dono pe hum for of loop laga sakte hai


// what is array like objects ---> jiski lengh property or index se value access kar sakte hai.
    //array like object string hai

//set method
    //set me for of laga sakte hai
    // set methods ke andar iterable ko heelikh sakte hau
    // const array1 = [1,2,3,4,5,6,7,8,8,9,9]
    // const set1 = new Set([1,2,3,4,5,5,6,6,7,8,9,9]);
    // console.log(set1);
    // set1.add(array1);
    // console.log(set1);
    // let length = 0;
    // for(let len of set1)
    // {
    //     console.log(len);
    //     length++;
    // }
    // console.log(length);
    // console.log(set1.length);


//maps method 
    //map me set or get method use hote hai 
    // maps pe saara khel key and value  ka hota hai
    // dikhta aise hai  {["key1":"value1"],["key2":"value2"]}
    // const obj = {
    //     name : "sandeep",
    //     age : 22,
    //     DOB :1999
    // }

    // const mapvar = new Map();
    // mapvar.set("name","sandeep");
    // mapvar.set("last_name","singh");
    // mapvar.set("age",22);
    // console.log(mapvar);
    // for(let [,value] of mapvar){
    //     console.log(value);
    // }
    // for(let key of mapvar.keys()){
    //     console.log(key);
    // }
    // console.log(mapvar.get(mapvar).name);


// object cloning using Oject.assign
    // const obj = {
    //     name:"sandeep",
    //     age:22
    // }
    // const cloneobj = Object.assign({},obj);
    // console.log(cloneobj);
    // obj.dob = 1999;
    // console.log(obj);


//option chain

    // const obj = {
    //     name:"sandeep",
    //     age:22,
    //     year:1999,
    //     // hobbie:{sub:"maths",yr:1999}
    // }
    // console.log(obj?.hobbie?.sub1);

// method inside functions
// functiojn inside the objects
    // const  about = function(string1,string2){
    //     console.log(string1,string2,`details are ${this.name} and age is ${this.age}`);
    // }
    // const user1={
    //     name:"sandeeep",
    //     age:22,
    //     year:1999,
        
    // }

    // const user2={
    //     name:"mandeep",
    //     age:23,
    //     year:2000
    // }
    // // user1.about();
    // const returnedfunc = about.bind(user2,"sandeep","kumar");
    // returnedfunc();

const body = document.querySelector("body");
const inpara = document.querySelector(".color-name");
console.log(inpara);
const buttons = document.querySelector(".btn");
console.log(buttons);
        buttons.addEventListener("click",function(event){
        // console.log(button);
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let color = `rgb(${red},${green},${blue})`;
        // console.log(color);
        body.style.backgroundColor = color;
        inpara.textContent = color;
    });
console.log(inpara);