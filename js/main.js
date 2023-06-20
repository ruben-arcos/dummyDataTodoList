// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

  

    //**Start with getting just the first item and its title property.
    // Then capture the ol item into a variable (getElementById)
    // createElement to make a new LI
    // createTextNode inside the li using the title property.
    // Now append the text to the new element
    // Then append the element to the ol element.
    // Put all of that inside your populateTodos function.

// *******************************************************

    // Now that you have one element created and showing up on the screen, put the same code inside a for loop and 

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    arrayOfTodos = [];
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }

    const logTodos = () => {
        console.log(arrayOfTodos)
    }

    
    const populateTodos = () => {

        let todoList = document.getElementById('todo-list')

        for (let i = 0; i < arrayOfTodos.length; i++) {
            let todoListItem = document.createElement('li')
        let todoListText = document.createTextNode(arrayOfTodos[i].title)
        
            todoListItem.appendChild(todoListText)
            todoList.appendChild(todoListItem)
        }
    }