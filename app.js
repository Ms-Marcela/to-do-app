
function onReady() {
  const addToDoForm= document.getElementById ('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    //get the text
    let  title= newToDoText.value;

     // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    //create delete button
    let button = document.createElement('button')

    //name delete button
    button.textContent = "Delete";

    //delete an item on the list
    button.addEventListener('click', function(event){
    toDoList.removeChild(this.parentElement);
    })


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent= title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value= '';

    //add the delete button next to the checkbox
    newLi.appendChild(button).style.float="right";
    button.style.margin = "3px 20px 0px 0px";  

  });
}

window.onload = function() {
  alert ("The window has loaded!");
    onReady();
};
