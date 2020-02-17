// Code your solutions in this file

const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

'Thank you, Lisa, for the wonderful surprise gift!'

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}


function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    }
}


