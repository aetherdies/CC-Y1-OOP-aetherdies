//creating arrays//
let donuts = ['chocolate', 'custard', 'jam'];


console.log(donuts);

//adding arrays using .push//
donuts.push('hazelnut');

//iterating arrays (using loops)//
let donuts = ['chocolate', 'custard', 'jam'];

for(let i = 0; i < donuts.length; i++){
    console.log(donuts[i]);
};

//const//
const myName = "Aether";
myName = 30;
console.log(myName);

//exercise//
let characters = ['Audrey', 'Kit', 'Max'];
let emotion = "anger";

let memories = function (str, arr){
    arr.push(str);

    arr.forEach((element) => {
        console.log(element);
    });
};

weakness(emotion, characters);