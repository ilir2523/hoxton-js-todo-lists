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

// alert(message)

//  for (item of userList) {
//     console.log(item)
// }

// const listId = []

const inputId = Number(prompt("Please enter the user Id to se the to do list."))
// const inputId = 1
let message2 = ''
let message3 = ''

for (user of window.users) {
    if (user.id === inputId) {
        message2 += `${user.name}`
        alert(message2)
    } for (todo of window.todos) {
        if (todo.userId === inputId) {
            message3 += `
    To do: ${todo.title}`
        }
    } if (confirm("Do you want to add a to do")){
        let addToDo = prompt("Please enter the user Id to se the to do list.")
        let objToDo = {userId: inputId, id: 101, title: addToDo, completed: false}
        todos.push(objToDo)
    } else {console.log(message3)} 
}



// confirm("Do you want to add a to do")
// if (true) {
//     const addToDo = prompt('Add a to do:')
//     add

// let objToDo = {userId: inputId, id: 101, title: addToDo, completed: false}