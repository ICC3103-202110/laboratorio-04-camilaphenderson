var prompt = require('prompt-sync')();



function app(counter){
    while(True){
        const currentView = view(counter)
        console.clear()
        console.log(currentView)
        const msg = prompt('\n\n(+) or (-)\n\n(q) to quit \n\nWhat would you do? ')
        counter = update(msg,counter)
        

    }
}