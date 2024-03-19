
import Canine from "./canine.js";
class Dog extends Canine {
    constructor(_name, _age, _owner){
     super(_name, _age);
     this.owner = _owner;
    }

    makeNoise(){
        console.log("Barking: woof woof!!");
    }
}
export default Dog;