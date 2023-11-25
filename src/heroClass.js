const _heroClasses = ["WARRIOR", "MAGE", "MONK", "NINJA"];
const _damageTypePerClass = ["espada", "magia", "artes marciais", "shuriken"];

const DEFAULT_CLASS = "PEASANT";

class Hero {
    name = "";
    age = 0;
    class = "";

    constructor(name, age, classType){
        this.name = name;
        this.age = age;

        this.class = (this.validateClassEntry(classType)) ? classType.toUpperCase() : DEFAULT_CLASS;
    };

    attack(){
        if(this.class !== DEFAULT_CLASS)
        {
            console.log(`O herói ${this.name} (${this.class}) atacou usando ${this.checkActionByClass()}!`);
        }
        else
        {
            console.log(`Você (${this.name}) nem é um herói!`);
        }
    };

    checkActionByClass(){
        let action;

        // [0] -> warrior | [1] -> mage | [2] -> monk | [3] -> ninja
        for(let i=0; i < _heroClasses.length; i++)
        {
            if(this.class == _heroClasses[i])
            {
                action = _damageTypePerClass[i];
            }
        }

        return action;
    };

    validateClassEntry(entry){
        return _heroClasses.includes(entry.toUpperCase());
    };
};

export {Hero};