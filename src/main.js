//  Importing "Hero" class into main.js context <import enable through package.json> 
import { Hero } from "./heroClass.js";

let party = {
    warrior: new Hero("Bruno", 21, "warrior"),
    mage: new Hero("Davy Jones", 36, "mage"),
    monk: new Hero("Tibet", 98, "monk"),
    ninja: new Hero("Hattori", 28, "ninja"),
    david: new Hero("David", 17, "wariOh")
}

//  Triggering "Hero.attack()" method for each instance in "party" object
for(let member in party)
{
    party[member].attack();
}