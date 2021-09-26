




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
    console.log(name , age);
}

printName(person);

const {name, age} = person;

console.log(name, age);
const hobbies = ['Sports' , 'Cooking' ];
const [hobby1, hobby2]= hobbies;// Destructing object
console.log(hobby1,hobby2);