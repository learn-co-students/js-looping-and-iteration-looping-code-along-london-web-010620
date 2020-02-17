// Code your solutions in this file
const newArray = []

function writeCards(names, birthday) {
    for(let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    };
    return newArray;
}

function countDown(number) {
    let i = -1;
    while (i < number) {
        console.log(number--);
    }
};
