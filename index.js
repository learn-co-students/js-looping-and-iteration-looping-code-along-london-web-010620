// Code your solutions in this file
const result = [];

function writeCards(names,birthday) {
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
                    
    };
    return result
};
function countDown(number) {
    let i = -1
    while (i<number) {
        console.log(number--)
    }
}