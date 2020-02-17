
function writeCards(array,surprise){
    let wrapped = [];
    for(let i = 0; i < array.length; i++) {
        wrapped.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`)
    }
    return wrapped
}

function countDown(number) {
    while(number >= 0) {
        console.log(number)
        number--
    }
}