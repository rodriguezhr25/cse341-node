/* const name = 'Max';
let age = 29; */
const hasHobbies = true;

age =30;

const summarizarUser =(userName, userAge, userHasHobby) =>{
    return(
        'Name is ' +
        userName +
        ',age is ' +
        userAge + 
        ' and the user has hobbies: ' +
        userHasHobby
    );

};

const add = (a, b) => a + b ;//Arrow function with only one statement
const addNew = a => a + 1;
const addRandom = () => 1 + 2 ; //Arrow function without arguments
console.log(add(4,5));
console.log(addNew(5));
console.log(addRandom());
console.log(summarizarUser(name, age, hasHobbies));




const person = {

    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
/* const copiedPerson = {...person};
console.log(copiedPerson);
const hobbies = ['Sports' , 'Cooking' ];
const copiedArray = [...hobbies]; //Spread operator
 console.log(hobbies);
console.log(hobbies.map(hobby =>  'Hobby: ' + hobby ));  
hobbies.push('Programming');
console.log(copiedArray);

const toArray = (...args) => {//Merge multiple arguments into array, is a rest operator
    return args;

};

console.log(toArray(1,2,3,4))


const printName = ({}) =>{
    console.log(personData.name);
}

printName(person); */

const printName = ({name, age})=>{//Destructing
    console.log(name + ' ' + age);
}

printName(person);

const {name, age} = person;

console.log(name, age);