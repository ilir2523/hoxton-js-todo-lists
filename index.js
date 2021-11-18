/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);

// let userList = []
let message = ''

for (const user of window.users) {
    // Right Option
    message += `
    Id: ${user.id} | Name: ${user.name} | From: ${user.address.city}`

    // Option 1
    // message += `
    // Id: ${user.id}
    // Name: ${user.name}
    // From: ${user.address.city}
    // ${"-".repeat(30)}`

    // Option 2
    // console.log(`List of all users with their ids, names and what city they're from`)
    // userList.push(`
    // Id: ${user.id}, 
    // Name: ${user.name}, 
    // From: ${user.address.city} `)

}

alert(message)

//  for (item of userList) {
//     console.log(item)
// }

// const listId = []

const inputId = Number(prompt("Please enter the user Id to se the to do list."))
// const inputId = 1
let userName = ''
let toDoList = ''

for (user of users) {
    if (user.id === inputId) {
        userName += `${user.name}`
        alert(userName)
    } for (todo of todos) {
        if (todo.userId === inputId) {
            toDoList += `
To do: ${todo.title}` // This isn't the right way to do it 
        }
    }

}

alert(toDoList)
console.log(userName)
console.log(toDoList)
