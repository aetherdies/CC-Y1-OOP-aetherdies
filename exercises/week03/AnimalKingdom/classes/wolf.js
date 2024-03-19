
import Canine from "./canine.js";
class Wolf extends Canine {
    constructor(_name, _age){
        super(_name, _age);
    }
    makeNoise(){
        console.log("Howling: awoooo!");
    }
}
export default Wolf;