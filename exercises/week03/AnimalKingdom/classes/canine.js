import Animal from "./animal.js";
class Canine extends Animal {
    constructor(_name, _age, _owner){
     super(_name, _age);
     this.owner = _owner;
    }

    roam(){
        console.log("Roaming: I'm roaming with my pack");
    }
}
export default Canine;