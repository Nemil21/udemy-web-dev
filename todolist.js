setTimeout(function () {
    let todolist = [];
    let input = prompt("What would you like to do?");
    while (input !== 'quit' && input !== 'q') {
       
        if (input === 'new') {
            let input = prompt("Enter new todo!");
            console.log(`${input.toUpperCase()} added to the list.`)
            todolist.push(input);
        }
        else if (input === 'list') {
            console.log("**********")
            for (let i = 0; i < todolist.length; i++) {
                console.log(`${i}:  ${todolist[i].toUpperCase()}`);
            }
        }
        else if (input === 'delete') {
            const index = parseInt(prompt("Enter the index of the todo you want to delete!"));
            if(!Number.isNaN(index)){
                let deleted = todolist.splice(index, 1);
                console.log(`Ok, deleted ${deleted[0]}`)
            }
            else{
                console.log('Invalid index')
            }
        }
        
        else {
            input = prompt("Invalid command. Enter a valid command or 'q' to quit");
        }
        console.log("**********")
        let input = prompt("What would you like to do?");
    }
}, 500);
