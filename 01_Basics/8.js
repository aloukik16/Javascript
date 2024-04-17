// Dates: (date is a object)

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNewDate = new Date(2023, 12, 23)
console.log(myNewDate.toDateString());

let created_date = new Date("01-14-2022")
console.log(created_date.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(created_date.getTime());
console.log(Math.floor(Date.now()/1000));

myNewDate.toLocaleString('default', {
    weekday: "long",
})
console.log(myNewDate)