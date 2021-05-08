var prompt = require('prompt-sync')();



function app(counter){
    while(true){
        const currentView = view(counter)
        console.clear()
        console.log(currentView)
        const msg = prompt('\n\n(+) or (-)\n\n(q) to quit \n\nWhat would you like to do? ')
        if (msg === q){
            console.log('You quit')
            break
        }
        else {
            counter = update(msg,counter)
        }
    }
}