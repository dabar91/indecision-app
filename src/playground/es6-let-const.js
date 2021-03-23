var nameVar = 'Daniele';
var nameVar = 'Andrea';
console.log('nameVar', nameVar);

// Posso reassegnare ma non creare una stessa variabile
let letVar = 'Luca';
letVar = 'Mario';


//Non posso neanche reassegnare ne creare una stessa
const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

var fullName = 'Daniele Barbato';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

if(fullName){
    //fuori dall'if statemente non posso accedere
    const lastName = fullName.split(' ')[1];
    console.log(lastName);
}


const fullName2 = 'Luca Barbato';

if(fullName2){
    var firstName = fullName2.split(' ')[0];
    console.log(firstName);
}


