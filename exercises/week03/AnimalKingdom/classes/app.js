import Cat from './cat.js';
import Dog from './dog.js';
import Wolf from './wolf.js';
import Lion from './lion.js';

let cat1 = new Cat('Tom', 2);
let dog1 = new Dog('Kobe', 1, 'Aether');
let wolf1 = new Wolf('Princess', 4, 'Aether');
let lion1 = new Lion('Jon', 6, 'Aether');

let animals = [cat1, dog1, lion1, wolf1];

console.log(animals);

animals.forEach((animal) => {
    animal.makeNoise();
    animal.roam();
    animal.sleep();
    console.log("----------");
});