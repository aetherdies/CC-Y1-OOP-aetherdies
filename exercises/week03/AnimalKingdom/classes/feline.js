import Animal from "./animal.js";
class Feline extends Animal {
    constructor(_name, _age, _owner){
     super(_name, _age);
     this.owner = _owner;
    }

    roam(){
        console.log("Roaming: I'm travelling alone");
    }
}
export default Feline;