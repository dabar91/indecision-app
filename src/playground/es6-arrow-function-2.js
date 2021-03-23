// arguments object - no longer bound with arrow functions

const add = (a,b) => {
    // console.log(arguments);
    return a+b;
};
console.log(add(55,1,10));

// this keywork - no longer bound

const user = {
    name: 'Daniele',
    cities: ['Roma', 'Milano', 'Torino'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has live in ' + city);
    }
};

// console.log(user.printPlaceLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy );
    }
};


console.log(multiplier.multiply());