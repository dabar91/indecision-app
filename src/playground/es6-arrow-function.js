function square(x){
    return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

//Challenge - Arrow Functions

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Daniele Barbato'));