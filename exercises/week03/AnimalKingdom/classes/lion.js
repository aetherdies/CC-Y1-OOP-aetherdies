import Feline from "./feline.js";
class Lion extends Feline {
    constructor(_name, _age){
        super(_name, _age);
    }
    makeNoise(){
        console.log("Roaring: roarrr!!!");
    }
}
export default Lion;