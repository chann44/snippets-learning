//  objects : can be created with two syntax 
let user = new Object();
let user2 = {}; // this is object litrals


// each property has a key: value;

user2 = {
    name: "vikash",
    age: 21,
}

// add property 
user2.isAdmin = true;

console.log(user2)

// delete property
delete user2.age;


// we can also add multiword property but they have to be in string 
user = {
    "likes_bird": true,
}


// key can be stored in a variable 
let key = "likes_bird"

console.log(user2)

console.log(user[key])


// computed property 
let fruite = "apple"

let bag = {
    [fruite]: 12
}
console.log(bag)


// we can use in opratior check if a proprtey exist or not 
console.log('anem' in user)


for (let key in user) {

    console.log(user.key)

}
