"use strict";


let userHealth = 40;
let grantHealth =10;
let win =0;

 
do{
    let grantAttack= Math.floor(Math.random() * 2) +1;
    let userAttack = Math.floor(Math.random() * 2) +1;
    console.log(`Grants heath is ${grantHealth}`);
    console.log(`user health is ${userHealth}`);
    userHealth -= grantAttack;
    grantHealth -=userAttack;

    if(grantHealth <=0){
        grantHealth =10;
        win++;
    }
    else if(userHealth <= 0){
        console.log(`The Almighty Grant Has Defeated You`)
        break;
    }

     if(win==3){
        console.log(`You Have Defeated The Almighty Grant`)
        break;
    }
   
    

}
while(win<=3);

// let i = 10;

// do{
//     console.log(`You are ${i} years old!`);
//     i++;
//     if(i==18){
//     console.log(`you are an adult`) 
//     }
// }
// while(i!=18);



// let i = 10;
// while (i<=30){
//     console.log(`You are ${i} years old!`);
//     i++;
//     if(i==18){
//         console.log(`You are legally an adult!`);
//         break;
//     }
// }

// let i = 1;
// while (i<=10){
//     console.log(i);
//     i++;
// }

// for(let i = 1; i <=20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// const dayOfWeek = prompt("What day is it");
// console.log(dayOfWeek);
// switch (dayOfWeek.toLowerCase()){
//     case "monday":
//       document.write("Today is Monday");
//       break;

//     case "saturday":
//       document.write("Party time!!");
//       break;
//     default:
//     document.write(`${dayOfWeek} is not recognized.`);
//     break;



// }

// const name = "Porkchop";
// const age = 23;

// if (name === "Scooby" || name === "Snoopy"){
//     console.log("We found a match.");
// }


// if (name === "Snoopy"){
//     console.log("The name is Snoopy");

// }
// else if (name === "Scooby"){
//     console.log("The name is Scooby")
// }
// else {
//     console.log("The name does not match anything in our system");
// }
