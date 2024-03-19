
import Feline from "./feline.js";
class Cat extends Feline {
    constructor(_name, _age){
        super(_name, _age);
    }
    makeNoise(){
        console.log("Meowing: mrreeow! :3");
    }
}
export default Cat;