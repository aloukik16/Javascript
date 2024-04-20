function sayMyName() {
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("U");
    console.log("K");
    console.log("I");
    console.log("K");
}

// sayMyName()

function addTwoNumbers(Number1, Number2){
    // let result  = Number1 + Number2
    // return result
    return Number1 + Number2
}
console.log(addTwoNumbers(4, 5))

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Aloukik"))
// console.log(loginUserMessage("Aloukik"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Aloukik",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));