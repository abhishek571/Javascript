// let num = prompt("Enter a number:")

// if (num % 5 ===0){
//     console.log(num,"number is multiple of 5")

// }

// else{
//     console.log(num,"is not multipule of 5")
// }



// let score = 75; //you can use prompt to take input from user
// let grade;

// if (score>=90 && score<=100){
//     grade="A";
// }else if (score>=70 && score<=89){
//     grade="B";
// }else if (score>=60 && score<=69){
//     grade="C";
// }else if (score>=50 && score<=59){
//     grade="D";
// }
// else if (score>=0 && score<=49){
//     grade="F";
// }

// console.log("according to your score your grade is",grade)

// let sum=0;
// for(let i = 1;i<=5; i++){
//     sum=sum+i;
// }
// console.log("sum =" ,sum)


// let num =(prompt("enter a number: "))
// let sum=0
// for(i=1;i<=6;i++){
//     sum=sum+i;
// }
// console.log("sum:",sum)


// for(let i=1;i<=5;i++){
//     console.log("i =",i);
// }


// let student={
//  name : "abhishek",
//  cgpa:9.60
// };

// for (key in student){
//     console.log("key =",key ,"value =", student[key]);
// }


// for(let i=0;i<=100; i++){
//     if(i%2===0)
//     console.log(i)
// }

// usernum=24;
// let num=prompt("enter a number:");
// while(num!=usernum){
//     num=prompt("You Guessed Wrong  number Guess Again:");
// }
// console.log("Congrats You Guessed Write Number")


// let marks=[85,97,44,37,76,60];

// let sum=0;
// for (let val of marks){
//     sum=sum+val;
// }

// let avg=sum/marks.length;

// console.log(`the average of marks is ${avg}`);



// for (let count=1;count<=5;count++){
//     console.log("abhishek")
// }
// console.log("yooo")

// sum=0;
// for (let i=1;i<=5;i++){
//     sum=sum+i
// }
// console.log("sum =",sum)

// let i=0;
// do{
//     console.log("ABHISHEK MANE")
//     i++
// }while (i<=7);

//----------------------------------------------------------------------------------------------------------------------------
// 1.check if number is even or odd


// let num = prompt("Enter A number:");

// if (num%2===0){
//     console.log(num,"is a even number");
// }else{
//     console.log(num,"is a odd number");
// }


//2.check if number is multiple of 5 or not take user input

// let num=prompt("Enter a Number:")

// if (num%5===0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not multiple of 5")
// }

//3.Write a code which can give grade to a students according to their scores
// let num=prompt("Enter your grade:")
// let grade;

// if (num>=80 && num<=100){
//     grade="A";
// }else if(num>=70 && num<=89){
//     grade="B";
// }else if(num>=60 && num<=69){
//     grade="C";   
// }

// console.log(grade)

// print all the even number from 0 to 100

// for(let i=0;i<=100;i++){
//     if (i%2===0){
//     console.log(i);
// }}


// let obj={
//     item : "pen",
//     name : "cellopen",
// };
// for(i in obj)
// console.log("key=",i,"value=",obj[i]);


// let ob="ABHISHEK";//only for string and array
// for(i of ob){
//     console.log(i);
// }


// let arr=[250,645,300,900,50];

// for(i=0;i<arr.length;i++){
//     let offer = arr[i]/10
//     arr[i]-=offer
    
// };
// console.log(arr)


// function sum(a,b){
//     return a+b;
// };

// let val=sum(5,4);
// console.log(val);


// const jum= (a,b)=>{
//     return a+b;
// };

// let pal=jum(5,5);
// console.log(pal);


// console.dir(document.body)


// let button=document.querySelector("#myid")
// console.dir(button)


// let h1=document.querySelector(".myh1")
// console.dir(h1).
//----------------using for of loop----------------------

// let divs=document.querySelectorAll("div")
// console.dir(divs)
// let idx=1
// for(div of divs){
//     div.innerText=`this is ${idx}number div`
//     idx++
// };
//------------without for of loop--------------------
// let divs=document.querySelectorAll("div");

// divs[0].innerText="alli need is learn js";
// let div=document.querySelectorAll("div")
// console.log(div)

// // div[0].innerText="THIS IS ABHISHEK";
// let index=1
// for(div of div){
// div.innerText=`this is index no ${index}ook`
// index++
// };

// let newbtn= document.createElement("button")

// newbtn.innerText="click me"

// document.querySelector("body").append(newbtn);


// let para=document.querySelector("p");
// console.log(para)

// let btn=document.querySelector("#mode");
// let body=document.querySelector("body")
// let mode="light";
// btn.addEventListener("click",()=>{
//     if(mode==="light"){
//         mode ="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else{
//         mode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(mode);
// });



// ------------------------on havor mode change----------------
// let havor=document.querySelector("div")
// let body=document.querySelector("body")
// let mode="light"

// havor.addEventListener("mouseover",() => {
//     if(mode==="light"){
//         mode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         mode="light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(mode);
// });