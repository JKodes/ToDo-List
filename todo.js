let answer = prompt("What would you like to do")

const todos =[]

while(answer !== 'quit' && answer !== 'q'){
    if(answer === 'list'){
        for(let i; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
    }else if(answer === 'new'){
        const addOnList = prompt("What would you like to add?")
        todos.push(addOnList)
        console.log(`${addOnList} new task added!`)
    }else if(answer === 'delete'){
        const deleteIndex = prompt("Enter the index you want to remove")
        todos.splice(deleteIndex, 1)
        console.log(deleteIndex)

    }

    
    answer = prompt("What would you like to do")
}
console.log("app stop asking question")