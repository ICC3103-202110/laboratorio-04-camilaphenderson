function view(counter){
    return ('Count ' + counter)
}
function update(msg,counter){
    if (msg === '+'){
        return counter +=1 
    }
    if (msg === '-'){
        return counter -= 1
    }
    else {
        return counter
    }
}
var prompt = require('prompt-sync')();

function app(counter){
    while(true){
        const currentView = view(counter)
        console.clear()
        console.log(currentView)
        const msg = prompt('\n\n(+) or (-)\n\n(q) to quit \n\nWhat would you do? ')
        if (msg === 'q'){
            console.log('You quit')
            break
        }
        else {
            counter = update(msg,counter)
        }
    }
}
app(0)