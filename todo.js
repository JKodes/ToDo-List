let answer = prompt("What would you like to do")

const todos =[]

while(answer !== 'quit' && answer !== 'q'){
    if(answer === 'list'){
        for(let i; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
    }
    answer = prompt("What would you like to do")
}
console.log("app stop asking question")