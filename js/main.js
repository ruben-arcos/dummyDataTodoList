// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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
        .then( (response) => response.json() )
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    // Start with getting just the first item and its title property.
    // Then capture the ol item into a variable(bucket) (getElementById)
    // createElement to make a new LI
    // createTextNode inside the li using the title property.
    // Now append the text to the new li element
    // Then append the element to the ol element.
    // Put all of that inside your populateTodos function.
    
    // ********************************************
    // Now that you have one element created and showing up on the screen, put the same code inside a for loop and 
    // iterate over the length of the array. 
    // But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)
    
    
    const populateTodos = () => {
    
       //these are the pieces I need to put the title in the ol
       let todoList = document.getElementById('todo-list')   
       
       //for loop
    
       for(let i=0; i < arrayOfTodos.length; i++) {
    
          let todoListItem = document.createElement('LI')                   
          let todoText = document.createTextNode(arrayOfTodos[i].title)  
    
    
          // build the string of code
          todoListItem.appendChild(todoText)  // put the text in the li      <li>Title</li>             
          todoList.appendChild(todoListItem)  // put the li in the ol        <ol id="todo-list"> <li>Title</li> </ol>    
       
       } // end for
       
    } // end function
    
    // DONE Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
    
    // DONE Fetch the same data.
    // DONE Store the data in a variable.
    
    // DONE Add an input for the userID. This input should only take in a number from 1 - 10.
    
    // Add a button that when clicked will:
    
        // clear the previous todos from the view : separate function
    
        // and populate the list with only todos with the userID that matches the number inputted. : separate function
    
    //clear btn
    const clearTodos = () => {
    
        const listClear = document.getElementsByTagName("OL")
        // loops over the HTML Collection of LIs inside the OL and clears them out
    
        for (let i=0; i < listClear.length; i++) {
    
         // sets the innerHTML to null
          listClear[i].innerHTML = null
        }  
    
    }
    

    const filterByID = () => {
    
        clearTodos();
    
        // capture the ol
       let todoList = document.getElementById('todo-list')   
    
       // input number from the user
       let userNum = document.getElementById("number_input").value
    
       let filterdArray = arrayOfTodos.filter( (users) => users.userId == userNum )
       
       //for loop
       for(let i=0; i < filterdArray.length; i++) {
    
          let todoListItem = document.createElement('LI')                    
          let todoText = document.createTextNode(filterdArray[i].title)  
          // build the string of code
          todoListItem.appendChild(todoText)  
          todoList.appendChild(todoListItem)   
       
       } // end for loop
    
    } //end function
    
    
    // then stores the currently filtered todos in a variable so that ...
    // You can create two more buttons that when clicked:
    
    // removes those todos from the view
    // and shows only todos that are either:
    // completed
    // not completed

    const populateV2 = () => {
    
       let todoList2 = document.getElementById('todo-list');
       
       for (let i = 0; i < arrayOfTodos.length; i++) {
    
          let todoListItem = document.createElement('LI');
          
          todoListItem.innerHTML = `<h3>${arrayOfTodos[i].title}</h3> <p>${arrayOfTodos[i].completed}</p>`;
          
          todoList2.appendChild(todoListItem);
       }
    }

//completed

const completedByUser = () => {
    clearTodos()
    fetchTodos()
    const number_input = document.getElementById('number_input').valueAsNumber
    const filterdArray = arrayOfTodos.filter((arr) => arr.userId === number_input && arr.completed == true)
    printList(filterdArray)
}

const printList = (arr) => {
    for (let i =0; i < arr.length; i++) {
        //find the ol by ID and put in variable
        let todoListItem = document.getElementById('todo-list');
        //create and element for a list item - li
        let todoItem = document.createElement('li');
        //create text element for the title
        let todoTitle = document.createTextNode('user: ' + arr[i].userId + 'title: '  + arr[i].title + ' completed: ' + arr[i].completed);
        //put the list item in the ol
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoListItem);
    }
}

