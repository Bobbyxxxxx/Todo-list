document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add');
    const inputText = document.getElementById('inputText');
    const listContainer = document.getElementById('listContainer');

    addButton.addEventListener('click', function () {
      const inputValue = inputText.value;

      if (inputValue !== '') {
        const listItem = document.createElement('li');
        const spanElement = document.createElement('span');
        const divElement = document.createElement('div');
        // classList for the above
        spanElement.classList.add('writeup');
        // spanElement.classList.add('tick');
        divElement.classList.add('btnContainer');


        const buttonElement1 = document.createElement('button');
        const buttonElement2 = document.createElement('button');
        buttonElement1.textContent = 'edit';
        buttonElement2.textContent = "delete";
       
        //classLIsts
        buttonElement1.classList.add('edit');
        buttonElement2.classList.add('delete');

        spanElement.textContent = inputValue;

        listItem.appendChild(spanElement);
        listItem.appendChild(divElement);
        divElement.appendChild(buttonElement1);
        divElement.appendChild(buttonElement2);

        listContainer.appendChild(listItem);

        // Clear the input field after adding the item
        inputText.value = '';
      }

        const editButton = document.querySelectorAll('.edit');
        const deleteButton = document.querySelectorAll('.delete');
        const span = document.querySelector('.writeup')

        editButton.forEach(btn => {
            btn.addEventListener("click", (e) => {
                if(e.currentTarget){
                    inputText.value = '';
                    inputText.value = e.currentTarget.parentElement.parentElement.firstChild.textContent
                    e.currentTarget.parentElement.parentElement.classList.add('display');
                }
            }), {once: true}
        })
        deleteButton.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.currentTarget.parentElement.parentElement.classList.add("display")
            })
        })
    });
  });