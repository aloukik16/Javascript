const user = {
    username: "Aloukik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

const PC = () => {
    let Cpu = "Ryzen 5"
    console.log(this.Cpu);
}
PC() // undefined


// const addTwo = (num1, num2) => {
//      return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "Aloukik"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
