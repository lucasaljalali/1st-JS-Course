const objTest = [
{
    name: "Lucas",
    age: 34,
    isWorking: true,
    workDetails: {
        company: "Google",
        country: "USA",
    },
    hobbies: ["Read", "Run", "Eat"]
},
{
    name: "John",
    age: 25,
    isWorking: false,
    workDetails: {
        company: null,
        country: null,
    },
    hobbies: ["Play", "Gym"]
}
];

console.log(objTest); // return normal JS object
console.log(typeof objTest);


// JSON

const jsonData = JSON.stringify(objTest); // convert object to JSON 

console.log(jsonData); // now it is a string, like JSON format
console.log(typeof jsonData);


const objData = JSON.parse(jsonData); // convert JSON to a JS Object

console.log(objData);
console.log(typeof objData);

objData.map((person) => {
    console.log(person.name);
})