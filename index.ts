#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 7016;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter Your Pin",
        type: "number"            
    }
]);

if (pinAnswer.pin == myPin) {
    console.log("Correct pin code!!!")

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Cash Withdraw", "Check balance", "Fast Cash",]
        }
    ]);
    
    if (operationAns.operation === "Cash Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type:  "number"
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        } else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance} \nThank You For Using Banking Service`);
        }
    } else if (operationAns.operation === "Check balance"){
        console.log(`Your account balance is: ${myBalance} \nThank You For Using Banking Service`);
    } else if (operationAns.operation === "Fast Cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Fast Cash Amount",
                type: "list",
                choices: [1000, 2000, 5000],
            },
        ]);
        if (fastCashAmount.amount > myBalance) {
            console.log("Insufficient balance");
        } else {
            myBalance -= fastCashAmount.amount;
            console.log(`Your remaining balance is: ${myBalance} \nThank You For Using Banking Service`);
        }
    } 
} else {
    console.log("INCORRECT PIN\nPlease Enter Valid Pin Code");
}

