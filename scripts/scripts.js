"use strict";


let userHealth = 40;
let grantHealth = 10;
let win = 0;

startGame();

function startGame() {
    let select = prompt(`Do You Have The Courage To Battle The Amighty Grant? (y/n?)`);
    ;

    switch (select.toLocaleLowerCase()) {

        case "n":
            console.log(`Coward!!! Return When You Have Found Your Spine!`);
            break;

        case "y": startCombat();
    }
    function startCombat() {
        let userName = prompt(`Please Enter Your Name!`)

        function getDamage() {

            userHealth -= Math.floor(Math.random() * 5) + 1;
            grantHealth -= Math.floor(Math.random() * 5) + 1;
            console.log(`${userName}'s heath is ${userHealth}`);
            console.log(`Almight Grant's Health is ${grantHealth}`);
        }

        while (win <= 3) {
            let fightOrFly = prompt(`Would You Like To Attack Or Flee? (A/F)`)
            if (fightOrFly.toLocaleLowerCase() === "f") {

                console.log(`Coward!!! Return When You Have Found Your Spine!`);
                break;
            }
            if (fightOrFly.toLocaleLowerCase() === "a") {
                getDamage();
            }

            if (grantHealth <= 0) {

                win++;
                console.log(`${userName}You Have Bested The Almighty Grant ${win} Time(s)!!`)
                grantHealth = 10;
            }
            else if (userHealth <= 0) {
                console.log(`The Almighty Grant Has Defeated You`)
                break;
            }

            if (win == 3) {
                console.log(`Victory Is Your's!!! ${userName} Has Defeated The Almighty Grant!!!`)
                break;
            }

        }

    }
}
