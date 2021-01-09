// 1. ways to print in js
// console.log("Hello World");
// alert("me");
// documents.write("this is document write")

// 2. js console API
// console.log("Hello World");
// console.warn("This is warning");
// console.error("This is an error");
// 3. js variable
// What are vairables? - Containers to store data values

/*multi
line comments*/
// 4. Data types in js
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// string
// var str1 = "This is a string"
// var str2 = 'This is a sting in single quote'
// object
// var marks = {
//     ravi: 86,
//     hari: 78,
//     hanit: 65,
// }
// booleans
// var a = true;
// var b = false;
// console.log(a, b);
// console.log(marks);

// var n = null;
// console.log(n)
/* there are two types of data types in js
1. Perimitive data type: undefined, null, number, string, boolean, symbol
2. Reference data type
*/
// var arr =[1,2,3,4,5]
// console.log(arr)
// Assignment operators
// var c = b;
// c += 2
// c -= 2
// c *= 2
// c /= 2
// console.log(c)

// comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x > y)
// console.log(x < y)
// // logical operators
// console.log(true && true)
// console.log(false && false)
// console.log(false && true)
// console.log(true && false)

// logical or
//  console.log(true || true)
// console.log(false || false)
// console.log(false || true)
// console.log(true || false)

// logical not
// console.log(!false)
// console.log(!true)

// function avg(a, b){
    
//     return (a + b)/2;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16)
// console.log(c1, c2);
// var arr = [1,2,3,4,5,6]

// arr.forEach(fnction(element)){
//     console.log(element);
// }

// let j = 1;
// const ac = 0;
// ac++;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// }while(j < arr.length);

// break and continue
// let myArr = ["Fan", "Cam", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Harry")
// myArr.shift()
// console.log(myArr);
// myArr.unshift
// d=[1,5,8,9,3,4,6]
// d.sort()

// String Methon in JS

// let myString = "adi is good"
// console.log(myString.length)
// console.log(myString.indexOf("is"))
// console.log(myString.lastIndexOf("is"))

// console.log(myString.slice(1, 4))
// myString.replace("hi", "adi");
// console.log(d, myString)

// let myDate = new Date()
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("conatainer")
// // console.log(elemClass)

// // // elemClass[0].style.background = "yellow"
// elemClass[0].classList.add("bg-pri")
// elemClass[0].classList.add("text-success")

// // console.log(elem.innerHTML);
// // console.log(elem.innerText);
// tn = document.getElementsByTagName('button')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created Para";



// tn[0].appendChild(createElement);


// createdElement1 = document.createElement('b');
// createdElement1.innerText = "This is a created ";
// tn[0].replaceChild(createdElement1, createdElement);
// // Selecting using Query

// sel = document.querySelector('.conatainer')
// console.log(sel)
// sel = document.querySelectorAll('.conatainer')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('the document was loaded')
// }
// Events in JS
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.conatainer')[1].innerHTML = "<b> we have clicked</b>"
//    console.log("Click on Container"); 
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container") 
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container") 
// })
// let prevHTML = document.querySelectorAll('.conatainer')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.conatainer')[1].innerHTML = prevHTML ="<b> We have Clicked</b>"
//     console.log("Mouse up container") 
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.conatainer')[1].innerHTML = prevHTML ="<b> We have Click</b>"
//     console.log("Mouse down container") 
// })


// Arrow functions
// function sum(a, b){
//     return a + b;
// }


// sum = (a, b)=>{
//     return a+b;

// }
// logKaro = ()=>{
//     document.querySelectorAll('.conatainer')[1].innerHTML = prevHTML ="<b> Set interval fired</b>"
//     console.group("I am your log");
// }

// SetTimeout and setinterval

// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInetrval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JS LocalStorage
// localStorage.setItem('name','aditi')
// undefined
// localStorage
// Storage {name: "aditi", length: 1}
// localStorage.clear
// ƒ clear() { [native code] }
// localStorage.clear()
// undefined
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear

//Json
// obj = {name: "Adi", length: 3, a: {this:"that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse({"name": "Adi", "length":1, "a":{"this":"that"}})
// console.log(parsed);

// baclticks template litarals - backticks



