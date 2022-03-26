console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let number = 1; number <= 100; number ++ ){
        if(number % 2 !== 0){
            console.log(`${number} and counting...`)
        }
    }
}
printOdds(100)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, name = "Stranger"){
    let aboveSixteen = `Congrats, ${name}! You can drive!`
    let belowSixteen = `Sorry, ${name}, but you need to wait until you're 16.`
    if(age < 16){
        console.log(belowSixteen);
    }
    if (age >= 16){
        console.log(aboveSixteen);
    }
}
checkAge(17, "Mia")
checkAge(15)