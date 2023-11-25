/**
 *  Array which contains all acceptable class types to be assigned to "Hero.class" property.
 */
const _heroClasses = ["WARRIOR", "MAGE", "MONK", "NINJA"];
/**
 *  Array which contains the damage types evoked for each "Hero.class". Its order is related to 
 *  "_heroClasses" array. 
 */
const _damageTypePerClass = ["espada", "magia", "artes marciais", "shuriken"];
/**
 *  Constant that represents the default string to be assigned to "Hero.class" 
 *  if the constructor entry has not matched any data from "_heroClasses" array.
 */
const DEFAULT_CLASS = "PEASANT";

class Hero {
    name = "";
    age = 0;
    class = "";

    /**
     *  Constructor method to instantiate an object based on "Hero" class.
     *  @param {string} name 
     *  @param {int} age 
     *  @param {string} classType 
     */
    constructor(name, age, classType){
        this.name = name;
        this.age = this.validateAgeEntry(age);

        this.class = (this.validateClassEntry(classType)) ? classType.toUpperCase() : DEFAULT_CLASS;
    };

    /**
     *  Method that displays a custom message on terminal depending on "Hero.class" entry.
     */
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

    /**
     *  Method that returns a custom string value depeding on "Hero.class" entry.
     *  @returns string value from "_damageTypePerClass" array.
     */
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

    /**
     *  Methods that validates if the constructor entry for "Hero.class" is present on
     *  "_heroClasses" array.
     *  @param {string} entry 
     *  @returns true || false
     */
    validateClassEntry(entry){
        return _heroClasses.includes(entry.toUpperCase());
    };

    /**
     *  Method that validates if the constructor entry for "Hero.age" is positive.
     *  If not, it forces the value to be positive.
     *  @param {int} age 
     *  @returns parameter "age" as a positive int value.
     */
    validateAgeEntry(age){
        return Math.abs(age);
    }
};

export {Hero};